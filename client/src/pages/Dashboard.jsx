import React from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }
    return (
        <div className='text-center flex flex-col justify-center items-center'>
            <h1>
                Dashboard
            </h1>
            <button onClick={handleLogout} className='bg-red-400 p-1 text-white rounded-md'>
                Logout
            </button>
        </div>
    )
}

export default Dashboard