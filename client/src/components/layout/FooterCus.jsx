import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from 'react-icons/fa';

const FooterCus = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className='bg-gradient-to-br from-[#191A23] via-[#1a1b25] to-[#1c1d27] text-white relative overflow-hidden rounded-t-4xl'>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-32 h-32 border border-[#B9FF66] rounded-full"></div>
                <div className="absolute bottom-20 right-20 w-20 h-20 border border-[#B9FF66] rounded-full"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-[#B9FF66] rounded-full"></div>
            </div>

            <div className='relative px-6 pt-16 pb-8 md:px-20 md:pt-20 md:pb-12 space-y-12'>
                {/* Top Section */}
                <div data-aos="fade-up" className='flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8'>
                    {/* Brand Section */}
                    <div className='space-y-6 max-w-md'>
                        <div className='flex items-center gap-3'>
                            <div className='w-10 h-10 bg-gradient-to-r from-[#B9FF66] to-[#9AE34A] rounded-lg flex items-center justify-center'>
                                <span className='text-[#191A23] font-bold text-lg'>D</span>
                            </div>
                            <h1 className='text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
                                .DEV_
                            </h1>
                        </div>
                        <p className='text-gray-400 leading-relaxed'>
                            Full-stack developer passionate about creating innovative digital experiences and turning ideas into reality.
                        </p>
                    </div>

                    {/* Navigation Section */}
                    <div className='space-y-6'>
                        <h3 className='text-lg font-semibold text-[#B9FF66]'>Quick Links</h3>
                        <nav className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                            <div className='space-y-3'>
                                <h4 className='text-sm font-medium text-gray-300 uppercase tracking-wider'>About</h4>
                                <ul className='space-y-2'>
                                    <li><a href="/" className='text-gray-400 hover:text-[#B9FF66] transition-colors duration-300 text-sm'>Me</a></li>
                                    <li><a href="/about/project" className='text-gray-400 hover:text-[#B9FF66] transition-colors duration-300 text-sm'>Projects</a></li>
                                    <li><a href="/about/activity" className='text-gray-400 hover:text-[#B9FF66] transition-colors duration-300 text-sm'>Activities</a></li>
                                </ul>
                            </div>
                            <div className='space-y-3'>
                                <h4 className='text-sm font-medium text-gray-300 uppercase tracking-wider'>Content</h4>
                                <ul className='space-y-2'>
                                    <li><a href="/blogs" className='text-gray-400 hover:text-[#B9FF66] transition-colors duration-300 text-sm'>Blogs</a></li>
                                    <li><a href="https://zend-portfolio.vercel.app/" className='text-gray-400 hover:text-[#B9FF66] transition-colors duration-300 text-sm'>Portfolio V.1</a></li>
                                    <li><a href="/Resume.pdf" className='text-gray-400 hover:text-[#B9FF66] transition-colors duration-300 text-sm'>Resume</a></li>
                                </ul>
                            </div>
                            <div className='space-y-3'>
                                <h4 className='text-sm font-medium text-gray-300 uppercase tracking-wider'>Connect</h4>
                                <ul className='space-y-2'>
                                    <li><a href="/contact" className='text-gray-400 hover:text-[#B9FF66] transition-colors duration-300 text-sm'>Contact</a></li>
                                    <li><a href="mailto:kittithat.dev@gmail.com" className='text-gray-400 hover:text-[#B9FF66] transition-colors duration-300 text-sm'>Email</a></li>
                                    <li><a href="tel:+66956433948" className='text-gray-400 hover:text-[#B9FF66] transition-colors duration-300 text-sm'>Phone</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>

                {/* Middle Section - Contact & Social */}
                <div data-aos="fade-up" className='grid md:grid-cols-2 gap-8 pt-8 border-t border-gray-800'>
                    {/* Contact Info */}
                    <div className='space-y-4'>
                        <h3 className='text-lg font-semibold text-[#B9FF66]'>Get In Touch</h3>
                        <div className='space-y-3'>
                            <div className='flex items-center gap-3 group'>
                                <div className='w-8 h-8 bg-[#292A32] rounded-lg flex items-center justify-center group-hover:bg-[#B9FF66] group-hover:text-[#191A23] transition-all duration-300'>
                                    <FaEnvelope className='text-sm' />
                                </div>
                                <a href="mailto:kittithat.dev@gmail.com" className='text-gray-400 hover:text-[#B9FF66] transition-colors duration-300'>
                                    kittithat.dev@gmail.com
                                </a>
                            </div>
                            <div className='flex items-center gap-3 group'>
                                <div className='w-8 h-8 bg-[#292A32] rounded-lg flex items-center justify-center group-hover:bg-[#B9FF66] group-hover:text-[#191A23] transition-all duration-300'>
                                    <FaPhoneAlt className='text-sm' />
                                </div>
                                <a href="tel:+66956433948" className='text-gray-400 hover:text-[#B9FF66] transition-colors duration-300'>
                                    +66 95-643-3948
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className='space-y-4'>
                        <h3 className='text-lg font-semibold text-[#B9FF66]'>Follow Me</h3>
                        <div className='flex gap-4'>
                            {[
                                { icon: FaFacebook, href: "https://www.facebook.com/om.small.1/", color: "hover:text-blue-500" },
                                { icon: FaInstagram, href: "https://www.instagram.com/om.zend/", color: "hover:text-pink-500" },
                                { icon: FaGithub, href: "https://github.com/zendlll66", color: "hover:text-gray-300" },
                                { icon: FaLinkedin, href: "https://www.linkedin.com/in/%E0%B8%81%E0%B8%B4%E0%B8%95%E0%B8%95%E0%B8%B4%E0%B8%98%E0%B8%B1%E0%B8%8A-%E0%B8%88%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C%E0%B8%82%E0%B8%AD%E0%B8%A1-291362359/", color: "hover:text-blue-400" }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-12 h-12 bg-[#292A32] rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-[#B9FF66] hover:text-[#191A23] ${social.color}`}
                                >
                                    <social.icon className="text-lg" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div data-aos="fade-up" className='pt-8 border-t border-gray-800'>
                    <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-4'>
                        <p className='text-sm text-gray-500 text-center md:text-left'>
                            © 2025 <span className='text-[#B9FF66] font-medium'>ZEnd</span>. All rights reserved.
                        </p>
                        <button
                            onClick={scrollToTop}
                            className='group flex items-center gap-2 text-sm text-gray-500 hover:text-[#B9FF66] transition-colors duration-300 mx-auto md:mx-0'
                        >
                            <span>Back to top</span>
                            <FaArrowUp className='group-hover:-translate-y-1 transition-transform duration-300' />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterCus