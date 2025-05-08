import React from 'react'
import CardBlog from '../components/common/CardBlog'
import { useState, useEffect } from 'react'
import { getBlogs } from '../../service/blogs'



const BlogSection = () => {
    const [dataBlog, setDataBlog] = useState([])

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await getBlogs()
                console.log('RESPONSE:', response)
                setDataBlog(response || [])
            } catch (error) {
                console.error("Fetch blogs failed:", error)
                setDataBlog([]) // fallback to empty array
            }
        }
        getData()
    }, [])

    return (
        <div className='flex flex-col items-center md:items-start px-10 md:px-20 py-10 '>
            <h1 className='text-3xl mb-10'>Blog & News</h1>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10  ' >
                {dataBlog.map((item, index) =>
                    <CardBlog key={index} data={item}  />
                )}
            </div>
        </div>
    )
}

export default BlogSection
