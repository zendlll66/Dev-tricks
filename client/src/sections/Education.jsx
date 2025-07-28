import React from 'react'
import { useState } from 'react'
import { FaChevronRight, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from 'framer-motion';

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
    const toggleExpand = (id) => {
        setExpandedId(prev => (prev === id ? null : id));
    };

    return (
        <div className='w-full'>
            <motion.h1 
                className='text-3xl font-bold mb-8'
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, amount: 0.2 }}
            >
                Education
            </motion.h1>
            <motion.div 
                className='w-full'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: false, amount: 0.2 }}
            >
                {Education.map((item) => (
                    <motion.div
                        key={item.id}
                        className='relative group'
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <a
                            target="_blank"
                            href="https://www.nu.ac.th/"
                            rel="noopener noreferrer"
                            className='block'
                        >
                            <motion.div
                                onClick={() => toggleExpand(item.id)}
                                className='flex flex-row items-start space-x-5 w-full cursor-pointer p-6 rounded-xl transition-all duration-300 group'
                            >
                                {/* University logo with hover effect */}
                                <motion.div 
                                    className='w-20 shrink-0 relative'
                                    whileHover={{ rotate: 5, scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <img 
                                        src={item.img} 
                                        alt="logo" 
                                        className='rounded-lg'
                                    />
                                    <motion.div
                                        className='absolute inset-0  rounded-lg transition-opacity duration-300'
                                    />
                                </motion.div>

                                <div className='w-full'>
                                    <div className='flex flex-row items-center justify-between w-full'>
                                        <div className='flex flex-row items-center gap-3'>
                                            <motion.h1 
                                                className='text-2xl font-bold'
                                                whileHover={{ color: '#B9FF66' }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                {item.company}
                                            </motion.h1>
                                            <motion.div
                                                className={`transition-all duration-300 ${expandedId === item.id ? 'rotate-90' : ''}`}
                                            >
                                                <FaChevronRight className='text-gray-400 group-hover:text-[#B9FF66]' />
                                            </motion.div>
                                            <motion.div
                                                className='opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                                                whileHover={{ scale: 1.2 }}
                                            >
                                                <FaExternalLinkAlt className='text-[#B9FF66] text-sm' />
                                            </motion.div>
                                        </div>
                                        <motion.p 
                                            className='hidden md:block text-gray-500'
                                            whileHover={{ color: '#B9FF66' }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {item.time}
                                        </motion.p>
                                    </div>
                                    
                                    <motion.p 
                                        className='text-[#B9FF66] text-[12px] w-fit p-2 rounded-md bg-[#191A23] mt-2'
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        {item.title}
                                    </motion.p>

                                    {/* Hover effect for the entire card */}
                                    <motion.div
                                        className='absolute inset-0 bg-gradient-to-r from-[#B9FF66] to-[#8AFF33] opacity-0 rounded-xl transition-opacity duration-300 pointer-events-none'
                                    />
                                </div>
                            </motion.div>
                        </a>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Education