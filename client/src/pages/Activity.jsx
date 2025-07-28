import React, { useState } from 'react'
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
        category: 'Innovation',
        status: 'Completed'
    },
    {
        id: '2',
        title: 'STEM',
        description: 'การแข่งขันSTEMระดับประเทศ',
        date: '09/62',
        image: '/assets/images/ac2.jpg',
        category: 'Competition',
        status: 'Completed'
    },
   
]

const Activity = () => {
    const navigate = useNavigate()
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [searchTerm, setSearchTerm] = useState('')

    const categories = ['All', 'Innovation', 'Competition', 'Technology', 'Research', 'Business', 'Academic']

    const fadeRight = (delay = 0) => ({
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                delay,
                ease: "easeOut"
            },
        },
    });

    const handleClick = (id) => {
        navigate(`details/${id}`)
    }

    const filteredActivities = activities.filter(activity => {
        const matchesCategory = selectedCategory === 'All' || activity.category === selectedCategory
        const matchesSearch = activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             activity.description.toLowerCase().includes(searchTerm.toLowerCase())
        return matchesCategory && matchesSearch
    })

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen p-6"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-5xl font-bold mb-4 bg-gradient-to-br from-[#191A23] via-[#1a1b25] to-[#1c1d27] bg-clip-text text-transparent">
                        My Activities
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Explore my journey through various competitions, projects, and achievements
                    </p>
                </motion.div>

                {/* Search and Filter Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-8"
                >
                    <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                        {/* Search Bar */}
                        <div className="relative w-full md:w-96">
                            <input
                                type="text"
                                placeholder="Search activities..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B9FF66] focus:border-transparent transition-all bg-white text-gray-900 placeholder-gray-500"
                            />
                            <svg className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>

                        {/* Category Filter */}
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                        selectedCategory === category
                                            ? 'bg-[#B9FF66] text-[#191A23] shadow-lg'
                                            : 'bg-white text-gray-600 hover:bg-[#B9FF66] hover:text-[#191A23] border border-gray-200 shadow-sm'
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Activities Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    {filteredActivities.map((act, index) => (
                        <motion.div
                            key={act.id}
                            className="group bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-gray-100"
                            onClick={() => handleClick(act.id)}
                            variants={fadeRight(index * 0.1)}
                            initial="hidden"
                            animate="visible"
                            whileHover={{ y: -5 }}
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={act.image}
                                    alt={act.title}
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute top-3 right-3">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                        act.status === 'Completed' 
                                            ? 'bg-[#B9FF66] text-[#191A23]' 
                                            : 'bg-yellow-500 text-white'
                                    }`}>
                                        {act.status}
                                    </span>
                                </div>
                                <div className="absolute bottom-3 left-3">
                                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-[#B9FF66] text-[#191A23]">
                                        {act.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#B9FF66] transition-colors">
                                    {act.title}
                                </h2>
                                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                    {act.description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-500 text-xs font-medium">
                                        {act.date}
                                    </span>
                                    <div className="flex items-center text-[#B9FF66] text-sm font-medium group-hover:translate-x-1 transition-transform">
                                        View Details
                                        <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Empty State */}
                {filteredActivities.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12"
                    >
                        <div className="text-gray-400 text-6xl mb-4">🔍</div>
                        <h3 className="text-xl font-semibold text-gray-600 mb-2">No activities found</h3>
                        <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                    </motion.div>
                )}
            </div>
        </motion.div>
    )
}

export default Activity
