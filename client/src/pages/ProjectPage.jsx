import React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { getProjects } from '../../service/projects';
import { useEffect } from 'react';
import ProjectCard from '../components/common/ProjectCard';

// ✅ Skeleton Placeholder
const SkeletonCard = () => (
    <motion.div
        className="animate-pulse cursor-pointer bg-[#191A23] drop-shadow-md w-80 border-gray-700 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
    >
        <div className="w-full h-48 object-cover bg-gray-700 "></div>
        <div className="p-4 text-white ">
            <h2 className="font-bold text-lg w-full h-5 rounded-2xl bg-gray-700"></h2>
            <p className="text-sm text-gray-400  w-1/2 h-5 rounded-2xl bg-gray-700 mt-2"></p>
            <p className="text-xs text-gray-500 w-full h-5 rounded-2xl bg-gray-700 mt-2"></p>
        </div>
    </motion.div>
)

const ProjectPage = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await getProjects();
                const data = (response || [])
                setData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [])

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

    // Modal animations
    const modalBackdrop = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { duration: 0.3 }
        },
        exit: { 
            opacity: 0,
            transition: { duration: 0.2 }
        }
    };

    const modalContent = {
        hidden: { 
            opacity: 0, 
            scale: 0.8, 
            y: 50 
        },
        visible: { 
            opacity: 1, 
            scale: 1, 
            y: 0,
            transition: { 
                duration: 0.4,
                ease: "easeOut"
            }
        },
        exit: { 
            opacity: 0, 
            scale: 0.8, 
            y: 50,
            transition: { 
                duration: 0.2 
            }
        }
    };

    return (
        <div className='min-h-screen w-full px-4 md:px-6 lg:px-8 py-6'>
            <motion.h1
                variants={fadeRight(0.2)}
                initial="hidden"
                animate="visible"
                className="mb-8"
            >
                <span className="text-2xl md:text-3xl font-bold uppercase">Projects</span>
            </motion.h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {
                    loading ? Array.from({ length: 3 }).map((_, index) => (
                        <SkeletonCard key={index} />
                    )) :
                        data.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                                onClick={() => setSelectedProject(project)}
                            />
                        ))
                }

                {/* Enhanced Modal */}
                <AnimatePresence>
                    {selectedProject && (
                        <motion.div 
                            className="fixed inset-0 z-200 flex items-center justify-center p-4 md:p-6"
                            variants={modalBackdrop}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={() => setSelectedProject(null)}
                        >
                            {/* Backdrop with blur */}
                            <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />
                            
                            {/* Modal Content */}
                            <motion.div 
                                className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white rounded-2xl w-full max-w-4xl border border-gray-700/50 shadow-2xl max-h-[90vh] overflow-hidden"
                                variants={modalContent}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-green-400/5 rounded-2xl pointer-events-none" />
                                
                                {/* Close Button */}
                                <motion.button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 z-20 text-gray-400 hover:text-white transition-colors duration-200 group"
                                    whileHover={{ scale: 1.1, rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <div className="w-8 h-8 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-600/50 group-hover:border-gray-500/50 transition-all duration-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="18" y1="6" x2="6" y2="18" />
                                            <line x1="6" y1="6" x2="18" y2="18" />
                                        </svg>
                                    </div>
                                </motion.button>

                                {/* Scrollable Content */}
                                <div className="overflow-y-auto max-h-[90vh] p-6 md:p-8">
                                    {/* Header Section */}
                                    <motion.div 
                                        className="mb-6"
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                                            {selectedProject.title}
                                        </h2>
                                        <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-green-400 rounded-full" />
                                    </motion.div>

                                    {/* Image Section */}
                                    <motion.div 
                                        className="relative overflow-hidden rounded-xl mb-6 border border-gray-700/50 group"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <motion.img
                                            src={selectedProject.image_url}
                                            alt={selectedProject.title}
                                            className="w-full h-48 md:h-64 object-cover"
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        
                                        {/* Floating tech badges on image */}
                                        <div className="absolute top-4 left-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                            {selectedProject.techStack.slice(0, 3).map((tech, idx) => (
                                                <motion.span
                                                    key={idx}
                                                    className="px-3 py-1 bg-black/80 backdrop-blur-sm text-white text-xs rounded-full font-medium border border-gray-600/50"
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: idx * 0.1 }}
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </motion.div>

                                    {/* Description */}
                                    <motion.div 
                                        className="mb-6"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <h3 className="text-lg font-semibold mb-3 text-gray-200">Description</h3>
                                        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                                            {selectedProject.description}
                                        </p>
                                    </motion.div>

                                    {/* Role */}
                                    <motion.div 
                                        className="mb-6"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <h3 className="text-lg font-semibold mb-3 text-gray-200">My Role</h3>
                                        <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg border border-gray-700/50">
                                            <p className="text-gray-300 text-sm md:text-base">{selectedProject.role}</p>
                                        </div>
                                    </motion.div>

                                    {/* Tech Stack */}
                                    <motion.div 
                                        className="mb-8"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <h3 className="text-lg font-semibold mb-3 text-gray-200">Tech Stack</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.techStack.map((tech, index) => (
                                                <motion.span
                                                    key={index}
                                                    className="bg-gradient-to-r from-black/80 to-gray-900/80 text-white text-xs py-2 px-3 rounded-lg border border-gray-600/50 hover:border-green-500/50 hover:from-green-600/10 hover:to-green-500/10 transition-all duration-200 cursor-default"
                                                    whileHover={{ scale: 1.05, y: -2 }}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: 0.6 + index * 0.05 }}
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </motion.div>

                                    {/* Action Buttons */}
                                    <motion.div 
                                        className="flex flex-col sm:flex-row gap-4"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.7 }}
                                    >
                                        <motion.a
                                            href={selectedProject.demo_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 text-center bg-gradient-to-r from-green-600 to-green-500 text-white py-3 px-6 rounded-xl hover:from-green-700 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-green-500/25 flex items-center justify-center gap-2 font-semibold group"
                                            whileHover={{ scale: 1.02, y: -2 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <span>▶</span>
                                            <span>Live Demo</span>
                                            <motion.svg 
                                                width="16" 
                                                height="16" 
                                                viewBox="0 0 24 24" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                strokeWidth="2"
                                                className="group-hover:translate-x-1 transition-transform duration-200"
                                            >
                                                <path d="M7 17L17 7M17 7H7M17 7V17"/>
                                            </motion.svg>
                                        </motion.a>
                                        
                                        <motion.a
                                            href={selectedProject.github_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 text-center bg-black/80 text-white py-3 px-6 rounded-xl hover:bg-gray-900/80 transition-all duration-300 border border-gray-600/50 hover:border-gray-500/50 flex items-center justify-center gap-2 font-semibold group"
                                            whileHover={{ scale: 1.02, y: -2 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <span>⛓</span>
                                            <span>GitHub</span>
                                            <motion.svg 
                                                width="16" 
                                                height="16" 
                                                viewBox="0 0 24 24" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                strokeWidth="2"
                                                className="group-hover:translate-x-1 transition-transform duration-200"
                                            >
                                                <path d="M7 17L17 7M17 7H7M17 7V17"/>
                                            </motion.svg>
                                        </motion.a>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};
export default ProjectPage