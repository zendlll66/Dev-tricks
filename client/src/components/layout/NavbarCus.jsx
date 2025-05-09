import React from 'react'
import { useState } from 'react'

const NavbarCus = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='flex flex-row items-center border-b-[1px] border-black/10 backdrop-blur-sm justify-between md:px-[80px] md:py-[20px] px-[50px] py-[10px]  '>
            {/* logo */}
            <a href="/">
                <h1 className='select-none text-2xl'>
                    .DEV_
                </h1>
            </a>

            {/* nav Desktop*/}
            <ul className='hidden md:flex  flex-row gap-5'>
                {/* ABOUT + Dropdown */}
                <li className="relative group">
                    <a
                        href="#"
                        className="relative after:bg-[#B9FF66] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100"
                    >
                        ABOUT
                    </a>

                    {/* Dropdown */}
                    <ul className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-50">
                        <li>
                            <a
                                href="/about"
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
                    <a href="https://zend-portfolio.vercel.app/" className="relative after:bg-[#B9FF66] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">MY PORTFOLIO</a>
                </li>
                <li>
                    <a href="/contact" className="relative after:content-[''] after:bg-[#B9FF66] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">CONTACT</a>
                </li>
                <li>
                    <a href="/Resume" className="relative after:bg-[#B9FF66] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px]  after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">RESUME</a>
                </li>
            </ul>

            {/* Mobile Toggle Button */}
            <div className='md:hidden'>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex flex-col justify-between w-6 h-5 focus:outline-none"
                >
                    <span className="block w-6 h-0.5 bg-black"></span>
                    <span className="block w-6 h-0.5 bg-black"></span>
                    <span className="block w-6 h-0.5 bg-black"></span>
                </button>
            </div>


            {/* Mobile Menu */}
            {isOpen && (
                <div className='fixed top-0 left-0 w-full bg-white border-t h-screen border-gray-200 md:hidden flex flex-col items-center space-y-4 py-4 z-50 '>

                    {/* ปุ่มปิด */}
                    <div className='w-full flex justify-end px-4'>
                        <button onClick={() => setIsOpen(false)} className='text-2xl font-bold'>
                            ×
                        </button>
                    </div>

                    <a href="/about" className="text-[16px] leading-[24px] font-medium">About</a>
                    <a href="/services" className="text-[16px] leading-[24px] font-medium">My Portfolio</a>
                    <a href="/contact" className="text-[16px] leading-[24px] font-medium">Contact</a>
                </div>
            )}

        </div>
    )
}

export default NavbarCus