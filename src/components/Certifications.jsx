import React, { useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import Reveal from './Reveal';

// Certifications data
const certifications = [
    {
        title: "Microsoft Office Specialist: Excel Associate Certification Training",
        description: "Certificate of Completion in Microsoft Office Specialist: Excel Associate Certification Training by Data Analytics Philippines",
        issuedBy: "Data Analytics Philippines",
        issueDate: "Feb 2025",
        link: "https://drive.google.com/file/d/1WmzicvLL2-mfM_SuLFbnIGTwi9ipwYrr/view?usp=sharing",
    },
    {
        title: "Tech Nexus - Certificate of Recognition",
        description: "Certificate of Recognition in Tech Nexus 2024: Empowering Campus Innovators",
        issuedBy: "Campus DEVCON",
        issueDate: "December 2024",
        link: "https://drive.google.com/file/d/1Yxywv006Q9W25SIeoHT3vlH2MZ3jmz85/view?usp=sharing",
    },
    {
        title: "DICT: Data Analysis and Visualization using Excel",
        description: "Certificate of Participation in DICT: Data Analysis and Visualization using Excel by DICT - Region IV-A CALABARZON",
        issuedBy: "DICT - Region IV-A CALABARZON",
        issueDate: "June 2024",
        link: "https://drive.google.com/file/d/1MvuuxphFcP2hn4oDpFhIXDaFqh2ulFvP/view?usp=sharing",
    },
    {
        title: "Google Analytics Introduction to Data Studio",
        description: "Certificate of Completion in Introduction to Data Studio by Google Analytics Academy",
        issuedBy: "Google Analytics Academy",
        issueDate: "November 2023",
        link: "https://drive.google.com/file/d/1c4gS2yYz_euUziZNb5MfZ_Z7qEtvnc26/view?usp=sharing",
    },
];

// Modal Component
const Modal = ({ isOpen, onClose, certification }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-900 p-6 rounded-xl shadow-xl max-w-3xl w-full mx-4 md:mx-0 relative animate-fade-in">
                <h3 className="text-2xl font-semibold text-white mb-4">{certification.title}</h3>
                <iframe
                    src={`https://drive.google.com/file/d/${certification.link.split('/d/')[1].split('/view')[0]}/preview`}
                    width="100%"
                    height={window.innerWidth < 768 ? 250 : 500}
                    title="Certification"
                    className="border-0 rounded-lg"
                />
                <button
                    onClick={onClose}
                    className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 w-full"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

// Certification Component
const Certification = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCertification, setSelectedCertification] = useState(null);

    const handleModalOpen = (certification) => {
        setSelectedCertification(certification);
        setModalOpen(true);
    };

    return (
        <div className="max-w-[1200px] mx-auto p-6 md:my-20" id="certifications">
            <h2 className="text-3xl font-bold text-center text-gray-200 mb-12">📜 Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certifications.map((certification, index) => (
                    <Reveal key={index}>
                        <div className="bg-gray-800 bg-opacity-90 p-6 rounded-lg shadow-lg border border-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                            <h3 className="text-xl font-semibold text-white mb-2">{certification.title}</h3>
                            <p className="text-gray-400 text-sm mb-4">{certification.description}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-500 text-sm">{certification.issueDate}</span>
                                <button
                                    className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg flex items-center gap-2 hover:bg-blue-700 transition duration-300"
                                    onClick={() => handleModalOpen(certification)}
                                >
                                    <AiOutlineEye className="text-lg" /> View
                                </button>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>

            {/* Modal for certification details */}
            <Modal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                certification={selectedCertification}
            />
        </div>
    );
};

export default Certification;
