import React from 'react'

import HeroHeader from '../sections/HeroHeader'
import BlogSection from '../sections/BlogSection'

const HomePage = () => {
    return (

        <div>
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <div className='w-full mb-20 '>
                <HeroHeader />
            </div>
            <div className='w-full mb-20 '>
                <BlogSection/>
            </div>
        </div>

    )
}

export default HomePage