import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaPhp, FaJs, FaJava, FaReact, FaNodeJs, FaPython,
} from "react-icons/fa";
import {
  SiTailwindcss, SiMongodb, SiMysql, SiExpress, SiFigma, SiKotlin,
} from "react-icons/si";


const skills = [
  {
    category: "Frontend",
    glow: "from-[#58A6FF]/20 to-[#3182CE]/20",
    border: "group-hover:border-[#58A6FF]/50",
    text: "text-[#58A6FF]",
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
    glow: "from-[#3FB950]/20 to-[#2EA043]/20",
    border: "group-hover:border-[#3FB950]/50",
    text: "text-[#3FB950]",
    items: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "PHP", icon: <FaPhp /> },
      { name: "Python", icon: <FaPython /> },
    ],
  },
  {
    category: "Database",
    glow: "from-[#E3B341]/20 to-[#D29922]/20",
    border: "group-hover:border-[#E3B341]/50",
    text: "text-[#E3B341]",
    items: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
  },
  {
    category: "Mobile",
    glow: "from-[#A371F7]/20 to-[#8957E5]/20",
    border: "group-hover:border-[#A371F7]/50",
    text: "text-[#A371F7]",
    items: [{ name: "Kotlin", icon: <SiKotlin /> }],
  },
  {
    category: "Other Tools",
    glow: "from-[#F78166]/20 to-[#D73A49]/20",
    border: "group-hover:border-[#F78166]/50",
    text: "text-[#F78166]",
    items: [
      { name: "Figma", icon: <SiFigma /> },
      { name: "Java", icon: <FaJava /> },
    ],
  },
];

const SkillTree = () => {
  return (
    <div className="relative  font-inter overflow-hidden text-white">
      

      

      {/* Content */}
      <section
        id="skills"
        className="relative z-10 scroll-mt-28 md:scroll-mt-32 flex flex-col items-center justify-center  px-4 md:px-6 py-16 md:py-24 mt-6 md:mt-10"
      >
        <div className="w-full max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#8B949E] tracking-tight">
              Skill Tree
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#58A6FF] to-transparent mx-auto mt-6 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((section, index) => (
              <motion.div
                key={index}
                className={`group relative bg-white/[0.02] backdrop-blur-sm p-8 rounded-3xl border border-white/10 transition-all duration-500 hover:shadow-2xl ${section.border} overflow-hidden`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Glowing Background Blob */}
                <div className={`absolute -right-20 -top-20 w-48 h-48 bg-gradient-to-br ${section.glow} opacity-0 group-hover:opacity-100 rounded-full blur-[60px] transition-opacity duration-700 pointer-events-none`} />

                <div className="relative z-10">
                  <h3 className={`text-2xl font-bold mb-6 tracking-wide ${section.text}`}>
                    {section.category}
                  </h3>
                  
                  <div className="flex flex-wrap gap-3">
                    {section.items.map((skill, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.02] backdrop-blur-sm border border-white/5 text-sm rounded-full shadow-lg hover:border-white/20 transition-all duration-300"
                      >
                        <span className={`text-lg ${section.text}`}>{skill.icon}</span>
                        <span className="text-[#C9D1D9] font-medium">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default SkillTree;
