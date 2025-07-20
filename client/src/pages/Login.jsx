import React from 'react'
import { useState } from 'react'
import { login } from '../../service/auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState({ email: '', password: '' })
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        try {
            setLoading(true)
            const { email, password } = form;
            let res;

            res = await login(email, password);
            if (res?.token) {
                localStorage.setItem('token', res.token);
                alert('Login successful');
                navigate('/dashboard');
            } else {
                alert('Login failed: token not found');
            }

        } catch (error) {
            alert(error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='flex justify-center bg-white rounded-2xl overflow-hidden border-b-4 border-1  md:border-l-4 md:border-t-[1px] md:border-b-[1px] items-center md:m-20  max-w-4xl'>
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

            {/* left-content */}
            <div className='w-1/2 py-20 flex flex-col text-start items-start justify-start  md:px-10 space-y-5'>
                <div>
                    <h1 className='text-3xl font-bold'>
                        Welcome Back!
                    </h1>
                    <p className='text-[12px]'>Enter your account</p>
                </div>
                <div className='space-y-3'>
                    <input
                        type="email"
                        name='email' // เปลี่ยนจาก name เป็น email
                        value={form.email}
                        placeholder='Email'
                        onChange={handleChange}
                        className='border-1 w-full rounded-md p-1 outline-none focus:border-[#B9FF66]'
                    />
                    <input
                        type="password"
                        name='password'
                        value={form.password}
                        placeholder='Password'
                        onChange={handleChange}
                        className='border-1 w-full  rounded-md p-1 outline-none focus:border-[#B9FF66]'
                    />
                </div>
                <button
                    onClick={handleSubmit}
                    className='bg-[#B9FF66] w-full rounded-md p-1 hover:scale-105 transition-all duration-500'>{loading ? 'Please wait...' : 'Login'}
                </button>
            </div>

            {/* right-content */}
            <div className='hidden md:flex w-1/2  justify-center shadow-2xl'>
                <img src="/assets/images/bg-login.png" alt="" />
            </div>
        </div>
    )
}

export default Login