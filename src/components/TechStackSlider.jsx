import { motion } from 'framer-motion';
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiDjango, DiGithubBadge, DiPython, DiMysql, DiPostgresql } from 'react-icons/di';
import { AiFillFileExcel } from 'react-icons/ai';

const TechStackSlider = () => {
  const iconGroups = [
    [DiHtml5, DiCss3, DiJavascript1],
    [DiReact, DiDjango, DiGithubBadge],
    [DiPython, AiFillFileExcel, DiMysql],
    [DiPostgresql, DiHtml5, DiCss3], // Repeat or add more icons as needed
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 2 }}
      className="flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24 overflow-hidden"
    >
      {iconGroups.map((group, index) => (
        <motion.div
          key={index}
          initial={{ x: '100%' }}
          whileInView={{ x: ['100%', 0, '-100%'] }}
          viewport={{ once: true }}
          transition={{ duration: 10, repeat: Infinity, delay: index * 2 }}
          className="flex flex-row items-center"
        >
          {group.map((Icon, i) => (
            <Icon key={i} className={`text-${Icon.color} mx-2`} />
          ))}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TechStackSlider;