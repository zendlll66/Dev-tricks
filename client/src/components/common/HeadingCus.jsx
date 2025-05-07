import React from 'react'

const HeadingCus = ({ lebal }) => {
    return (
        <div className='select-none'>
            <h1 className='border-b-3 border-[0.5px] w-fit px-2 py-1 rounded-lg hover:bg-[#B9FF66] bg-[#B9FF66] hover:cursor-pointer hover:scale-102 transition-all duration-500'>
                {lebal}
            </h1>
        </div>
    )
}

export default HeadingCus