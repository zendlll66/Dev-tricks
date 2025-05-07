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

            <main className="flex-1 flex justify-center pt-20 px-20">
                <Outlet />
            </main>

            <footer className=''>
                <FooterCus />
            </footer>
        </div>
    )
}

export default HomeLayout