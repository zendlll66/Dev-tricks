import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SpinningTextAroundImage from '../components/common/SpinningTextAroundImage';
import Education from '../sections/Education';
import WorkEx from '../sections/WorkEx';
import Skills from '../sections/Skills';
import { Typewriter } from 'react-simple-typewriter';
import { FaArrowDown, FaGithub, FaLinkedin, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';

const fadeRight = (delay = 0) => ({
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.6, delay },
    viewport: { once: false, amount: 0.2 }
});

const AboutPage = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    const socialLinks = [
        { icon: FaFacebook, href: 'https://www.facebook.com/om.small.1/', color: 'hover:text-blue-500' },
        { icon: FaInstagram, href: 'https://www.instagram.com/om.zend/', color: 'hover:text-pink-500' },
        { icon: FaGithub, href: 'https://github.com/zendlll66', color: 'hover:text-gray-300' },
        { icon: FaLinkedin, href: 'https://www.linkedin.com/in/%E0%B8%81%E0%B8%B4%E0%B8%95%E0%B8%95%E0%B8%B4%E0%B8%98%E0%B8%B1%E0%B8%8A-%E0%B8%88%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C%E0%B8%82%E0%B8%AD%E0%B8%A1-291362359/', color: 'hover:text-blue-400' },
        { icon: FaEnvelope, href: 'mailto:kittithat.dev@gmail.com', color: 'hover:text-red-500' }
    ];

    return (
        <div className="select-none w-full max-w-[1000px] relative">
            {/* Progress bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-[#B9FF66] origin-left z-999"
                style={{ scaleX: scrollYProgress }}
            />

            {/* Header */}
            <motion.div 
                {...fadeRight(0)} 
                className="flex flex-col md:flex-row items-center justify-between md:space-x-5 relative"
                style={{ y }}
            >
                <div className="relative">
                    <motion.h1 
                        className="text-5xl font-bold relative"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        HI, I'M ZEND
                    </motion.h1>
                    <p className="text-gray-600 text-4xl">
                        <span className="mr-2">I'M A</span>
                        <span className="text-[#B9FF66]">
                            <Typewriter
                                words={['FRONT-END', 'BACK-END', 'UX/UI DESIGN', 'FULL-STACK']}
                                loop={0}
                                cursor
                                cursorStyle="_"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </span>
                        <span className="ml-2">
                            <br />WEB DEVELOPER
                        </span>
                    </p>
                    
                    {/* Social links */}
                    <motion.div 
                        className="flex space-x-4 mt-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-2xl transition-colors duration-300 ${social.color}`}
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <social.icon />
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
                
                <motion.div
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <SpinningTextAroundImage />
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="flex justify-center mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-gray-400"
                >
                    <FaArrowDown />
                </motion.div>
            </motion.div>

            {/* About */}
            <motion.div 
                {...fadeRight(0.2)} 
                className="flex flex-col md:flex-row items-start md:space-x-5 mt-20 relative"
            >
                <div className="relative group">
                    <motion.div
                        className="absolute -inset-1  rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"
                    />
                    <div className="relative bg-white rounded-lg p-6">
                        <motion.h1 
                            className="text-3xl font-bold mb-4"
                            whileHover={{ scale: 1.02 }}
                        >
                            ABOUT ME
                        </motion.h1>
                        <p className="text-sm md:text-base leading-relaxed">
                            I am a website developer with hands-on experience in frontend design and UX/UI development, specializing in React and Next.js. Additionally, I am currently evolving as a Full-stack Developer with expertise in Node.js, Next.js routing, backend development, and ShadCN. I'm also passionate about web application testing with Cypress, which enhances the efficiency, accuracy, and reliability of systems.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Work Experience */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: false, amount: 0.2 }}
                className="mt-20"
            >
                <WorkEx />
            </motion.div>

            {/* Education */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: false, amount: 0.2 }}
                className="mt-10"
            >
                <Education />
            </motion.div>

            {/* Skills */}
            <motion.div
                className="mt-10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <Skills />
            </motion.div>

            {/* Back to top button */}
            <motion.button
                className="fixed bottom-8 right-8 w-12 h-12 bg-[#B9FF66] rounded-full shadow-lg flex items-center justify-center z-30"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
            >
                <FaArrowDown className="rotate-180 text-black" />
            </motion.button>
        </div>
    );
};

export default AboutPage;
