import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

import HeroHeader from '../sections/HeroHeader'
import BlogSection from '../sections/BlogSection'
import ActivityPage from '../sections/ActivityPage'

const HomePage = () => {
    const { scrollYProgress } = useScroll()
    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    return (
        <div className="relative overflow-hidden">
            {/* Animated Background */}
            <motion.div 
                className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
                style={{ y: backgroundY }}
            />
            
            {/* Floating Elements */}
            <motion.div
                className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-[#B9FF66]/20 to-[#9AE34A]/20 rounded-full blur-xl"
                animate={{
                    x: [0, 30, 0],
                    y: [0, -20, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-[#9AE34A]/20 to-[#B9FF66]/20 rounded-full blur-xl"
                animate={{
                    x: [0, -25, 0],
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />
            <motion.div
                className="absolute bottom-40 left-1/4 w-12 h-12 bg-gradient-to-br from-[#B9FF66]/15 to-[#9AE34A]/15 rounded-full blur-lg"
                animate={{
                    x: [0, 20, 0],
                    y: [0, -10, 0],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
            />



            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                {/* Hero Section */}
                <motion.div 
                    className='w-full mb-20 relative'
                    style={{ opacity }}
                >
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <HeroHeader />
                    </motion.div>
                </motion.div>

                {/* Blog Section */}
                <motion.div 
                    className='w-full mb-20'
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <BlogSection />
                </motion.div>

                {/* Activity Section (Commented out but enhanced) */}
                {/* <motion.div 
                    className='w-full mb-20'
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <ActivityPage/>
                </motion.div> */}
            </motion.div>

            {/* Scroll Progress Indicator */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B9FF66] to-[#9AE34A] z-40"
                style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
            />

            {/* Decorative Lines */}
            <motion.div
                className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-[#B9FF66] to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
            />
            <motion.div
                className="absolute bottom-1/4 right-0 w-32 h-px bg-gradient-to-l from-transparent via-[#9AE34A] to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, delay: 1.5 }}
            />

            {/* Corner Decorations */}
            <motion.div
                className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-[#B9FF66]"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            />
            <motion.div
                className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-[#9AE34A]"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
            />

            {/* Interactive Grid Pattern */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(185,255,102,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(185,255,102,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
            </div>
        </div>
    )
}

export default HomePage