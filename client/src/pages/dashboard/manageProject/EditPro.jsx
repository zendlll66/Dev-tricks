import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getProjects, deleteProjects } from '../../../../service/projects'

const DeleteConfirmationModal = ({ isOpen, onClose, onConfirm, projectTitle }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4">
                <h2 className="text-2xl font-bold mb-4">ยืนยันการลบ</h2>
                <p className="mb-6">คุณแน่ใจหรือไม่ว่าต้องการลบโปรเจค "{projectTitle}"?</p>
                <div className="flex justify-end gap-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                    >
                        ยกเลิก
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                    >
                        ลบ
                    </button>
                </div>
            </div>
        </div>
    );
};

const EditPro = () => {
    const [project, setProject] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    const [deleteModal, setDeleteModal] = useState({ isOpen: false, projectId: null, projectTitle: '' })

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true)
                const response = await getProjects()
                setProject(response || [])
            } catch (error) {
                console.error("Fetch blogs failed:", error)
                setProject([])
            } finally {
                setLoading(false)
            }
        }
        getData()
    }, [])


    const handleEdit = (id) => {
        console.log(id)
        navigate(`/dashboard/project/edit/${id}`)
    }

    // ลบ
    const handleDelete = async (id, title) => {
        setDeleteModal({ isOpen: true, projectId: id, projectTitle: title })
    }

    const confirmDelete = async () => {
        try {
            await deleteProjects({ id: deleteModal.projectId })
            setProject((prev) => prev.filter((project) => project.id !== deleteModal.projectId))
            setDeleteModal({ isOpen: false, projectId: null, projectTitle: '' })
        } catch (error) {
            console.error('❌ Failed to delete project:', error)
        }
    }

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }
    return (
        <div>
            <h1 className='text-4xl font-bold'>Edit Project</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-4'>
                {project.map((project) => (
                    <div key={project.id} className='bg-white shadow-md p-4 rounded-xl border text-start' >

                        <img src={project.image_url} alt="" />
                        <div>
                            <h2 className='text-2xl font-bold'>{project.title}</h2>
                            <p className='text-gray-500 text-sm truncate max-h-20'>{project.description}</p>
                        </div>

                        <div className='flex justify-end gap-2 mt-4'>
                            <button className='bg-blue-500 text-white px-4 py-2 rounded-md' onClick={() => handleEdit(project.id)}>Edit</button>
                            <button
                                className='bg-red-500 text-white px-4 py-2 rounded-md'
                                onClick={() => handleDelete(project.id, project.title)}
                            >
                                Delete
                            </button>
                        </div>

                    </div>


                ))}
            </div>

            <DeleteConfirmationModal
                isOpen={deleteModal.isOpen}
                onClose={() => setDeleteModal({ isOpen: false, projectId: null, projectTitle: '' })}
                onConfirm={confirmDelete}
                projectTitle={deleteModal.projectTitle}
            />
        </div>
    )
}

export default EditPro