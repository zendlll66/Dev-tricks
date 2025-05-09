import React from 'react'
import { useNavigate } from 'react-router-dom'

// ข้อมูลจำลอง
const activities = [
    {
        id: '1',
        title: 'THINNO สสส.',
        description: 'โครงการประกวดนวัตกรรมสร้างเสริมสุขภาพ',
        date: '03/64',
        image: '/assets/images/ac1.jpg',
    },
    {
        id: '2',
        title: 'STEM',
        description: 'การแข่งขันSTEMระดับประเทศ',
        date: '09/62',
        image: '/assets/images/ac2.jpg',
    },
]

const Activity = () => {
    const navigate = useNavigate()

    // const handleClick = (id) => {
    //     navigate(`/activity/${id}`)
    // }

    return (
        <div className="p-6 ">
            {/* Grid Background */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <h1 className="text-4xl font-bold mb-6">My Activities</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {activities.map((act) => (
                    <div
                        key={act.id}
                        className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:scale-105 hover:shadow-lg transition"
                        onClick={() => handleClick(act.id)}
                    >
                        <img
                            src={act.image}
                            alt={act.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">{act.title}</h2>
                            <p className="text-gray-600 text-sm mt-1">{act.description}</p>
                            <p className="text-gray-400 text-xs mt-2">{act.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Activity
