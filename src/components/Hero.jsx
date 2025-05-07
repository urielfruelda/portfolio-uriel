import React, { useState, useEffect } from "react";
import profilepic from "../assets/uriel.png";
import badgeImage from "../assets/data-analytics-essentials.png";
import badgeImage2 from "../assets/aws-academy-cloud-foundations.png";
 // Import your badge image
import { TypeAnimation } from "react-type-animation";
import Button from "./Button";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineLinkedin,
  AiFillFileExcel,
} from "react-icons/ai";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiGithubBadge,
  DiReact,
  DiDjango,
  DiPython,
  DiPostgresql,
  DiMysql,
} from "react-icons/di";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const icons = [
    <DiHtml5 className="text-orange-600 mx-2" key="html" />,
    <DiCss3 className="text-blue-600 mx-2" key="css" />,
    <DiJavascript1 className="text-yellow-500 mx-2" key="js" />,
    <DiReact className="text-blue-500 mx-2" key="react" />,
    <DiDjango className="text-green-500 mx-2" key="django" />,
    <DiGithubBadge className="text-gray-200 mx-2" key="github" />,
    <DiPython className="text-blue-700 mx-2" key="python" />,
    <AiFillFileExcel className="text-green-700 mx-2" key="excel" />,
    <DiMysql className="text-red-500 mx-2" key="mysql" />,
    <DiPostgresql className="text-blue-500 mx-2" key="postgresql" />,
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [];
  const iconsPerSlide = 5;
  const [expandedBadge, setExpandedBadge] = useState(null);
  

  const handleBadgeClick = (badge) => {
    setExpandedBadge(badge);
  };

  const closeExpandedView = (e) => {
    // Only close if clicking on the overlay background, not the image itself
    if (e.target === e.currentTarget) {
      setExpandedBadge(null);
    }
  };

  // Group icons into slides
  for (let i = 0; i < icons.length; i += iconsPerSlide) {
    slides.push(icons.slice(i, i + iconsPerSlide));
  }

  // Automatically transition to the next slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="mt-40 md:mt-24 mr-54 max-w-[1200px] mx-auto hero">
       <AnimatePresence>
        {expandedBadge && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
            onClick={closeExpandedView}
          >
            <motion.button 
              className="absolute top-6 right-6 text-white text-3xl z-50 hover:text-purple-400 transition-colors"
              whileHover={{ scale: 1.2 }}
              onClick={() => setExpandedBadge(null)}
            >
              ✕
            </motion.button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="relative max-w-full max-h-full"
            >
              <img 
                src={expandedBadge === 'data' ? badgeImage : badgeImage2} 
                alt={expandedBadge === 'data' ? "Data Analytics Essentials" : "AWS Cloud Foundations"} 
                className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg shadow-xl"
              />
              
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="grid md:grid-cols-2  place-items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "Business Analyst",
              1000,
              "Webdesigner",
              1000,
              "Frontend Developer",
              1000,
              "Guitarist",
              1000,
              "Data Analyst",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-400 text-xl md:text-5xl italic- mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
          >
            HEY, I AM <br />
            <span className="text-purple-500">ERNAN URIEL</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
          >
            I'm an aspiring Data Analyst or Business Analyst with a strong passion for technology and innovation, constantly seeking ways to improve my skills and stay up-to-date with the latest trends in the industry.
          </motion.p>
          
          {/* Add your badge here */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
             className="mb-6 relative z-30"
          >
            <div className="flex flex-wrap gap-6">
              {/* First Badge */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center cursor-pointer"
                onClick={() => handleBadgeClick('data')}
              >
                <img 
                  src={badgeImage} 
                  alt="Data Analytics Essentials" 
                  className="w-24 h-24 md:w-20 md:h-20 rounded-lg shadow-lg"
                />
                {/* <p className="text-gray-400 text-sm mt-2 text-center">Data Analytics</p> */}
              </motion.div>
              
              {/* Second Badge */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center cursor-pointer"
                onClick={() => handleBadgeClick('cloud')}
              >
                <img 
                  src={badgeImage2} 
                  alt="AWS Cloud Foundations" 
                  className="w-24 h-24 md:w-20 md:h-20 rounded-lg shadow-lg"
                />
                {/* <p className="text-gray-400 text-sm mt-2 text-center">AWS Cloud</p> */}
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-6 my-4 md:mb-0"
          >
            <Button />
            <div className="flex gap-6 flex-row text-4xl md:text-3xl text-purple-400 z-20">
              <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/urielfruelda">
                <AiOutlineGithub />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/ernan-uriel-fruelda-54b87434a/">
                <AiOutlineLinkedin />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="https://www.instagram.com/uye_fruelda/">
                <AiOutlineInstagram />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="mailto:urielfruelda@gmail.com">
                <AiOutlineMail />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.img
          src={profilepic}
          className="w-[400px] md:w-[500px]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>

      <div className="flex flex-row text-6xl px-12 md:px-0 w-full justify-center items-center mt-20">
      <h2 className="text-3xl font-bold mb-4 text-center text-gray-200">Tech Stacks</h2>
      </div>

      <motion.div   
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24 overflow-hidden"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex flex-row items-center"
          >
            {slides[currentSlide].map((icon) => (
              <motion.span
                key={icon.key}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.5 }}
                className="text-6xl md:text-8xl"
              >
                {icon}
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default Hero;