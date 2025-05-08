import React from 'react'
import { motion } from 'framer-motion'

const HeroHeader = () => {
    return (
        <div className=' flex md:flex-row flex-col md:space-x-10 '>
            {/* bg section */}
            <div className='md:hidden md:w-1/2 w-full p-10  flex justify-center items-center '>
                <img src="/assets/images/undraw_mobile.svg" alt="" />
            </div>

            {/* Left content */}
            <div className='md:w-1/2 w-full flex justify-center  items-center md:items-start text-center md:text-start space-y-5  flex-col'>
                <div className='text-5xl font-medium  '>
                    <span className='text-[100px] font-bold '>.DEV_</span>
                    <br />
                    <span>Developer Tricks & Hidden Gems</span>
                </div>
                <p className='text-lg text-black/70 '>A collection of practical coding tips, tools, and techniques for developers who want to build better, faster, and cleaner. From frontend tweaks to backend patterns — learn the little things that make a big difference.</p>
                <p className=''>
                    Write smarter, not harder – one trick at a time.
                </p>
                <button className='px-5 w-fit py-2 bg-[#B9FF66] rounded-lg hover:bg-[#B9FF66] hover:cursor-pointer hover:scale-102 transition-all duration-500'>
                    Button
                </button>
            </div>

            {/* Right content */}
            <motion.div
                initial={{ opacity: 1, y: -50 }}
                animate={{ opacity: 1, y: [0, -20, 0] }} // ขยับขึ้น-ลง
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut"
                }}
                className='hidden md:w-1/2 w-full p-10  md:flex justify-center items-center '>
                <img src="/assets/images/undraw_ship-it.svg" alt="" className='max-w-[400px]' />
            </motion.div>
        </div>
    )
}

export default HeroHeader