import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { postBlogs } from '../../../service/blogs'

const blockOptions = [
    { type: 'heading', label: 'Header' },
    { type: 'paragraph', label: 'Paragraph' },
    { type: 'image', label: 'Image Gallery' },
    { type: 'code', label: 'Code' },
]

const PostPage = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [blocks, setBlocks] = useState([])
    const [image_url, setImageUrl] = useState('')
    const [imageFile, setImageFile] = useState(null)
    const [uploadingImages, setUploadingImages] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleMainImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setImageFile(file);
        const reader = new FileReader();
        reader.onloadend = () => {
            setImageUrl(reader.result);
        };
        reader.readAsDataURL(file);
    }

    const addBlock = (type) => {
        const newBlock = {
            id: uuidv4(),
            type,
            data: type === 'heading' ? { text: '', level: 2 } :
                type === 'paragraph' ? { text: '' } :
                    type === 'image' ? { caption: '', url: '' } :
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

    const handleImageUpload = async (blockId, e) => {
        const file = e.target.files[0];
        if (!file) return;

        setUploadingImages(prev => ({ ...prev, [blockId]: true }));

        try {
            const formData = new FormData();
            formData.append('image', file);

            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/upload/images`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: formData
            });

            if (!response.ok) throw new Error('Upload failed');

            const data = await response.json();
            
            setBlocks(blocks.map(block => 
                block.id === blockId 
                    ? { 
                        ...block, 
                        data: { 
                            ...block.data,
                            url: data.url
                        } 
                    }
                    : block
            ));
        } catch (error) {
            console.error('Error uploading image:', error);
            alert('เกิดข้อผิดพลาดในการอัพโหลดรูปภาพ');
        } finally {
            setUploadingImages(prev => ({ ...prev, [blockId]: false }));
        }
    }

    const removeImage = (blockId, imageIndex) => {
        setBlocks(blocks.map(block =>
            block.id === blockId
                ? {
                    ...block,
                    data: {
                        ...block.data,
                        images: block.data.images.filter((_, index) => index !== imageIndex)
                    }
                }
                : block
        ));
    }

    const handleSubmit = async () => {
        if (!title || !description ) {
            alert('กรุณากรอกข้อมูลให้ครบถ้วน');
            return;
        }

        setIsSubmitting(true);
        console.log('Blocks data before sending:', blocks);

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('blocks', JSON.stringify(blocks));
        
        if (imageFile) {
            formData.append('image', imageFile);
        }

        try {
            await postBlogs(formData);
            navigate('/dashboard');
        } catch (error) {
            console.error('Error posting blog:', error);
            alert('เกิดข้อผิดพลาดในการบันทึกบทความ');
        } finally {
            setIsSubmitting(false);
        }
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

                <div>
                    <label className="block text-sm font-medium">Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleMainImageUpload}
                        className="w-full border-2 border-dashed border-gray-300 rounded p-2"
                    />
                    {image_url && (
                        <div className="mt-2">
                            <img 
                                src={image_url} 
                                alt="Preview" 
                                className="max-h-48 object-contain rounded"
                            />
                        </div>
                    )}
                </div>


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
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => handleImageUpload(block.id, e)}
                                        className="w-full border p-2 rounded-md"
                                        disabled={uploadingImages[block.id]}
                                    />
                                    {uploadingImages[block.id] && (
                                        <span className="text-sm text-gray-500">กำลังอัพโหลด...</span>
                                    )}
                                </div>
                                
                                {block.data.url && (
                                    <div className="space-y-2">
                                        <img 
                                            src={block.data.url} 
                                            alt="Uploaded" 
                                            className="w-full h-48 object-contain rounded-md"
                                        />
                                        <input
                                            type="text"
                                            placeholder="คำอธิบายรูปภาพ"
                                            className="w-full border p-2 rounded-md"
                                            value={block.data.caption || ''}
                                            onChange={(e) => updateBlock(block.id, 'caption', e.target.value)}
                                        />
                                    </div>
                                )}
                            </div>
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
                disabled={isSubmitting}
                className={`bg-[#B9FF66] text-black px-6 py-2 border-b-2 border-[1px] rounded-md cursor-pointer transition-all duration-500 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
                }`}
            >
                {isSubmitting ? 'กำลังบันทึก...' : 'บันทึกบทความ'}
            </button>
        </div>
    )
}

export default PostPage
