import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

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

const ActivityDetail = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [activity, setActivity] = useState(null)
    const [modalImage, setModalImage] = useState(null)

    useEffect(() => {
        setLoading(true)
        const foundActivity = activities.find((a) => a.id === id)
        setTimeout(() => {
            setActivity(foundActivity)
            setLoading(false)
        }, 500)
    }, [id])

    if (loading) return <div className="p-6 text-center text-gray-500">กำลังโหลด...</div>
    if (!activity) return <div className="p-6 text-center text-red-500">ไม่พบกิจกรรม</div>

    const openModal = (imgSrc) => setModalImage(imgSrc)
    const closeModal = () => setModalImage(null)

    return (
        <div className="max-w-4xl mx-auto">
            <motion.h1
                className="text-3xl md:text-5xl font-bold"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                custom={0}
            >
                {activity.header}
            </motion.h1>
            <motion.p
                className="text-sm text-gray-400 mt-1 mb-6"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                custom={1}
            >
                วันที่: {activity.date}
            </motion.p>

            <motion.img
                src={activity.image}
                alt={activity.title}
                onClick={() => openModal(activity.image)}
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow cursor-pointer"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
            />

            <motion.h2
                className="text-2xl font-bold mt-6"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                custom={2}
            >
                {activity.title}
            </motion.h2>

            {activity.teaminfo && (
                <motion.p
                    className="text-gray-600 mt-2"
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    custom={3}
                >
                    {activity.teaminfo}
                </motion.p>
            )}
            <motion.p
                className="text-gray-600 mt-2"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                custom={4}
            >
                {activity.description}
            </motion.p>

            <div className="grid grid-cols-2 gap-4 mt-10">
                {activity.image1 && (
                    <motion.img
                        src={activity.image1}
                        alt=""
                        onClick={() => openModal(activity.image1)}
                        className="w-full h-48 object-cover rounded-lg shadow cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    />
                )}
                {activity.image2 && (
                    <motion.img
                        src={activity.image2}
                        alt=""
                        onClick={() => openModal(activity.image2)}
                        className="w-full h-48 object-cover rounded-lg shadow cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    />
                )}
            </div>

            {activity.image3 && (
                <motion.img
                    src={activity.image3}
                    alt=""
                    onClick={() => openModal(activity.image3)}
                    className="w-full mt-10 rounded-lg shadow cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                />
            )}

            {activity.ebook_link && (
                <motion.a
                    href={activity.ebook_link}
                    className="text-blue-600 hover:underline block mt-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    custom={5}
                >
                    {activity.ebook_link}
                </motion.a>
            )}

            <AnimatePresence>
                {modalImage && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                    >
                        <motion.img
                            src={modalImage}
                            alt="Expanded"
                            className="max-w-full max-h-full rounded-lg shadow-lg"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default ActivityDetail
