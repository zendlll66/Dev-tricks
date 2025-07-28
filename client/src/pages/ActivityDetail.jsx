import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'

const activities = [
    {
        id: '1',
        header: '20 นวัตกรรมสร้างเสริมสุขภาพ 20 ปี สสส.',
        title: 'THINNO สสส.',
        description: 'โครงการประกวดนวัตกรรมสร้างเสริมสุขภาพ ได้รางวัลอันดับที่ 2 ระดับประเทศ',
        date: '03/64',
        teaminfo: 'ทีม IF อุปกรณ์เตือนภัยขาตั้งสำหรับรถจักรยานยนต์ 1 ได้ถึง 3 (ขาตั้งสติแตก)',
        image: '/assets/images/ac1.jpg',
        image1: '/assets/images/ac1.1.jpg',
        image2: '/assets/images/ac1.2.jpg',
        image3: '/assets/images/ebook.jpg',
        ebook_link: 'https://www.thaihealth.or.th/?p=194731',
    },
    {
        id: '2',
        title: 'ประกวดนวัตกรรม STEM',
        header: 'โครงการประกวดนวัตกรรม STEM สสวท.',
        description: 'การแข่งขัน STEM ระดับประเทศ',
        date: '09/62',
        image: '/assets/images/ac2.jpg',
        image1: '/assets/images/ac2.1.jpg',
        image2: '/assets/images/ac2.2.jpg',
        image3: '/assets/images/ac2.3.jpg',
    },
]

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6 },
    }),
}

const slideInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
}

const slideInFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
}

const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
}

