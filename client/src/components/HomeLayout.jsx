import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import NavbarCus from './layout/NavbarCus'
import FooterCus from './layout/FooterCus'
const HomeLayout = () => {
    return (
        <div className="min-h-screen flex flex-col overflow-auto">
            <nav className='fixed z-[100] w-full'>
                <NavbarCus />
            </nav>

            <main className="flex-1  flex justify-center mt-20 mb-50 md:mt-40 md:mb-10 md:px-20 px-10">
                <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <Outlet />
            </main>

            <footer className=''>
                <FooterCus />
            </footer>
        </div>
    )
}

export default HomeLayout