import React from 'react'
import { useNavigate } from 'react-router-dom';
import PostPage from './dashboard/Postpage';

const Dashboard = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }
    return (
        <div className='text-center flex flex-col justify-center items-center'>
            <div className='absolute top-50% left-20'>
                <h1>Dashboard</h1>
            </div>
            {/* <button onClick={handleLogout} className='bg-red-400 p-1 text-white rounded-md'>
                Logout
            </button> */}
            <PostPage />

        </div>
    )
}

export default Dashboard