import React, { useState, useEffect } from 'react'
import CardBlog from '../components/common/CardBlog'
import { getBlogs } from '../../service/blogs'

// ✅ Skeleton Placeholder
const SkeletonCard = () => (
    <div className="animate-pulse bg-gray-500 rounded-md w-full shadow-md p-4 space-y-4">
        <div className="h-40 bg-gray-300 rounded w-50" />
        <div className="h-4 bg-gray-300 rounded w-30 " />
        <div className="h-4 bg-gray-300 rounded w-30 " />
    </div>
)

const BlogSection = () => {
    const [dataBlog, setDataBlog] = useState([])
    const [loading, setLoading] = useState(true)

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

    return (
        <div className='flex flex-col items-center md:items-start py-10'>
            <h1 className='text-3xl mb-10'>Blog & News</h1>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-10'>
                {loading
                    ? Array.from({ length: 4 }).map((_, index) => (
                        <SkeletonCard key={index} />
                    ))
                    : dataBlog.map((item, index) => (
                        <CardBlog key={index} data={item} />
                    ))}
            </div>
        </div>
    )
}

export default BlogSection
