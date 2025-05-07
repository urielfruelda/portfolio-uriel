import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const experiences = [
  { company: 'PLDT Inc. - Batangas', period: 'Feb 2025 - Apr 2025', status: 'Internship', description: 'Troubleshot network issues as a network admin, performed business analysis to improve performance metrics, and cleaned network equipment to reduce traffic.' },
  { company: 'Capstone Project', period: '2023 - 2024', status: 'Frontend Developer/Team Lead', description: 'Designed and developed a responsive web application using React, Redux, and Tailwind CSS. Implemented features such as user authentication, profile management, and data visualization. Collaborated with the backend team to integrate API endpoints and implement a CI/CD pipeline.' },
  // { company: 'Third Company', period: '2016 - 2018', description: 'Built scalable web apps and optimized database queries.' },
  // { company: 'Fourth Company', period: '2014 - 2016', description: 'Started my career, learned industry best practices and tools.' },
];

const Experience = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start center', 'end center'],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={sectionRef} className="relative px-6 py-24 max-w-4xl mx-auto">
      <h2 className="text-3xl text-gray-200 font-bold text-center mb-16">Experience</h2>

      {/* Static Track Line */}
      <div className="relative pl-10">
        <div className="absolute top-0 bottom-0 left-[10px] w-1 bg-purple-900/20 rounded-full" />

        {/* Scroll-fill Line */}
        <motion.div
          className="absolute top-0 left-[10px] w-1 bg-purple-500 origin-top rounded-full"
          style={{ height: '100%', scaleY }}
        />

        <div className="space-y-16">
          {experiences.map((exp, index) => {
            const itemRef = useRef(null);
            const inView = useInView(itemRef, {
              margin: "-100px 0px -40% 0px",
              once: false,
            });

            return (
              <motion.div
                ref={itemRef}
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Animated Dot */}
                <motion.div
                  className="absolute left-[-21px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full z-10 border-4 transition-all duration-300"
                  animate={{
                    backgroundColor: inView ? '#a855f7' : '#1e1b4b',
                    borderColor: inView ? '#fff' : '#4b5563',
                    scale: inView ? 1.2 : 1,
                  }}
                />

                {/* Content Box with glow on inView */}
                <div
                  className={`p-6 rounded-lg transition-all duration-300 border shadow-md ${
                    inView
                      ? 'bg-purple-700/20 border-purple-400 shadow-purple-500/30 shadow-lg'
                      : 'bg-purple-700/10 border-purple-600'
                  }`}
                >
                  <h3 className="text-gray-100 text-xl font-semibold">{exp.company}</h3>
                  <p className="text-gray-300 text-sm">{exp.period}</p>
                  <p className="text-gray-400 mt-2 text-sm">{exp.description}</p>
                  <p className="bg-purple-500/20 px-2 py-1 rounded-lg text-purple-500 font-bold mt-2 text-sm">{exp.status}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
