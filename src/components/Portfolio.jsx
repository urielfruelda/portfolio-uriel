import React, { useState } from 'react';
import sunhilllms from "../assets/sunhill.png";
import project2 from "../assets/quantum.png";
import project4 from "../assets/pharmalert.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import { AiOutlineGithub, AiOutlineMail } from 'react-icons/ai';
import Reveal from './Reveal';

// Projects data
const projects = [
    {
        img: sunhilllms,
        title: "Sunhill LMS",
        description: "A Learning Management System (LMS) built with React, Django, Tailwind, and PostgreSQL. This our capstone project",
        links: {
            site: "https://sunhilllms.online/",
            github: "https://github.com/mayuzumiDEV/sunhill-repo",
        },
    },
    {
        img: project2,
        title: "Quantum Diary",
        description: "A static website for promoting milk consumption.",
        links: {
            site: "https://urielfruelda.github.io/quantumdairy/",
            github: "https://github.com/urielfruelda/quantumdairy",
        },
    },
    {
        img: project4,
        title: "PharmAlert",
        description: "An inventory management system with real-time monitoring of expired medicines and point-of-sale feature.",
        links: {
            site: "#",
            github: "https://github.com/urielfruelda/PharmAlert",
        },
        status: {
            deployed: false,
            reason: "The backend infrastructure is still being optimized for scalability, and the responsiveness of the frontend is still being improved.",
            timeline: "Still in development",
            contact: "mailto:urielfruelda@gmail.com",
        },
    },
    // Add more projects as needed
];

// Modal Component
const Modal = ({ isOpen, onClose, project }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full mx-4">
                <h3 className="text-xl font-semibold text-gray-200 mb-4">🚧 {project.title} is Under Development</h3>
                <p className="text-gray-300 mb-4">
                    This project is currently undeployed. Here's why:
                </p>
                <ul className="list-disc list-inside text-gray-300 mb-4">
                    <li>{project.status.reason}</li>
                </ul>
                <p className="text-gray-300 mb-4">
                    <strong>Timeline:</strong> {project.status.timeline}
                </p>
                <p className="text-gray-300 mb-4">
                    Stay updated by contacting me:
                </p>
                <a
                    href={project.status.contact}
                    className="flex items-center px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                >
                    <AiOutlineMail className="mr-2" />
                    Contact Me
                </a>
                <button
                    onClick={onClose}
                    className="mt-4 px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300 w-full"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

// Portfolio Component
const Portfolio = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleModalOpen = (project) => {
        setSelectedProject(project);
        setModalOpen(true);
    };

    return (
        <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
            <h2 className='text-3xl font-bold text-center text-gray-200 mb-8'>Portfolio</h2>
            {projects.map((project, index) => (
                <Reveal key={index}>
                    <div className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                        {/* Project Image */}
                        <div className='w-full md:w-1/2 p-4'>
                            <img
                                src={project.img}
                                alt={project.title}
                                className='w-full h-full object-cover rounded-lg shadow-lg'
                            />
                        </div>

                        {/* Project Details */}
                        <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                            <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                            <p className='text-gray-300 mb-4'>{project.description}</p>
                            <div className='flex space-x-4'>
                                {/* View Site Button */}
                                {project.links.site === "#" ? (
                                    <button
                                        className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'
                                        onClick={() => handleModalOpen(project)}
                                    >
                                        View Site
                                    </button>
                                ) : (
                                    <a
                                        href={project.links.site}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'
                                    >
                                        View Site
                                    </a>
                                )}

                                {/* GitHub Link */}
                                <a
                                    href={project.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'
                                >
                                    <AiOutlineGithub />
                                </a>
                            </div>
                        </div>
                    </div>
                </Reveal>
            ))}

            {/* Modal for "Site under development" */}
            <Modal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                project={selectedProject}
            />
        </div>
    );
};

export default Portfolio;