const ActivityDetail = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [activity, setActivity] = useState(null)
    const [modalImage, setModalImage] = useState(null)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [showBackToTop, setShowBackToTop] = useState(false)
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll()
    const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
    const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -50])

    // Get all images for carousel
    const getAllImages = () => {
        if (!activity) return []
        const images = [activity.image]
        if (activity.image1) images.push(activity.image1)
        if (activity.image2) images.push(activity.image2)
        if (activity.image3) images.push(activity.image3)
        return images
    }

    useEffect(() => {
        setLoading(true)
        const foundActivity = activities.find((a) => a.id === id)
        setTimeout(() => {
            setActivity(foundActivity)
            setLoading(false)
        }, 800)
    }, [id])

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 300)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const openModal = (imgSrc) => {
        const images = getAllImages()
        const index = images.indexOf(imgSrc)
        setCurrentImageIndex(index >= 0 ? index : 0)
        setModalImage(imgSrc)
    }

    const closeModal = () => setModalImage(null)

    const nextImage = () => {
        const images = getAllImages()
        setCurrentImageIndex((prev) => (prev + 1) % images.length)
        setModalImage(images[(currentImageIndex + 1) % images.length])
    }

    const prevImage = () => {
        const images = getAllImages()
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
        setModalImage(images[(currentImageIndex - 1 + images.length) % images.length])
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    if (loading) {
        return (
            <div className="max-w-4xl mx-auto p-6">
                <div className="animate-pulse">
                    <div className="h-12 bg-gray-300 rounded mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/4 mb-6"></div>
                    <div className="h-96 bg-gray-300 rounded mb-6"></div>
                    <div className="h-8 bg-gray-300 rounded mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                </div>
            </div>
        )
    }

    if (!activity) return <div className="p-6 text-center text-red-500">ไม่พบกิจกรรม</div>

    const images = getAllImages()

    return (
        <div className="relative" ref={containerRef}>
            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B9FF66] to-[#9AE34A] z-50"
                style={{ width: progressWidth }}
            />

            <div className="max-w-4xl mx-auto px-4">
                <motion.h1
                    className="text-3xl md:text-5xl font-bold bg-gradient-to-br from-[#191A23] via-[#1a1b25] to-[#1c1d27] bg-clip-text text-transparent"
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    custom={0}
                >
                    {activity.header}
                </motion.h1>
                
                <motion.div
                    className="flex items-center gap-2 text-sm text-gray-400 mt-1 mb-6"
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    custom={1}
                >
                    <motion.div
                        className="w-2 h-2 bg-[#B9FF66] rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span>วันที่: {activity.date}</span>
                </motion.div>

                {/* Main Image with Parallax */}
                <motion.div
                    className="relative overflow-hidden rounded-lg shadow-2xl mb-8"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.img
                        src={activity.image}
                        alt={activity.title}
                        onClick={() => openModal(activity.image)}
                        className="w-full h-64 md:h-96 object-cover cursor-pointer"
                        whileHover={{ 
                            scale: 1.05,
                            transition: { duration: 0.3 }
                        }}
                        style={{
                            y: parallaxY
                        }}
                    />
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    />
                    <motion.div
                        className="absolute bottom-4 left-4 text-white"
                        variants={slideInFromLeft}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="text-sm opacity-90">คลิกเพื่อดูภาพเต็ม</div>
                    </motion.div>
                </motion.div>

                <motion.h2
                    className="text-2xl font-bold mt-6 mb-4"
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    custom={2}
                >
                    {activity.title}
                </motion.h2>

                {activity.teaminfo && (
                    <motion.div
                        className="bg-gradient-to-r from-[#B9FF66]/10 to-[#9AE34A]/10 p-4 rounded-lg border-l-4 border-[#B9FF66] mb-4"
                        variants={slideInFromLeft}
                        initial="hidden"
                        animate="visible"
                    >
                        <p className="text-gray-700 font-medium">{activity.teaminfo}</p>
                    </motion.div>
                )}
                
                <motion.p
                    className="text-gray-600 mt-2 leading-relaxed"
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    custom={4}
                >
                    {activity.description}
                </motion.p>

                {/* Enhanced Image Gallery */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10"
                    variants={scaleIn}
                    initial="hidden"
                    animate="visible"
                >
                    {activity.image1 && (
                        <motion.div
                            className="group relative overflow-hidden rounded-lg shadow-lg"
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.img
                                src={activity.image1}
                                alt=""
                                onClick={() => openModal(activity.image1)}
                                className="w-full h-48 object-cover cursor-pointer transition-transform duration-300 group-hover:scale-110"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            />
                            <motion.div
                                className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                            />
                        </motion.div>
                    )}
                    {activity.image2 && (
                        <motion.div
                            className="group relative overflow-hidden rounded-lg shadow-lg"
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.img
                                src={activity.image2}
                                alt=""
                                onClick={() => openModal(activity.image2)}
                                className="w-full h-48 object-cover cursor-pointer transition-transform duration-300 group-hover:scale-110"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            />
                            <motion.div
                                className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                            />
                        </motion.div>
                    )}
                </motion.div>

                {activity.image3 && (
                    <motion.div
                        className="mt-10 group relative overflow-hidden rounded-lg shadow-lg"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.img
                            src={activity.image3}
                            alt=""
                            onClick={() => openModal(activity.image3)}
                            className="w-full cursor-pointer transition-transform duration-300 group-hover:scale-105"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        />
                        <motion.div
                            className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                        />
                    </motion.div>
                )}

                {activity.ebook_link && (
                    <motion.div
                        className="mt-8 p-6 bg-gradient-to-r from-[#B9FF66]/10 to-[#9AE34A]/10 rounded-lg border border-[#B9FF66]/30"
                        variants={slideInFromRight}
                        initial="hidden"
                        animate="visible"
                    >
                        <h3 className="text-lg font-semibold mb-2 text-gray-800">ลิงก์เพิ่มเติม</h3>
                        <motion.a
                            href={activity.ebook_link}
                            className="text-[#9AE34A] hover:text-[#B9FF66] transition-colors duration-200 flex items-center gap-2"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ x: 5 }}
                        >
                            <span>เปิดลิงก์</span>
                            <motion.svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                whileHover={{ rotate: 45 }}
                                transition={{ duration: 0.2 }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </motion.svg>
                        </motion.a>
                    </motion.div>
                )}
            </div>

            {/* Back to Top Button */}
            <AnimatePresence>
                {showBackToTop && (
                    <motion.button
                        onClick={scrollToTop}
                        className="fixed bottom-8 right-8 bg-gradient-to-r from-[#B9FF66] to-[#9AE34A] text-[#191A23] p-3 rounded-full shadow-lg z-40"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Enhanced Modal */}
            <AnimatePresence>
                {modalImage && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                    >
                        <motion.div
                            className="relative max-w-4xl max-h-full"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <motion.img
                                src={modalImage}
                                alt="Expanded"
                                className="max-w-full max-h-full rounded-lg shadow-2xl"
                                layoutId={`image-${currentImageIndex}`}
                            />
                            
                            {/* Navigation Controls */}
                            {images.length > 1 && (
                                <>
                                    <motion.button
                                        onClick={prevImage}
                                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </motion.button>
                                    
                                    <motion.button
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </motion.button>
                                    
                                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                                        {currentImageIndex + 1} / {images.length}
                                    </div>
                                </>
                            )}
                            
                            {/* Close Button */}
                            <motion.button
                                onClick={closeModal}
                                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm"
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default ActivityDetail
