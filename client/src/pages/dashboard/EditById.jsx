import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getBlogsById, editBlogs } from '../../../service/blogs'
import { useNavigate } from 'react-router-dom'

const EditById = () => {
    const { id } = useParams()
    const [blog, setBlog] = useState(null)
    const navigate = useNavigate()
    useEffect(() => {
        const fetch = async () => {
            const res = await getBlogsById(id)
            setBlog(res)
        }
        fetch()
    }, [id])

    const handleChange = (key, value) => {
        setBlog({ ...blog, [key]: value })
    }

    const handleBlockChange = (index, key, value) => {
        const newBlocks = [...blog.blocks]
        newBlocks[index].data[key] = value
        setBlog({ ...blog, blocks: newBlocks })
    }

    const handleSave = async () => {
        try {
            await editBlogs(blog) // ใช้ editBlogs ตามชื่อที่ให้มา
            alert('บันทึกเรียบร้อย')
            navigate('/dashboard')
        } catch (err) {
            console.error(err)
            alert('เกิดข้อผิดพลาด')
        }
    }

    if (!blog) return <p>Loading...</p>

    return (
        <div className="p-4 max-w-3xl mx-auto">
            <h2 className="text-xl font-bold mb-4">📝 แก้ไขบทความ</h2>

            <label className="block font-medium mb-1">หัวข้อ</label>
            <input
                className="border p-2 w-full mb-4"
                value={blog.title}
                onChange={(e) => handleChange('title', e.target.value)}
            />

            <label className="block font-medium mb-1">คำอธิบาย</label>
            <textarea
                className="border p-2 w-full mb-4"
                value={blog.description}
                onChange={(e) => handleChange('description', e.target.value)}
            />

            <h3 className="font-semibold mb-2">Blocks</h3>
            {blog.blocks.map((block, i) => (
                <div key={i} className="mb-6 border p-4 rounded bg-gray-50">
                    <p className="font-medium mb-2">ประเภท: {block.type}</p>
                    {block.type === 'heading' && (
                        <>
                            <label>ข้อความ:</label>
                            <input
                                className="border p-2 w-full mb-2"
                                value={block.data.text}
                                onChange={(e) => handleBlockChange(i, 'text', e.target.value)}
                            />
                            <label>ระดับ:</label>
                            <input
                                type="number"
                                className="border p-2 w-full"
                                value={block.data.level}
                                onChange={(e) => handleBlockChange(i, 'level', parseInt(e.target.value))}
                            />
                        </>
                    )}

                    {block.type === 'paragraph' && (
                        <>
                            <label>ข้อความ:</label>
                            <textarea
                                className="border p-2 w-full"
                                value={block.data.text}
                                onChange={(e) => handleBlockChange(i, 'text', e.target.value)}
                            />
                        </>
                    )}

                    {block.type === 'list' && (
                        <>
                            <label>รายการ (คั่นด้วย `Enter`):</label>
                            <textarea
                                className="border p-2 w-full"
                                value={block.data.items.join('\n')}
                                onChange={(e) =>
                                    handleBlockChange(i, 'items', e.target.value.split('\n'))
                                }
                            />
                        </>
                    )}

                    {block.type === 'code' && (
                        <>
                            <label>ภาษา:</label>
                            <input
                                className="border p-2 w-full mb-2"
                                value={block.data.language}
                                onChange={(e) => handleBlockChange(i, 'language', e.target.value)}
                            />
                            <label>โค้ด:</label>
                            <textarea
                                className="border p-2 w-full"
                                value={block.data.code}
                                onChange={(e) => handleBlockChange(i, 'code', e.target.value)}
                            />
                        </>
                    )}

                    {block.type === 'image' && (
                        <>
                            <label>URL รูปภาพ:</label>
                            <input
                                className="border p-2 w-full mb-2"
                                value={block.data.url}
                                onChange={(e) => handleBlockChange(i, 'url', e.target.value)}
                            />
                            <label>คำบรรยาย:</label>
                            <input
                                className="border p-2 w-full"
                                value={block.data.caption}
                                onChange={(e) => handleBlockChange(i, 'caption', e.target.value)}
                            />
                        </>
                    )}
                </div>
            ))}

            <button
                className="bg-blue-600 text-white py-2 px-4 rounded"
                onClick={handleSave}
            >
                💾 บันทึก
            </button>
        </div>
    )
}

export default EditById
