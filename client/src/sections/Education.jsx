import React from 'react'
import { useState } from 'react'
import { FaChevronRight } from "react-icons/fa";

const Education = () => {

    const Education = [
        {
            id: 'edu-1',
            img: '/assets/images/NULOGO.png',
            title: 'Bachelor of Computer Engineering',
            company: 'naresuan university',
            detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem totam doloribus enim dignissimos explicabo possimus ratione eum fugit repudiandae nihil.',
            time: '2021 - 2025'
        }
    ]

    const [expandedId, setExpandedId] = useState(null);
    return (
        <div className='w-full'>
            <h1 className='text-3xl font-bold'>Education</h1>
            <div className='w-full'>
                {Education.map((item) => (
                    <a
                        target="_blank"
                        href="https://www.nu.ac.th/"
                        rel="noopener noreferrer"

                    >
                        <div
                            key={item.id}
                            onClick={() => toggleExpand(item.id)}
                            className=' flex flex-row items-start space-x-5 w-full cursor-pointer group  p-4 rounded-xl transition'
                        >
                            <div className='w-20 shrink-0'>
                                <img src={item.img} alt="logo" />
                            </div>

                            <div className='w-full'>
                                <div className='flex flex-row items-center justify-between w-full'>
                                    <div className='flex flex-row items-center gap-2'>
                                        <h1 className='text-2xl font-bold'>{item.company}</h1>
                                        <FaChevronRight
                                            className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${expandedId === item.id ? 'rotate-90 opacity-100' : ''}`}
                                        />
                                    </div>
                                    <p className='hidden md:block'>{item.time}</p>
                                </div>
                                <p className='text-[#B9FF66] text-[12px] w-fit p-1 rounded-md bg-[#191A23]'>{item.title}</p>

                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Education