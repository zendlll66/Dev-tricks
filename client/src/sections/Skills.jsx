import React from 'react';
import { motion } from 'framer-motion';
const Skills = () => {
    const myTool = [
        {
            front: [
                "HTML",
                "CSS",
                "Tailwind",
                "JavaScript",
                "React JS",
                "Next JS",
            ],
            back: [
                "Node JS",
                "Express JS",
                "MySQL",
            ],
            tool: [
                "Git",
                "Github",
                "Figma",
                "VS Code",
                "Postman",
                "render",
                "Vercel",
                "tidb",
                "Dbeaver"
            ],
            uxui: [
                "Figma",
                "Photoshop"
            ],
            Test: [
                "Cypress"
            ],
        }
    ];

    return (
        <div className=''>
            <h1 className='text-3xl font-bold'>Skills</h1>
            <div className='mt-5 w-100 overflow-auto'>
                {Object.entries(myTool[0]).map(([category, skills]) => (
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: false, amount: 0.2 }}
                        key={category}
                        className='mb-4 '>
                        <h2 className='text-2xl font-semibold '>{category.toUpperCase()}</h2>
                        <ul className='list-none flex flex-wrap gap-2 mt-2'>
                            {skills.map((skill, index) => (
                                <li key={index} className='bg-[#2b2b2b] text-white md:text-md text-[12px] p-2 rounded-xl'>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>

    );
};
export default Skills;
