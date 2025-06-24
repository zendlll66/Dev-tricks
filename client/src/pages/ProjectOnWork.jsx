import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { getProjects } from "../../service/projects";
import { useEffect } from "react";
import ProjectCard from "../components/common/ProjectCard";

// ✅ Mock Data
const mockProjects = [
  {
    id: 1,
    title: "2Carrent",
    description:
      "2Carrent is a web platform for booking and renting cars online. My responsibilities included customizing the website UI, adding animations, and developing the language switcher functionality.",
    image_url: "/assets/images/2car.png",
    role: "Frontend Developer (mainly frontend, but also implemented some backend CRUD functions)",
    techStack: ["React", "TailwindCSS", "Framer Motion"],
    demo_link: "https://2carrent.com",
    github_link: "",
  },
  {
    id: 2,
    title: "Gold Savings App (Demo)",
    description:
      "A demo application for gold savings, allowing users to simulate saving and tracking gold investments. This is a mock project for demonstration purposes only.",
    image_url:
      "https://img.freepik.com/free-vector/torn-style-coming-soon-promo-template-social-media-post_1017-55783.jpg?semt=ais_hybrid&w=740&t=1",
    role: "Frontend Developer, UI/UX Designer",
    techStack: ["React native", "css"],
    demo_link: "#",
    github_link: "",
  },
  {
    id: 3,
    title: "Patient Records App (Demo)",
    description:
      "A demo application for recording and managing individual patient data. This is a mock project for demonstration purposes only, allowing users to simulate adding, editing, and viewing patient records.",
    image_url:
      "https://img.freepik.com/free-vector/torn-style-coming-soon-promo-template-social-media-post_1017-55783.jpg?semt=ais_hybrid&w=740&t=1",
    role: "Frontend Developer, UI/UX Designer",
    techStack: ["React native", "css"],
    demo_link: "#",
    github_link: "",
  },
  {
    id: 4,
    title: "Ride-Hailing App (Demo)",
    description:
      "MOOV is a demo ride-hailing application that allows users to book rides and negotiate fares. This is a mock project for demonstration purposes only. My responsibilities included designing the UX/UI and building the demo app with mock data.",
    image_url:
      "https://img.freepik.com/free-vector/torn-style-coming-soon-promo-template-social-media-post_1017-55783.jpg?semt=ais_hybrid&w=740&t=1",
    role: "Frontend Developer, UI/UX Designer",
    techStack: ["React native", "css", "Figma"],
    demo_link: "#",
    github_link: "",
  },
  {
    id: 5,
    title: "Parking App UI/UX Design (Demo)",
    description:
      "A demo project focused on designing the UI/UX for a parking application. This is a mock project for demonstration purposes only, showcasing user flows and interface design for booking and managing parking spots.",
   image_url:
      "https://img.freepik.com/free-vector/torn-style-coming-soon-promo-template-social-media-post_1017-55783.jpg?semt=ais_hybrid&w=740&t=1",
    role: "UI/UX Designer",
    techStack: ["Figma"],
    demo_link: "#",
    github_link: "",
  },
];

// ✅ Skeleton Placeholder
const SkeletonCard = () => (
  <motion.div className="animate-pulse cursor-pointer bg-[#191A23] drop-shadow-md w-80 border-gray-700 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
    <div className="w-full h-48 object-cover bg-gray-700 "></div>
    <div className="p-4 text-white ">
      <h2 className="font-bold text-lg w-full h-5 rounded-2xl bg-gray-700"></h2>
      <p className="text-sm text-gray-400  w-1/2 h-5 rounded-2xl bg-gray-700 mt-2"></p>
      <p className="text-xs text-gray-500 w-full h-5 rounded-2xl bg-gray-700 mt-2"></p>
    </div>
  </motion.div>
);

const ProjectOnWork = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Mock fetch with timeout
    setLoading(true);
    const timer = setTimeout(() => {
      setData(mockProjects);
      setLoading(false);
    }, 900); // simulate network delay

    return () => clearTimeout(timer);
  }, []);

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

  return (
    <div className="min-h-screen w-full px-4 md:px-6 lg:px-8 py-6">
      <motion.h1
        variants={fadeRight(0.2)}
        initial="hidden"
        animate="visible"
        className="mb-8"
      >
        <span className="text-2xl md:text-3xl font-bold uppercase">
          Work Projects
        </span>
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {loading
          ? Array.from({ length: 3 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : data.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-200 bg-black/40 backdrop-blur-sm bg-opacity-70 flex items-center justify-center p-4 md:p-6">
            <div className="bg-gradient-to-br from-[#191A23] to-[#2a2a2a] text-white p-4 md:p-6 rounded-xl w-full max-w-2xl border border-gray-700/50 shadow-2xl relative max-h-[90vh] overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 md:top-4 md:right-4 text-gray-300 hover:text-white text-xl font-bold z-10 transition-all duration-200 hover:scale-110"
                aria-label="Close modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              {/* Content */}
              <div className="relative z-0">
                <h2 className="text-2xl md:text-3xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#B9FF66] to-[#c8fa8b]">
                  {selectedProject.title}
                </h2>

                {/* Image */}
                <div className="relative overflow-hidden rounded-lg mb-4 md:mb-5 border border-gray-700/50">
                  <img
                    src={selectedProject.image_url}
                    alt={selectedProject.title}
                    width={500}
                    height={300}
                    className="w-full h-48 md:h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
                </div>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-5 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Role */}
                <div className="mb-4 md:mb-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    My Role
                  </span>
                  <p className="text-sm md:text-base text-gray-300 mt-1">
                    {selectedProject.role}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-5 md:mb-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block mb-2">
                    Tech Stack
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-800/80 text-white text-xs py-1 px-2 md:py-1.5 md:px-3 rounded-full border border-gray-700 hover:bg-gray-700 transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <a
                    href={selectedProject.demo_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 text-center bg-gradient-to-r from-[#B9FF66] to-[#c8fa8b] text-black py-2 md:py-2.5 px-4 md:px-6 rounded-lg hover:from-[#53722e] hover:to-[#c8fa8b] transition-all duration-300 shadow-lg hover:shadow-red-500/20 flex items-center justify-center gap-2 text-sm md:text-base"
                  >
                    ▶ Live Demo
                  </a>
                  <a
                    href={selectedProject.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 text-center bg-gray-800/80 text-white py-2 md:py-2.5 px-4 md:px-6 rounded-lg hover:bg-gray-700/80 transition-all duration-300 border border-gray-700 hover:border-gray-600 flex items-center justify-center gap-2 text-sm md:text-base"
                  >
                    ⛓ GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectOnWork;
