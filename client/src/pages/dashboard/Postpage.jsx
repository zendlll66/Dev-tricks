import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { postBlogs } from '../../../service/blogs'

const blockOptions = [
    { type: 'heading', label: 'Header' },
    { type: 'paragraph', label: 'Paragraph' },
    { type: 'image', label: 'Image' },
    { type: 'code', label: 'Code' },
]

const PostPage = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [blocks, setBlocks] = useState([])

    const addBlock = (type) => {
        const newBlock = {
            id: uuidv4(),
            type,
            data: type === 'heading' ? { text: '', level: 2 } :
                type === 'paragraph' ? { text: '' } :
                    type === 'image' ? { url: '', caption: '' } :
                        type === 'code' ? { code: '' } : {}
        }
        setBlocks([...blocks, newBlock])
    }

    const updateBlock = (id, field, value) => {
        setBlocks(blocks.map(block => block.id === id
            ? { ...block, data: { ...block.data, [field]: value } }
            : block
        ))
    }

    const removeBlock = (id) => {
        setBlocks(blocks.filter(block => block.id !== id))
    }

    const handleSubmit = async () => {
        const payload = {
            title,
            description,
            blocks,
        }
        console.log('POST PAYLOAD:', payload)
        await postBlogs(payload)
        // ส่งไป API ได้ที่นี่
        // navigate('/dashboard') // กลับหน้าหลังโพสต์เสร็จ
    }

    return (
        <div className="max-w-3xl mx-auto p-6 space-y-6">
            <h1 className="text-3xl font-bold">สร้างบทความใหม่</h1>

            <div className="space-y-4">
                <input
                    type="text"
                    placeholder="หัวข้อบทความ (Title)"
                    className="w-full border p-3 rounded-md"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <textarea
                    placeholder="คำอธิบายสั้นๆ (Description)"
                    className="w-full border p-3 rounded-md"
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />


            </div>

            <div className="space-y-6">
                {blocks.map((block, index) => (
                    <div key={block.id} className="p-4 border rounded-md bg-gray-50 space-y-2">
                        <div className="flex justify-between items-center">
                            <strong>{index + 1}. {block.type}</strong>
                            <button
                                onClick={() => removeBlock(block.id)}
                                className="text-red-500 text-sm cursor-pointer"
                            >
                                ลบ
                            </button>
                        </div>

                        {block.type === 'heading' && (
                            <>
                                <select
                                    value={block.data.level}
                                    onChange={(e) => updateBlock(block.id, 'level', parseInt(e.target.value))}
                                    className="border p-2 rounded-md"
                                >
                                    <option value={1}>H1</option>
                                    <option value={2}>H2</option>
                                    <option value={3}>H3</option>
                                </select>
                                <input
                                    type="text"
                                    placeholder="หัวข้อ"
                                    className="w-full border p-2 rounded-md"
                                    value={block.data.text}
                                    onChange={(e) => updateBlock(block.id, 'text', e.target.value)}
                                />
                            </>
                        )}

                        {block.type === 'paragraph' && (
                            <textarea
                                placeholder="เนื้อหา"
                                className="w-full border p-2 rounded-md"
                                rows={4}
                                value={block.data.text}
                                onChange={(e) => updateBlock(block.id, 'text', e.target.value)}
                            />
                        )}

                        {block.type === 'image' && (
                            <>
                                <input
                                    type="text"
                                    placeholder="Image URL"
                                    className="w-full border p-2 rounded-md"
                                    value={block.data.url}
                                    onChange={(e) => updateBlock(block.id, 'url', e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="คำบรรยายภาพ"
                                    className="w-full border p-2 rounded-md"
                                    value={block.data.caption}
                                    onChange={(e) => updateBlock(block.id, 'caption', e.target.value)}
                                />
                            </>
                        )}

                        {block.type === 'code' && (
                            <textarea
                                placeholder="Code"
                                className="w-full font-mono border p-2 rounded-md bg-black text-white"
                                rows={6}
                                value={block.data.code}
                                onChange={(e) => updateBlock(block.id, 'code', e.target.value)}
                            />
                        )}
                    </div>
                ))}
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
                {blockOptions.map((block) => (
                    <button
                        key={block.type}
                        onClick={() => addBlock(block.type)}
                        className="bg-[#B9FF66] cursor-pointer text-black border-b-2 border-black border-[1px] px-3 py-1 rounded-md hover:scale-105 transition-all duration-500"
                    >
                        {block.label}
                    </button>
                ))}
            </div>
            <button
                onClick={handleSubmit}
                className="bg-[#B9FF66] text-black px-6 py-2 border-b-2 border-[1px] rounded-md cursor-pointer hover:scale-105 transition-all duration-500"
            >
                บันทึกบทความ
            </button>
        </div>
    )
}

export default PostPage
