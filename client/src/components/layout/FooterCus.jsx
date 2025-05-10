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
                {/* nav Desktop*/}
                <ul className='justify-center items-center my-10 flex  flex-col md:flex-row gap-5'>
                    {/* ABOUT + Dropdown */}
                    <li className="relative group">
                        <a
                            href="#"
                            className="relative after:bg-[#B9FF66] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100"
                        >
                            ABOUT
                        </a>

                        {/* Dropdown */}
                        <ul className="absolute bottom-full left-full mt-2 w-40 bg-white text-black shadow-lg rounded-md opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-50">
                            <li>
                                <a
                                    href="/"
                                    className="block px-4 py-2 hover:bg-[#B9FF66] transition"
                                >
                                    ME
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/about/project"
                                    className="block px-4 py-2 hover:bg-[#B9FF66] transition"
                                >
                                    PROJECT
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/about/activity"
                                    className="block px-4 py-2 hover:bg-[#B9FF66] transition"
                                >
                                    ACTIVITY
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="/blogs" className="relative after:bg-[#B9FF66] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px]  after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">BLOGS</a>
                    </li>
                    <li>
                        <a href="https://zend-portfolio.vercel.app/" className="relative after:bg-[#B9FF66] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">PORTFOLIO V.1</a>
                    </li>
                    <li>
                        <a href="/contact" className="relative after:content-[''] after:bg-[#B9FF66] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">CONTACT</a>
                    </li>
                    <li>
                        <a href="/Resume.pdf" className="relative after:bg-[#B9FF66] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px]  after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">RESUME</a>
                    </li>

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