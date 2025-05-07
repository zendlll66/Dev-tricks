import React from 'react'
import HeadingCus from '../components/common/HeadingCus'
import HeroHeader from '../sections/HeroHeader'

const HomePage = () => {
    return (

        <div>
            <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <div className='w-full mb-20 '>
                <HeroHeader />
            </div>
        </div>

    )
}

export default HomePage