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
            <div className='hidden md:flex'>
                <ul className='flex flex-row gap-5'>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="https://zend-portfolio.vercel.app/">My Portfolio</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </div>

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