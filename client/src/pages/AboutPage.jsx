import React from 'react';
import { motion } from 'framer-motion';
import SpinningTextAroundImage from '../components/common/SpinningTextAroundImage';
import Education from '../sections/Education';
import WorkEx from '../sections/WorkEx';
import Skills from '../sections/Skills';
import { Typewriter } from 'react-simple-typewriter';

const fadeRight = (delay = 0) => ({
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.6, delay },
    viewport: { once: false, amount: 0.2 }
});

const AboutPage = () => {
    return (
        <div className="select-none w-full max-w-[1000px] px-4 mx-auto ">
            {/* Header */}
            <motion.div {...fadeRight(0)} className="flex flex-col md:flex-row items-center justify-between md:space-x-5">
                <div>
                    <h1 className="text-5xl font-bold">HI, I'M ZEND</h1>
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
                </div>
                <SpinningTextAroundImage />
            </motion.div>

            {/* About */}
            <motion.div {...fadeRight(0.2)} className="flex flex-col md:flex-row items-start md:space-x-5 mt-10">
                <div>
                    <h1 className="text-3xl font-bold">ABOUT ME</h1>
                    <p className="text-sm md:text-base">
                        I am a website developer with hands-on experience in frontend design and UX/UI development, specializing in React and Next.js. Additionally, I am currently evolving as a Full-stack Developer with expertise in Node.js, Next.js routing, backend development, and ShadCN. I'm also passionate about web application testing with Cypress, which enhances the efficiency, accuracy, and reliability of systems.
                    </p>
                </div>
            </motion.div>

            {/* Work Experience */}
            <motion.div initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: false, amount: 0.2 }}
                className="mt-20">
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
                className="mt-10" >
                <Skills />
            </motion.div>
        </div>
    );
};

export default AboutPage;
