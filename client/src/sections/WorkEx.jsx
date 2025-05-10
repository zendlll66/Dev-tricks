import React from 'react'
import { useState } from 'react';
import { FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';

const WorkEx = () => {
    const [expandedId, setExpandedId] = useState(null);
    const toggleExpand = (id) => {
        setExpandedId(prev => (prev === id ? null : id));
    };

    const workexp = [
        {
            id: 'work-1',
            img: '/assets/images/devsmith.png',
            title: 'Front-end ,UI/UX Designer',
            company: 'Devsmith',
            detail: 'A live tracking system for public buses around Naresuan University, designed to improve real-time vehicle tracking and user accessibility.',
            time: 'April 2024 - June 2024 (internship)',
            tool: ['Figma', 'React', 'TailwindCSS']
        },
        {
            id: 'work-2',
            img: '/assets/images/ennu.png',
            title: 'Front-end ,UI/UX Designer',
            company: 'Research ENNU',
            detail: 'A web application that collects and displays research papers, eBooks, and researcher profiles for the Faculty of Engineering at Naresuan University.',
            time: 'senior project',
            tool: ['Figma', 'React', 'TailwindCSS']
        }
    ];
    return (
        <div className='w-full'>
            <h1 className='text-3xl font-bold'>Work Experience</h1>
            <div>
                {workexp.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => toggleExpand(item.id)}
                        className=' flex flex-row items-start  space-x-5 w-full cursor-pointer group  p-4 rounded-xl transition'
                    >
                        <div className='w-20 shrink-0'>
                            <img src={item.img} alt="logo" />
                        </div>

                        <div className='w-full '>
                            <div className='flex flex-row items-center justify-between w-full'>
                                <div className='flex flex-row items-center gap-2'>
                                    <h1 className='text-2xl font-bold'>{item.company}</h1>
                                    <FaChevronRight
                                        className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${expandedId === item.id ? 'rotate-90 opacity-100' : ''}`}
                                    />
                                </div>
                                <p className='hidden  md:block '>{item.time}</p>
                            </div>
                            <p className='text-[#B9FF66] text-[12px] w-fit p-1 rounded-md bg-[#191A23]'>{item.title}</p>

                            <AnimatePresence>
                                {expandedId === item.id && (
                                    <motion.div
                                        className='pt-5 text-gray-700'
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <p>{item.detail}</p>
                                        <div className='flex flex-row items-center gap-2 flex-wrap'>
                                            {item.tool.map((tool) => (
                                                <p className='text-black text-[12px] italic w-fit p-1 rounded-md '>{tool}</p>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WorkEx