import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const VerticalStepMenu = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const [openSection, setOpenSection] = useState(null)

    const menu = [
        {
            title: 'Blog',
            key: 'blog',
            children: [
                { label: 'Post', path: '/dashboard/blog/post' },
                { label: 'Edit/Delete', path: '/dashboard/blog/edit' },
            ]
        },
        {
            title: 'Project',
            key: 'project',
            children: [
                { label: 'Post', path: '/dashboard/project/post' },
                { label: 'Edit/Delete', path: '/dashboard/project/edit' },
            ]
        },
        {
            title: 'Project wk',
            key: 'project-wk',
            children: [
                { label: 'Post', path: '/dashboard/project-wk/post' },
                { label: 'Edit/Delete', path: '/dashboard/project-wk/edit' },
            ]
        },
        {
            title: 'Activity',
            key: 'activity',
            children: [
                { label: 'Post', path: '/dashboard/project/post' },
                { label: 'Edit/Delete', path: '/dashboard/project/edit' },
            ]
        }
    ]

    const toggleSection = (key) => {
        setOpenSection(prev => prev === key ? null : key)
    }

    const isActive = (path) => location.pathname === path

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }

    return (
        <div className="w-64 p-6 ">
            {menu.map(section => (
                <div key={section.key} className="mb-4">
                    <button
                        onClick={() => toggleSection(section.key)}
                        className="w-full hover:bg-black hover:scale-102 hover:text-white text-left font-bold text-lg text-gray-700 px-2 py-1 rounded-md transition"
                    >
                        {section.title}
                    </button>

                    {openSection === section.key && (
                        <div className="ml-4 mt-2 space-y-1">
                            {section.children.map(item => (
                                <button
                                    key={item.path}
                                    onClick={() => navigate(item.path)}
                                    className={`block w-full transition-all duration-300 text-left px-2 py-1 rounded-md 
                                        ${isActive(item.path)
                                            ? 'bg-[#B9FF66] font-semibold'
                                            : 'text-gray-600 hover:bg-black hover:text-white hover:scale-102'
                                        }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            ))}

            <button
                onClick={handleLogout}
                className="mt-6 bg-black/80 hover:bg-black hover:scale-102 transition-all duration-300 text-white px-4 py-2 rounded-md w-full"
            >
                Logout
            </button>
        </div>
    )
}

export default VerticalStepMenu
