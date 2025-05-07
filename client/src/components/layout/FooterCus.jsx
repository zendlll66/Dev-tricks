import React from 'react'

const FooterCus = () => {
    return (
        <div className='bg-[#191A23] text-white  px-10 pt-10 pb-5 md:px-20 md:pt-20 md:pb-10 space-y-10 rounded-t-2xl'>
            {/* Navbar Footer */}
            <nav data-aos="fade-up" className='flex flex-col md:flex-row md:justify-between justify-center items-center gap-5'>
                {/* logo */}
                <h1 className='select-none text-2xl'>
                    .DEV_
                </h1>
                <ul className='flex items-center text-center flex-col md:flex-row justify-center gap-3 md:gap-10'>
                    <li><a href="">About</a></li>
                    <li><a href="">My Portfolio</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>

            {/* Main content */}
            <div data-aos="fade-up" className='flex flex-col md:flex-row md:justify-between '>
                {/* Left content */}
                <div className='space-y-3 flex flex-col text-center md:text-left md:justify-start justify-center md:items-start items-center'>

                    <p>Email: kittithat.dev@gmail.com</p>
                    <p>Phone: +66 95-643-3948</p>
                </div>

                {/* Right content */}
                <div data-aos="fade-up" className='bg-[#292A32] md:px-5 p-5 mt-5 md:mt-0  rounded-2xl flex justify-center  gap-3 items-center'>
                    <div className='flex flex-col md:flex-row items-center gap-3'>
                        <input
                            type="text"
                            placeholder='Name'
                            className='flex-1 border-2 w-full  border-white/80 rounded-xl text-sm p-3 bg-transparent placeholder-white'
                        />

                    </div>
                </div>
            </div>

            {/* Bottom line */}
            <div data-aos="fade-up" className="h-0.5 w-full bg-gray-600"></div>
            <p className='text-sm text-gray-400'>© 2025 Your Company. All rights reserved.</p>
        </div>
    )
}

export default FooterCus