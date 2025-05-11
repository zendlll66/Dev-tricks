import React, { useEffect, useState } from 'react'
import { deleteBlogs, getBlogs } from '../../../service/blogs'
import { useNavigate } from 'react-router-dom'
const EditDelete = () => {
    const [blogs, setBlogs] = useState([])
    const [dataBlog, setDataBlog] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true)
                const response = await getBlogs()
                setDataBlog(response || [])
            } catch (error) {
                console.error("Fetch blogs failed:", error)
                setDataBlog([])
            } finally {
                setLoading(false)
            }
        }
        getData()
    }, [])

    // แก้ไข
    const handleEdit = (id) => {
        // คุณสามารถใช้ navigate ไปหน้า /edit/:id หรือเปิด modal ก็ได้
        navigate(`/dashboard/blog/edit/${id}`)
        console.log('📝 Edit blog ID:', id)
    }

    // ลบ
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm('คุณแน่ใจหรือไม่ว่าต้องการลบโพสต์นี้?')
        if (!confirmDelete) return

        try {
            await deleteBlogs({ id })
            setBlogs((prev) => prev.filter((blog) => blog.id !== id))
        } catch (error) {
            console.error('❌ Failed to delete blog:', error)
        }
    }

    return (
        <div className="p-4 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-4 text-center">📝 จัดการข่าว</h1>
            <div className="grid md:grid-cols-2 gap-4">
                {dataBlog.map((blog) => (
                    <div key={blog.id} className="bg-white shadow-md p-4 rounded-xl border">
                        <h2 className="text-lg font-semibold">{blog.title}</h2>
                        <p className="text-gray-700 mt-2 line-clamp-3">{blog.description}</p>
                        <div className="flex justify-end mt-4 space-x-2">
                            <button
                                onClick={() => handleEdit(blog.id)}
                                className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(blog.id)}
                                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EditDelete
