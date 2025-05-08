import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getBlogsById } from '../../service/blogs'

const BlogDetail = () => {
    const [dataBlog, setDataBlog] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await getBlogsById(id)
                setDataBlog(res)
            } catch (error) {
                console.error('Error fetching blog:', error)
            }
        }
        if (id) fetchBlog()
    }, [id])

    const renderBlock = (block, index) => {
        switch (block.type) {
            case 'heading':
                const Tag = `h${block.data.level}`
                return (
                    <Tag
                        key={index}
                        className={`mt-8 mb-4 font-bold text-gray-800 ${block.data.level === 1 ? 'text-3xl' :
                                block.data.level === 2 ? 'text-2xl' :
                                    block.data.level === 3 ? 'text-xl' : 'text-lg'
                            }`}
                    >
                        {block.data.text}
                    </Tag>
                )
            case 'paragraph':
                return (
                    <p key={index} className="mb-5 text-base leading-7 text-gray-700">
                        {block.data.text}
                    </p>
                )
            case 'list':
                return block.data.style === 'unordered' ? (
                    <ul key={index} className="list-disc pl-6 mb-5 text-gray-700">
                        {block.data.items.map((item, i) => (
                            <li key={i} className="mb-1">{item}</li>
                        ))}
                    </ul>
                ) : (
                    <ol key={index} className="list-decimal pl-6 mb-5 text-gray-700">
                        {block.data.items.map((item, i) => (
                            <li key={i} className="mb-1">{item}</li>
                        ))}
                    </ol>
                )
            case 'code':
                return (
                    <pre
                        key={index}
                        className="bg-gray-900 text-white rounded-md p-4 text-sm overflow-x-auto mb-6"
                    >
                        <code>{block.data.code}</code>
                    </pre>
                )
            case 'image':
                return (
                    <div key={index} className="my-8 flex flex-col items-center">
                        <img
                            src={block.data.url}
                            alt={block.data.caption || 'Blog image'}
                            className="rounded-md shadow-lg max-w-full h-auto"
                        />
                        {block.data.caption && (
                            <p className="text-sm text-gray-500 mt-2">{block.data.caption}</p>
                        )}
                    </div>
                )
            default:
                return null
        }
    }

    if (!dataBlog) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-gray-500">กำลังโหลดข้อมูล...</p>
            </div>
        )
    }

    return (
        <div className="px-2 sm:px-6 lg:px-8 max-w-4xl w-full  py-10">
            <article className="sm:prose lg:prose-lg">
                <h1 className="text-4xl font-extrabold text-gray-900">{dataBlog.title}</h1>
                <p className="text-gray-600 mt-2 mb-8">{dataBlog.description}</p>
                {dataBlog.blocks.map((block, index) => renderBlock(block, index))}
            </article>
        </div>
    )
}

export default BlogDetail