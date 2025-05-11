import React, { useRef, useState } from 'react'
import { useNavigate, Outlet, useLocation } from 'react-router-dom'
import VerticalStepProgress from '../components/common/VerticalStepProgress'
import { Menu } from 'lucide-react'

const Dashboard = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [menuOpen, setMenuOpen] = useState(true)
    const menuRef = useRef(null)


    return (
        <div className="relative text-center flex flex-col  items-center min-h-screen overflow-x-hidden">

            {/* ปุ่มเปิดเมนู */}
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="fixed top-20 left-0 z-50 bg-black text-white p-2 rounded-r-lg"
            >
                <Menu className="w-5 h-5" />
            </button>

            {/* Step Progress Menu (Slide in/out) */}
            <div
                ref={menuRef}
                className={`fixed left-0 top-40 z-40 border-r-3 border-t-1 border-b-1 transition-transform duration-500 ease-in-out 
                    ${menuOpen ? 'translate-x-0' : '-translate-x-full'}
                    bg-[#B9FF66] rounded-r-2xl p-4 backdrop-blur-md`}
            >
                <VerticalStepProgress key={location.pathname} />
            </div>

            {/* Main Content */}
            <div className="mt-10 px-4 w-full max-w-4xl">
                {location.pathname === '/dashboard' && <h1 className="text-xl font-bold">📊 Welcome to the Dashboard</h1>}
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard
