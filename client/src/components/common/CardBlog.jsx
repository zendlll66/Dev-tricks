import React from 'react'
import HeadingCus from './HeadingCus'
import { useNavigate } from 'react-router-dom'
const CardBlog = ({ data }) => {
    const navigate = useNavigate()
    const handleSelect = (id) => {
        console.log("id : " + id)
        navigate(`/blogs/${id}`)
    }
    return (
        <div className='flex flex-col space-y-4 max-w-60 hover:scale-105 transition-all duration-500' onClick={() => handleSelect(data.id)} >
            <div className='h-30 overflow-hidden rounded-2xl border-1 bg-black/20 w-full aspect-[4/3]'>
                <img
                    src={data?.image_url}
                    alt=""
                    className='w-full h-full object-cover'
                />
            </div>
            <div>
                {/* <HeadingCus lebal="Javascript" /> */}
                <h1 className='text-lg font-bold'>{data?.title || 'ไม่มีชื่อบทความ'}</h1>
                <p className='font-light text-gray-600 line-clamp-2'>{data?.description || 'ไม่มีรายละเอียดบทความ'}</p>
            </div>
        </div>
    )
}

export default CardBlog