import React, { useState } from 'react';
import SpinningTextAroundImage from '../components/common/SpinningTextAroundImage';
import { FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';

const AboutPage = () => {
    const [expandedId, setExpandedId] = useState(null);



    const workexp = [
        {
            id: 'work-1',
            img: '/assets/images/devsmith.png',
            title: 'Front-end ,UI/UX Designer',
            company: 'Devsmith',
            detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem totam doloribus enim dignissimos explicabo possimus ratione eum fugit repudiandae nihil.',
            time: 'April 2024 - June 2024'
        },
        {
            id: 'work-2',
            img: '/assets/images/ennu.png',
            title: 'Front-end ,UI/UX Designer',
            company: 'Research ENNU',
            detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem totam doloribus enim dignissimos explicabo possimus ratione eum fugit repudiandae nihil.',
            time: 'senior project'
        }
    ];


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

    const toggleExpand = (id) => {
        setExpandedId(prev => (prev === id ? null : id));
    };

    return (
        <div className='select-none w-full'>
            {/* Grid Background */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

            {/* Header */}
            <div className='flex flex-row items-center justify-between space-x-5'>
                <div>
                    <h1 className='text-5xl font-bold'>HI, I'M ZEND</h1>
                    <p className='text-gray-600 text-4xl'>I'M A FULL-STACK WEB DEVELOPER</p>
                </div>
                <SpinningTextAroundImage />
            </div>

            {/* About */}
            <div className='flex flex-row items-center space-x-5 mt-10'>
                <div>
                    <h1 className='text-3xl font-bold'>ABOUT ME</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                </div>
            </div>

            {/* Work Experience */}
            <div className='flex flex-row mt-20 items-center  space-x-5'>
                <div className='w-full'>
                    <h1 className='text-3xl font-bold'>Work Experience</h1>
                    <div>
                        {workexp.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => toggleExpand(item.id)}
                                className=' flex flex-row items-start space-x-5 w-full cursor-pointer group hover:bg-gray-100 p-4 rounded-xl transition'
                            >
                                <div className='w-20 shrink-0'>
                                    <img src={item.img} alt="logo" />
                                </div>

                                <div className='w-full'>
                                    <div className='flex flex-row items-center justify-between w-full'>
                                        <div className='flex flex-row items-center gap-2'>
                                            <h1 className='text-2xl font-bold'>{item.company}</h1>
                                            <FaChevronRight
                                                className={`transition-transform duration-300 ${expandedId === item.id ? 'rotate-90' : ''
                                                    }`}
                                            />
                                        </div>
                                        <p>{item.time}</p>
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
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            {/* Education */}
            <div className='flex flex-row mt-20 items-center  space-x-5'>
                <div className='w-full'>
                    <h1 className='text-3xl font-bold'>Education</h1>
                    <div className='w-full'>
                        {Education.map((item) => (
                            <a href="https://www.nu.ac.th/">
                                <div
                                    key={item.id}
                                    onClick={() => toggleExpand(item.id)}
                                    className=' flex flex-row items-start space-x-5 w-full cursor-pointer group hover:bg-gray-100 p-4 rounded-xl transition'
                                >
                                    <div className='w-20 shrink-0'>
                                        <img src={item.img} alt="logo" />
                                    </div>

                                    <div className='w-full'>
                                        <div className='flex flex-row items-center justify-between w-full'>
                                            <div className='flex flex-row items-center gap-2'>
                                                <h1 className='text-2xl font-bold'>{item.company}</h1>
                                                <FaChevronRight
                                                    className={`transition-transform duration-300 ${expandedId === item.id ? 'rotate-90' : ''
                                                        }`}
                                                />
                                            </div>
                                            <p>{item.time}</p>
                                        </div>
                                        <p className='text-[#B9FF66] text-[12px] w-fit p-1 rounded-md bg-[#191A23]'>{item.title}</p>

                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>


            {/* skills */}
            <div className='mt-20'>
                <h1 className='text-3xl font-bold'>Skills</h1>
            </div>
        </div>
    );
};

export default AboutPage;
