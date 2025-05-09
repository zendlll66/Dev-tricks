import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
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
                    <li><a href="/about">About</a></li>
                    <li><a href="https://zend-portfolio.vercel.app/">My Portfolio</a></li>
                    <li><a href="/contact">Contact</a></li>
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
                    {/* ขวา: โซเชียล */}
                    <div className="flex flex-col items-center gap-3">
                        <span className="text-white font-semibold">Follow Me</span>
                        <div className="flex gap-4 text-lg">
                            <a href="https://www.facebook.com/om.small.1/" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="hover:text-blue-500 transition" />
                            </a>
                            <a href="https://www.instagram.com/om.zend/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="hover:text-blue-500 transition" />
                            </a>
                            <a href="https://github.com/zendlll66" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="hover:text-gray-400 transition" />
                            </a>
                            <a href="https://www.linkedin.com/in/%E0%B8%81%E0%B8%B4%E0%B8%95%E0%B8%95%E0%B8%B4%E0%B8%98%E0%B8%B1%E0%B8%8A-%E0%B8%88%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C%E0%B8%82%E0%B8%AD%E0%B8%A1-291362359/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="hover:text-blue-400 transition" />
                            </a>
                        </div>
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