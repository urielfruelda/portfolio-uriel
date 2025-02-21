import React from "react";
import profilepic from "../assets/profpic.png";
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
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="mt-40 md:mt-24 max-w-[1200px] mx-auto hero">
      <div className="grid md:grid-cols-2 place-items-center gap-8">
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
                        1000
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
                    HEY, I AM <br/>
                    <span className="text-purple-500">ERNAN URIEL</span>
                </motion.p>

                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
                >
                    I'm a Business Analytics student with a strong passion for technology and innovation, constantly seeking ways to improve my skills and stay up-to-date with the latest trends in the industry.
                </motion.p>

                <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.5 }}
                className="flex flex-row items-center gap-6 my-4 md:mb-0"
                >
                    <Button/>
                    <div className="flex gap-6 flex-row text-4xl md:text-3xl text-purple-400 z-20">
                        <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/urielfruelda">
                            <AiOutlineGithub/>
                        </motion.a>

                        <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/ernan-uriel-fruelda-54b87434a/">
                            <AiOutlineLinkedin/>
                        </motion.a>

                        <motion.a whileHover={{ scale: 1.2 }} href="https://www.instagram.com/uye_fruelda/">
                            <AiOutlineInstagram/>
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.2 }} href="mailto:urielfruelda@gmail.com">
                            <AiOutlineMail/>
                        </motion.a>
                    </div>
                </motion.div>
            </motion.div>


        <motion.img 
                src={profilepic}
                className="w-[300px] md:w-[350px]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            />
        </div>

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 2 }}
            className="flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24"
        >
            <div className="flex flex-col md:flex-row items-center">
                <p className="text-gray-200 mr-6">My Tech Stack</p>
                <DiHtml5 className="text-orange-600 mx-2" />
                <DiCss3 className="text-blue-600 mx-2" />
                <DiJavascript1 className="text-yellow-500 mx-2" />
                <DiReact className="text-blue-500 mx-2" />
                <DiDjango className="text-green-500 mx-2" />
                <DiGithubBadge className="text-gray-200 mx-2" />
                <DiPython className="text-blue-700 mx-2" />
                <AiFillFileExcel className="text-green-700 mx-2" />
                <DiMysql className="text-red-500 mx-2" />
                <DiPostgresql className="text-blue-500 mx-2" />

            </div>

        </motion.div>

        <div className="absolute inset-0 hidden md:block">
            <ShinyEffect left={0} top={0} size={1400} />
        </div>
        
    </div>
  )
}

export default Hero
