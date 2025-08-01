import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaJs,
  FaJava,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPython,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiFigma,
  SiKotlin,
} from "react-icons/si";
import back from "../assets/backgroundhero.jpg";
import Footer from "../components/footer";

const skills = [
  {
    category: "Frontend",
    color: "text-[#58A6FF]",
    items: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "React.js", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    category: "Backend",
    color: "text-[#FF7B72]",
    items: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "PHP", icon: <FaPhp /> },
      { name: "Python", icon: <FaPython /> },
    ],
  },
  {
    category: "Database",
    color: "text-[#FFD700]",
    items: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
  },
  {
    category: "Mobile",
    color: "text-[#A78BFA]",
    items: [{ name: "Kotlin", icon: <SiKotlin /> }],
  },
  {
    category: "Other Tools",
    color: "text-[#79C0FF]",
    items: [
      { name: "Figma", icon: <SiFigma /> },
      { name: "Java", icon: <FaJava /> },
    ],
  },
];

const SkillTree = () => {
  return (
    <div className="relative min-h-screen font-inter overflow-hidden text-white">
      {/* Background with animation */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${back}')` }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1117]/90 to-[#161B22]/95" />
      <section
        id="skills"
        className="relative z-10 flex items-center justify-center min-h-screen px-6 py-20 mt-10"
      >
        <div className="container mx-auto max-w-5xl mb-8 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-[#58A6FF]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Skill Tree
          </motion.h2>

          <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 mt-8 lg:grid-cols-3">
            {skills.map((section, index) => (
              <motion.div
                key={index}
                className="bg-[#161B22] p-6 rounded-2xl shadow-md border border-[#1F2937] hover:border-[#58A6FF] transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className={`text-xl font-semibold mb-4 ${section.color}`}>
                  {section.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {section.items.map((skill, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-2 px-4 py-2 bg-[#0D1117] text-sm rounded-full shadow hover:bg-[#1c2129] transition"
                    >
                      <span className="text-xl">{skill.icon}</span>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SkillTree;
