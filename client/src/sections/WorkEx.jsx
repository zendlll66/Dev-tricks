import React from 'react'
import { useState } from 'react';
import { FaChevronRight, FaExternalLinkAlt } from "react-icons/fa";
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
        },
        {
            id: 'work-3',
            img: '/assets/images/freelance.webp',
            title: 'Front-end ,UI/UX Designer',
            company: 'Freelance',
            detail: 'Freelance projects involving UI/UX design with Figma and development using React Native, React, and Next.js. Experience includes creating demo apps such as gold savings, parking lot, doctor appointment, car rental, ride-hailing, and car sales apps. Also developed web platforms for car rental, parking lot management, ecommerce, lawyer landing pages, real estate, and backoffice systems for the mentioned apps and websites.',
            time: 'freelance',
            tool: ['Figma', 'React', 'TailwindCSS', 'Next.js', 'React Native']
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
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
                Work Experience
            </motion.h1>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
            >
                {workexp.map((item, index) => (
                    <motion.div
                        variants={itemVariants}
                        key={item.id}
                        className='relative group'
                    >
                        <motion.div
                            onClick={() => toggleExpand(item.id)}
                            className='flex flex-row items-start space-x-5 w-full cursor-pointer p-6 rounded-xl transition-all duration-300'
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {/* Company logo with hover effect */}
                            <motion.div
                                className='w-20 shrink-0 relative'
                                whileHover={{ rotate: 5, scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <img
                                    src={item.img}
                                    alt="logo"
                                    className='rounded-lg '
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

                                <AnimatePresence>
                                    {expandedId === item.id && (
                                        <motion.div
                                            className='pt-6 text-gray-700 space-y-4'
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.4, ease: "easeInOut" }}
                                        >
                                            <motion.p
                                                className='leading-relaxed'
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.2 }}
                                            >
                                                {item.detail}
                                            </motion.p>
                                            <motion.div
                                                className='flex flex-row items-center gap-2 flex-wrap'
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.3 }}
                                            >
                                                <span className='text-sm font-medium text-gray-600'>Technologies:</span>
                                                {item.tool.map((tool, toolIndex) => (
                                                    <motion.span
                                                        key={toolIndex}
                                                        className='text-black text-[12px] italic w-fit p-2 rounded-md bg-gray-100 hover:bg-[#B9FF66] hover:text-black transition-colors duration-300 cursor-default'
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                    >
                                                        {tool}
                                                    </motion.span>
                                                ))}
                                            </motion.div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>

                        {/* Decorative line between items */}
                        {index < workexp.length - 1 && (
                            <motion.div
                                className='h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mx-6 my-4'
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                            />
                        )}
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default WorkEx