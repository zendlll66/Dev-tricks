import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

// ข้อมูลจำลอง
const activities = [
    {
        id: '1',
        title: 'THINNO สสส.',
        description: 'โครงการประกวดนวัตกรรมสร้างเสริมสุขภาพ อันดับที่ 2 ระดับประเทศ',
        date: '03/64',
        image: '/assets/images/ac1.jpg',
        
    },
    {
        id: '2',
        title: 'STEM',
        description: 'การแข่งขันSTEMระดับประเทศ',
        date: '09/62',
        image: '/assets/images/ac2.jpg',
    },
]

const Activity = () => {
    const navigate = useNavigate()

    const fadeRight = (delay = 0) => ({
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
                delay,
            },
        },
    });

    const handleClick = (id) => {
        navigate(`details/${id}`)
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="p-6 flex flex-col justify-start w-full"
        >
            <motion.h1
                className="text-4xl font-bold mb-6 uppercase"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                My Activities
            </motion.h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {activities.map((act, index) => (
                    <motion.div
                        key={act.id}
                        className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:scale-105 hover:shadow-lg transition"
                        onClick={() => handleClick(act.id)}
                        variants={fadeRight(index * 0.1)}
                        initial="hidden"
                        animate="visible"
                    >
                        <img
                            src={act.image}
                            alt={act.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">{act.title}</h2>
                            <p className="text-gray-600 text-sm mt-1">{act.description}</p>
                            <p className="text-gray-400 text-xs mt-2">{act.date}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

export default Activity
