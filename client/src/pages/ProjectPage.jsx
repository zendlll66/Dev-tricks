import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion';
import { useRef } from 'react';

import { useInView } from 'framer-motion';
const ProjectPage = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const fadeRight = (delay = 0) => ({
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
                delay,
            },
        },
    });
    const projects = [
        {
            id: 1,
            image: '/assets/images/research_nu.png',
            title: 'Researcher hub',
            links: {
                demo: 'https://research-nu-nine.vercel.app/',
                github: 'https://github.com/zendlll66/research-nu'
            },
            description: 'A platform for researchers to share their work and collaborate with others.',
            techStack: ['React', 'Tailwind CSS', 'MySQL', 'Node.js', 'Vercel'],
            role: 'Front-end Developer - UX/UI Design',
        },
        {
            id: 2,
            image: '/assets/images/AgeCal.png',
            title: 'Age Calculator',
            links: {
                demo: 'https://age-calculator-kappa-opal.vercel.app/',
                github: 'https://github.com/zendlll66/age-calculator'
            },
            description: 'A simple age calculator that helps you calculate your age in years, months, and days.',
            techStack: ['Next.js', 'Tailwind CSS', 'Vercel'],
            role: 'Front-end Developer - UX/UI Design',
        },
        {
            id: 3,
            image: '/assets/images/ExtensionManage.png',
            title: 'Extension Manager',
            links: {
                demo: 'https://extensions-manager-sigma.vercel.app/',
                github: 'https://github.com/zendlll66/extensions-manager'
            },
            description: 'A Chrome extension that helps you manage your extensions and keep them updated.',
            techStack: ['Next.js', 'Tailwind CSS', 'Vercel'],
            role: 'Front-end Developer - UX/UI Design',
        },
        {
            id: 4,
            image: '/assets/images/BentoGrid.png',
            title: 'Bento Grid',
            links: {
                demo: 'https://bento-grid-kappa-seven.vercel.app/',
                github: 'https://github.com/zendlll66/bento-grid'
            },
            description: 'A grid system that helps you create responsive layouts easily.',
            techStack: ['Next.js', 'Tailwind CSS', 'Vercel'],
            role: 'Front-end Developer - UX/UI Design',
        },
        {
            id: 5,
            image: '/assets/images/ecommerce.png',
            title: 'ecommerce simple page',
            links: {
                demo: 'https://ecommerce-product-zeta.vercel.app/',
                github: 'https://github.com/zendlll66/ecommerce-product'
            },
            description: 'A fully responsive e-commerce product detail page inspired by product-focused landing pages.',
            techStack: ['Next.js', 'Tailwind CSS', 'Vercel'],
            role: 'Front-end Developer - UX/UI Design',
        },
        {
            id: 6,
            image: '/assets/images/SaaS-landing-page.png',
            title: 'landing-page',
            links: {
                demo: 'https://zend-saas-landing-page.vercel.app/',
                github: 'https://github.com/zendlll66/saas-landing-page'
            },
            description: 'A sleek, responsive landing page for a fictional productivity SaaS product. Built with modern design practices and polished UI animations to showcase product features, pricing, and testimonials.',
            techStack: ['Next.js', 'Tailwind CSS', 'Vercel'],
            role: 'Front-end Developer',
        },
        {
            id: 7,
            image: '/assets/images/bus-tracking.png',
            title: 'Bus Tracking NU-Rework',
            links: {
                demo: 'https://nu-bus-tracking.vercel.app/',
                github: 'https://github.com/zendlll66/bus-tracking'
            },
            description: 'A live tracking system for the buses at Naresuan University, designed to improve real-time vehicle tracking and user accessibility.',
            techStack: ['Next.js', 'Tailwind CSS', 'Vercel', 'leaflet.js'],
            role: 'Front-end Developer',
        },
        {
            id: 8,
            image: '/assets/images/landing-page-clone0.png',
            title: 'Landing Page Clone ',
            links: {
                demo: 'https://zend-clone-page.vercel.app/',
                github: 'https://github.com/zendlll66/simple-portfolio'
            },
            description: 'A pixel-perfect landing page cloned from a Figma Community design, focusing on clean UI layout, responsive design, and smooth transitions.',
            techStack: ['React', 'Tailwind CSS', 'Vercel',],
            role: 'Front-end Developer',
        },
        {
            id: 9,
            image: '/assets/images/Food-slider.png',
            title: 'Food Slider',
            links: {
                demo: 'https://zend-food-slider.vercel.app/',
                github: 'https://github.com/zendlll66/food-slider'
            },
            description: 'A sleek, interactive food slider that showcases various food items in a stylish layout, perfect for restaurant menus or food-related projects.',
            techStack: ['React', 'Tailwind CSS', 'Vercel',],
            role: 'Front-end Developer',
        },
        {
            id: 10,
            image: '/assets/images/3D-site.png',
            title: '3D-site Present Page',
            links: {
                demo: 'https://zend-sim-3d.vercel.app/',
                github: 'https://github.com/zendlll66/sim-3d'
            },
            description: 'A creative product showcase simulating 3D movement using Tailwind CSS and custom animations. The interactive layout lets users navigate through different product variants with smooth transitions, all built without using WebGL or external 3D tools.',
            techStack: ['React', 'Tailwind CSS', 'Vercel',],
            role: 'Front-end Developer',
        },
    ];
    return (
        <div className='h-full'>

            <motion.h1
                variants={fadeRight(0.2)}
                initial="hidden"
                animate="visible"
            >
                <span className="text-3xl font-bold uppercase">Projects</span>
            </motion.h1>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {projects.map((project, index) => {
                    const ref = useRef(null);
                    const inView = useInView(ref, { once: true });

                    return (
                        <motion.div
                            ref={ref}
                            key={project.id}
                            className="cursor-pointer bg-[#191A23] border border-gray-700 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
                            onClick={() => setSelectedProject(project)}
                            variants={fadeRight(index * 0.1)}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                        >
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                            <div className="p-4 text-white">
                                <h2 className="font-bold text-lg">{project.title}</h2>
                                <p className="text-sm text-gray-400 line-clamp-2">{project.description}</p>
                                <p className="text-xs text-gray-500 mt-2">Tech: {project.techStack.join(', ')}</p>
                            </div>
                        </motion.div>
                    );
                })}


                {/* Modal */}
                {selectedProject && (
                    <div className="fixed inset-0 z-200 bg-black/40 backdrop-blur-sm bg-opacity-70 flex items-center justify-center p-4">
                        <div className="bg-gradient-to-br from-[#191A23] to-[#2a2a2a] text-white p-6 rounded-xl max-w-2xl w-full border border-gray-700/50 shadow-2xl relative overflow-hidden group">

                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 text-gray-300 hover:text-white text-xl font-bold z-10 transition-all duration-200 hover:scale-110"
                                aria-label="Close modal"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>

                            {/* Content */}
                            <div className="relative z-0">
                                <h2 className="text-3xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#B9FF66] to-[#c8fa8b]">
                                    {selectedProject.title}
                                </h2>

                                {/* Image */}
                                <div className="relative overflow-hidden rounded-lg mb-5 border border-gray-700/50">
                                    <img
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        width={500}
                                        height={300}
                                        className="w-full h-100  object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
                                </div>

                                {/* Description */}
                                <p className="text-gray-300 mb-5 leading-relaxed">
                                    {selectedProject.description}
                                </p>

                                {/* Role */}
                                <div className="mb-5">
                                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">My Role</span>
                                    <p className="text-gray-300 mt-1">{selectedProject.role}</p>
                                </div>

                                {/* Tech Stack */}
                                <div className="mb-6">
                                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block mb-2">Tech Stack</span>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.techStack.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="bg-gray-800/80 text-white text-xs py-1.5 px-3 rounded-full border border-gray-700 hover:bg-gray-700 transition-all duration-200"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-4">
                                    <a
                                        href={selectedProject.links.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 text-center bg-gradient-to-r from-[#B9FF66] to-[#c8fa8b] text-black py-2.5 px-6 rounded-lg hover:from-[#53722e] hover:to-[#c8fa8b] transition-all duration-300 shadow-lg hover:shadow-red-500/20 flex items-center justify-center gap-2"
                                    >
                                        ▶ Live Demo
                                    </a>
                                    <a
                                        href={selectedProject.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 text-center bg-gray-800/80 text-white py-2.5 px-6 rounded-lg hover:bg-gray-700/80 transition-all duration-300 border border-gray-700 hover:border-gray-600 flex items-center justify-center gap-2"
                                    >
                                        ⛓ GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div >

    );
};
export default ProjectPage