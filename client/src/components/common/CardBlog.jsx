import React from 'react'
import HeadingCus from './HeadingCus'
const CardBlog = ({ data }) => {
    console.log("DATA RECEIVED:", data)
    return (
        <div className='flex flex-col space-y-4 max-w-60 hover:scale-105 transition-all duration-500'>
            <div className='h-30 overflow-clip rounded-2xl object-cover border-1 bg-black/20 w-full'>
                <img src="/assets/images/undraw_mobile.svg" alt="" />
            </div>
            <div>
                <HeadingCus lebal="Javascript" />
                <h1 className='text-lg font-bold'>{data?.title || 'ไม่มีชื่อบทความ'}</h1>
                <p className='font-light text-gray-600'>{data?.description || 'ไม่มีรายละเอียดบทความ'}</p>
            </div>
        </div>
    )
}

export default CardBlog