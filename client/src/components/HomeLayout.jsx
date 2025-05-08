import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import NavbarCus from './layout/NavbarCus'
import FooterCus from './layout/FooterCus'
const HomeLayout = () => {
    return (
        <div className="min-h-screen flex flex-col ">
            <nav className='fixed z-[100] w-full'>
                <NavbarCus />
            </nav>

            <main className="flex-1 flex justify-center mt-20 mb-50 md:mt-40 md:mb-10 md:px-20 px-10">
                <Outlet />
            </main>

            <footer className=''>
                <FooterCus />
            </footer>
        </div>
    )
}

export default HomeLayout