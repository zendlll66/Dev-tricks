import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const ProjectCard = ({ project, index, onClick }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const [isHovered, setIsHovered] = useState(false);

    const fadeRight = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
            },
        },
    };

    const imageHover = {
        scale: 1.05,
        transition: { duration: 0.3, ease: "easeOut" }
    };

    const cardHover = {
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
    };

    return (
        <motion.div
            ref={ref}
            className="group cursor-pointer w-full bg-gradient-to-br from-[#1a1b26] to-[#24283b] rounded-2xl overflow-hidden shadow-2xl border border-gray-800/50 relative"
            onClick={onClick}
            variants={fadeRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            whileHover={cardHover}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            {/* Gradient overlay on image */}
            <div className="relative overflow-hidden">
                <motion.img 
                    src={project.image_url} 
                    alt={project.title} 
                    className="w-full h-48 object-cover"
                    whileHover={imageHover}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Floating tech stack badges */}
                <div className="absolute top-3 right-3 flex flex-wrap gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    {project.techStack.slice(0, 3).map((tech, idx) => (
                        <motion.span
                            key={idx}
                            className="px-2 py-1 bg-blue-600/80 backdrop-blur-sm text-white text-xs rounded-full font-medium"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            {tech}
                        </motion.span>
                    ))}
                </div>

                {/* View project button */}
                <motion.div 
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                >
                    <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30">
                        <span className="text-white font-semibold text-sm">View Project</span>
                    </div>
                </motion.div>
            </div>

            {/* Content section */}
            <div className="p-6 text-white relative">
                {/* Animated underline */}
                <motion.div 
                    className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                />
                
                <motion.h2 
                    className="font-bold text-xl mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                >
                    {project.title}
                </motion.h2>
                
                <motion.p 
                    className="text-sm text-gray-400 line-clamp-2 mb-4 leading-relaxed"
                    whileHover={{ color: "#9ca3af" }}
                    transition={{ duration: 0.2 }}
                >
                    {project.description}
                </motion.p>
                
                {/* Tech stack with icons */}
                <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 2).map((tech, idx) => (
                            <motion.span
                                key={idx}
                                className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-lg border border-gray-700/50"
                                whileHover={{ 
                                    backgroundColor: "rgba(59, 130, 246, 0.2)",
                                    borderColor: "rgba(59, 130, 246, 0.5)",
                                    scale: 1.05
                                }}
                                transition={{ duration: 0.2 }}
                            >
                                {tech}
                            </motion.span>
                        ))}
                        {project.techStack.length > 2 && (
                            <span className="px-3 py-1 bg-gray-800/50 text-gray-400 text-xs rounded-lg border border-gray-700/50">
                                +{project.techStack.length - 2}
                            </span>
                        )}
                    </div>
                    
                    {/* Arrow icon */}
                    <motion.div
                        className="text-gray-500 group-hover:text-blue-400 transition-colors duration-300"
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </motion.div>
                </div>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </motion.div>
    );
};

export default ProjectCard

