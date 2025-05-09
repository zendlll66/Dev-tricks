import React from 'react'
import SpinningTextAroundImage from '../components/common/SpinningTextAroundImage';
import Education from '../sections/Education';
import WorkEx from '../sections/WorkEx';
import Skills from '../sections/Skills';
import ProjectSection from '../sections/ProjectSection';
import { Typewriter } from 'react-simple-typewriter';

const AboutPage = () => {

    return (
        <div className='select-none max-w-[800px] min-w-[200px]'>
            {/* Grid Background */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

            {/* Header */}
            <div className='flex flex-row items-center justify-between space-x-5'>
                <div>
                    <h1 className='text-5xl font-bold'>HI, I'M ZEND</h1>
                    <p className='text-gray-600 text-4xl'>
                        <span className='mr-2'>I'M A</span>
                        <span className='text-[#B9FF66]'>
                            <Typewriter
                                words={['FRONT-END', 'BACK-END', 'UX/UI DESIGN', 'FULL-STACK']}
                                loop={0} // 0 = loop forever
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </span>
                        <span className='ml-2'><br />WEB DEVELOPER</span>
                    </p>
                </div>
                <SpinningTextAroundImage />
            </div>

            {/* About */}
            <div className='flex flex-row items-center space-x-5 mt-10'>
                <div>
                    <h1 className='text-3xl font-bold'>ABOUT ME</h1>
                    <p>I am a website developer with hands-on experience in frontend design and UX/UI development, specializing in React and Next.js. Additionally, I am currently evolving as a Full-stack Developer with expertise in Node.js, Next.js routing, backend development, and ShadCN. I'm also passionate about web application testing with Cypress, which enhances the efficiency, accuracy, and reliability of systems.</p>
                </div>
            </div>

            {/* Work Experience */}
            <div className='flex flex-row mt-20 items-center max-w-[1000px]  space-x-5'>
                <WorkEx />
            </div>


            {/* Education */}
            <div className='flex flex-row mt-10 items-center max-w-[1000px]   space-x-5'>
                <Education />
            </div>


            {/* skills */}
            <div className='mt-10'>
                <Skills />
            </div>


            {/* <div className='mt-20'>
                <h1 className='text-3xl font-bold'>PROJECTS</h1>
                <ProjectSection />
            </div>

            <div className='mt-20'>
                <h1 className='text-3xl font-bold'>ACTIVITY</h1>
                <ProjectSection />
            </div> */}



        </div>
    );
};

export default AboutPage;
