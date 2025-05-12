import React from 'react'
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';


const ProjectCard = ({ project, index, onClick }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    const fadeRight = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
                delay: index * 0.1,
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            className="cursor-pointer w-full bg-[#191A23] drop-shadow-md border-gray-700 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
            onClick={onClick}
            variants={fadeRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
        >
            <img src={project.image_url} alt={project.title} className="w-full h-48 object-cover " />
            <div className="p-4 text-white ">
                <h2 className="font-bold text-lg">{project.title}</h2>
                <p className="text-sm text-gray-400 line-clamp-2">{project.description}</p>
                <p className="text-xs text-gray-500 mt-2">Tech: {project.techStack.join(', ')}</p>
            </div>
        </motion.div>
    );
};

export default ProjectCard

