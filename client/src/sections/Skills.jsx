import React from 'react';

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
        }
    ];

    return (
        <div>
            <h1 className='text-3xl font-bold'>Skills</h1>
            <div className='mt-5'>
                {Object.entries(myTool[0]).map(([category, skills]) => (
                    <div key={category} className='mb-4 '>
                        <h2 className='text-2xl font-semibold'>{category.toUpperCase()}</h2>
                        <ul className='list-disc flex flex-row'>
                            {skills.map((skill, index) => (
                                <p className='mr-2 bg-[#2b2b2b] text-white p-2 rounded-xl'>{skill}</p>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

        </div>
    );
};
export default Skills;
