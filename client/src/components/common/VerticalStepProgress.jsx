import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const VerticalStepProgress = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const steps = [
        { label: 'Dashboard', path: '/dashboard' },
        { label: 'Post', path: '/dashboard/post' },
        { label: 'Edit/Delete', path: '/dashboard/edit' },
    ]

    const currentStep = steps.findIndex(step => location.pathname === step.path) + 1

    return (
        <div className="flex flex-row items-start px-5 py-10 gap-10">
            <div className="relative flex flex-row min-h-[100px]">
                <div className="relative flex justify-center">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-400" />
                    <div
                        className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#B9FF66] transition-all duration-500"
                        style={{ height: `${(currentStep - 1) / (steps.length - 1) * 100}%` }}
                    />
                </div>

                <div className="flex flex-col space-y-5 pl-6">
                    {steps.map((step, index) => (
                        <button
                            key={index}
                            onClick={() => navigate(step.path)}
                            className="flex items-center space-x-4 group focus:outline-none"
                        >
                            <span
                                className={`w-4 h-4 rounded-full border-2 transition-all duration-300 
                                    ${currentStep >= index + 1 ? 'bg-[#B9FF66] border-black' : 'border-gray-400 bg-white'}`}
                            />
                            <span
                                className={`font-semibold transition-all duration-300 
                                    ${currentStep >= index + 1 ? 'text-black' : 'text-gray-400'}`}
                            >
                                {step.label}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default VerticalStepProgress
