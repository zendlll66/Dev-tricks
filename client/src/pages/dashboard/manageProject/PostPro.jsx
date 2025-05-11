import React, { useState } from 'react'
import { postProjects } from '../../../../service/projects'

const PostPro = () => {
    const [form, setForm] = useState({
        title: '',
        description: '',
        role: '',
        imageFile: null,
        image_url: '',
        demo_link: '',
        github_link: '',
        techStack: '', // ต้องไม่ลืมตรงนี้!
    })

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const techs = form.techStack
        .split(',')
        .map(t => t.trim())
        .filter(t => t)

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const handleImageUpload = (e) => {
        const file = e.target.files[0]
        if (file) {
            setForm({ ...form, imageFile: file, image_url: URL.createObjectURL(file) }) // preview รูป
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);

        try {
            await postProjects(form);
            setSuccess(true);

            setForm({
                title: '',
                description: '',
                role: '',
                imageFile: null,
                image_url: '',
                demo_link: '',
                github_link: '',
                techStack: '',
            });
        } catch (err) {
            alert(err.message || 'Failed to post project');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Create Project</h2>
            <form onSubmit={handleSubmit} className="space-y-4">

                {/* Title */}
                <div>
                    <label className="block text-sm font-medium">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        className="w-full border rounded p-2"
                    />
                </div>

                {/* Description (Textarea) */}
                <div>
                    <label className="block text-sm font-medium">Description</label>
                    <textarea
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        rows={5}
                        className="w-full border rounded p-2 resize-none"
                    />
                </div>

                {/* Role */}
                <div>
                    <label className="block text-sm font-medium">Role</label>
                    <input
                        type="text"
                        name="role"
                        value={form.role}
                        onChange={handleChange}
                        className="w-full border rounded p-2"
                    />
                </div>

                {/* Image Upload */}
                <div>
                    <label className="block text-sm font-medium">Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="w-full border-2 border-dashed border-gray-300 rounded p-2"
                    />
                    {form.image_url && (
                        <img src={form.image_url} alt="Uploaded" className="w-full h-full object-cover mt-2 rounded" />
                    )}
                </div>

                {/* Demo Link */}
                <div>
                    <label className="block text-sm font-medium">Demo Link</label>
                    <input
                        type="text"
                        name="demo_link"
                        value={form.demo_link}
                        onChange={handleChange}
                        className="w-full border rounded p-2"
                    />
                </div>

                {/* GitHub Link */}
                <div>
                    <label className="block text-sm font-medium">GitHub Link</label>
                    <input
                        type="text"
                        name="github_link"
                        value={form.github_link}
                        onChange={handleChange}
                        className="w-full border rounded p-2"
                    />
                </div>

                {/* Tech Stack */}
                <div>
                    <label className="block text-sm font-medium">Tech Stack (comma separated)</label>
                    <input
                        type="text"
                        name="techStack"
                        value={form.techStack}
                        onChange={handleChange}
                        placeholder="React.js, Tailwind, Figma"
                        className="w-full border rounded p-2"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    disabled={loading}
                >
                    {loading ? 'Posting...' : 'Submit'}
                </button>
                {success && <p className="text-green-500 mt-2">Project posted successfully!</p>}
            </form>
        </div>
    )
}

export default PostPro
