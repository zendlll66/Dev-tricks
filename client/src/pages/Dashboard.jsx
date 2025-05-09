import React, { useRef, useState } from 'react'
import { useNavigate, Outlet, useLocation } from 'react-router-dom'
import VerticalStepProgress from '../components/common/VerticalStepProgress'
import { Menu } from 'lucide-react'

const Dashboard = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [menuOpen, setMenuOpen] = useState(false)
    const menuRef = useRef(null)

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }

    return (
        <div className="relative text-center flex flex-col justify-center items-center min-h-screen overflow-x-hidden">

            {/* ปุ่มเปิดเมนู */}
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="fixed top-40 left-0 z-50 bg-black text-white p-2 rounded-r-lg"
            >
                <Menu className="w-5 h-5" />
            </button>

            {/* Step Progress Menu (Slide in/out) */}
            <div
                ref={menuRef}
                className={`fixed top-40 left-0 z-40 transition-transform duration-500 ease-in-out 
                    ${menuOpen ? 'translate-x-0' : '-translate-x-full'}
                    bg-[#B9FF66]/40 rounded-r-2xl p-4 backdrop-blur-md`}
            >
                <VerticalStepProgress key={location.pathname} />
            </div>

            {/* Logout Button */}
            <button onClick={handleLogout} className="bg-red-400 p-1 text-white rounded-md mt-5">
                Logout
            </button>

            {/* Main Content */}
            <div className="mt-10 px-4 w-full max-w-4xl">
                {location.pathname === '/dashboard' && <h1 className="text-xl font-bold">📊 Welcome to the Dashboard</h1>}
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard
