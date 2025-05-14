import React, { use, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getProjectsById, editProjects } from '../../../../service/projects'

const EditPostById = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [project, setProject] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [submitting, setSubmitting] = useState(false)

    useEffect(() => {
        const fetchPro = async () => {
            try {
                setLoading(true)
                setError(null)
                const res = await getProjectsById(id)
                console.log('API Response:', res)
                setProject(res.data)
            } catch (err) {
                console.error('Error fetching project:', err)
                setError(err.message || 'เกิดข้อผิดพลาดในการดึงข้อมูล')
            } finally {
                setLoading(false)
            }
        }
        fetchPro()
    }, [id])

    const handleChange = (e) => {
        const { name, value } = e.target
        setProject(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setSubmitting(true)
            setError(null)

            // สร้าง FormData object สำหรับส่งข้อมูล
            const formData = new FormData()
            formData.append('title', project.title)
            formData.append('description', project.description)
            formData.append('role', project.role)
            formData.append('demo_link', project.demo_link)
            formData.append('github_link', project.github_link)
            formData.append('techStack', JSON.stringify(project.techStack || []))

            // ถ้ามีการอัพโหลดรูปใหม่
            if (project.imageFile) {
                formData.append('image', project.imageFile)
            }

            await editProjects({ id, formData })
            alert('อัพเดทข้อมูลสำเร็จ')
            navigate('/dashboard/project/edit') // เพิ่ม / นำหน้าเพื่อให้เป็น absolute path
        } catch (err) {
            console.error('Error updating project:', err)
            setError(err.message || 'เกิดข้อผิดพลาดในการอัพเดทข้อมูล')
        } finally {
            setSubmitting(false)
        }
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setProject(prev => ({
                ...prev,
                imageFile: file
            }))
        }
    }

    if (loading) return <p>Loading...</p>
    if (error) return <p className="text-red-500">Error: {error}</p>
    if (!project) return <p>ไม่พบข้อมูลโปรเจค</p>

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Edit Project</h1>
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    {error}
                </div>
            )}
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label className="block mb-1">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={project.title}
                        onChange={handleChange}
                        className='w-full border-2 border-gray-300 rounded-md p-2'
                    />
                </div>

                <div>
                    <label className="block mb-1">Description</label>
                    <textarea
                        name="description"
                        value={project.description}
                        onChange={handleChange}
                        className='w-full border-2 border-gray-300 rounded-md p-2 h-32'
                    />
                </div>

                <div>
                    <label className="block mb-1">Role</label>
                    <input
                        type="text"
                        name="role"
                        value={project.role}
                        onChange={handleChange}
                        className='w-full border-2 border-gray-300 rounded-md p-2'
                    />
                </div>

                <div>
                    <label className="block mb-1">รูปภาพ</label>
                    <input
                        type="file"
                        name="imageFile"
                        onChange={handleImageChange}
                        accept="image/*"
                        className='w-full border-2 border-gray-300 rounded-md p-2'
                    />
                    {project.image_url && !project.imageFile && (
                        <img
                            src={project.image_url}
                            alt="Project preview"
                            className="mt-2 max-w-xs rounded-md"
                        />
                    )}
                </div>

                <div>
                    <label className="block mb-1">Demo Link</label>
                    <input
                        type="text"
                        name="demo_link"
                        value={project.demo_link}
                        onChange={handleChange}
                        className='w-full border-2 border-gray-300 rounded-md p-2'
                    />
                </div>

                <div>
                    <label className="block mb-1">GitHub Link</label>
                    <input
                        type="text"
                        name="github_link"
                        value={project.github_link}
                        onChange={handleChange}
                        className='w-full border-2 border-gray-300 rounded-md p-2'
                    />
                </div>

                <div>
                    <label className="block mb-1">Tech Stack (คั่นด้วยเครื่องหมายคอมม่า)</label>
                    <input
                        type="text"
                        name="techStack"
                        value={Array.isArray(project.techStack) ? project.techStack.join(', ') : ''}
                        onChange={(e) => setProject(prev => ({
                            ...prev,
                            techStack: e.target.value.split(',').map(tech => tech.trim()).filter(tech => tech)
                        }))}
                        className='w-full border-2 border-gray-300 rounded-md p-2'
                        placeholder="React, Node.js, MySQL"
                    />
                </div>

                <button
                    type="submit"
                    disabled={submitting}
                    className={`bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed flex items-center justify-center min-w-[120px]`}
                >
                    {submitting ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            กำลังบันทึก...
                        </>
                    ) : 'บันทึกการเปลี่ยนแปลง'}
                </button>
            </form>
        </div>
    )
}

export default EditPostById