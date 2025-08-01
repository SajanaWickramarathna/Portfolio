import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaNodeJs, FaDocker, FaPython,FaJava, 
} from "react-icons/fa";
import {
  SiPhp, SiMongodb, SiExpress, SiGraphql,
  SiNextdotjs, SiTailwindcss, SiMysql, SiC , SiKotlin, SiFlutter,SiPostgresql ,
} from "react-icons/si";
import { MdOutlineDesignServices } from "react-icons/md";

import Footer from '../components/footer';

const roadmap = [
  {
    year: "2020",
    frontend: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
    ],
    backend: [
      { name: "SQL", icon: <SiMysql /> },
      { name: "PHP", icon: <SiPhp /> },
    ],
  },
  {
    year: "2021",
    backend: [{ name: "Python", icon: <FaPython /> }],
  },
  {
    year: "2022",
    frontend: [{ name: "JavaScript", icon: <FaJs /> }],
  },
  {
    year: "2023",
    backend: [
      { name: "java", icon: <FaJava /> },
      { name: "C", icon: <SiC  /> },
    ],
  },
  {
    year: "2024",
    frontend: [
      { name: "ReactJS", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
    backend: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Kotlin", icon: <SiKotlin /> },
    ],
  },
  {
    year: "2025",
    nextTarget: {
      frontend: [
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "UI/UX Design", icon: <MdOutlineDesignServices /> },
      ],
      backend: [
        { name: "Flutter", icon: <SiFlutter  /> },
        { name: "React Native", icon: <FaReact /> },
        { name: "OOSQL", icon: <SiPostgresql  /> }
      ],
    },
  },
];

const Roadmap = () => {
  return (
    <div className="relative min-h-screen font-inter overflow-hidden text-white">
      {/* Background with animation */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/backgroundhero.jpg')` }}
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

      {/* Content */}
      <section
        id="roadmap"
        className="relative z-10 flex items-center justify-center min-h-screen px-6 py-20 mt-10"
      >
        <div className="container mx-auto max-w-5xl text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-10 mt-8 tracking-tight text-[#58A6FF]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Road Map
          </motion.h2>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-[#58A6FF] via-transparent to-[#58A6FF] transform -translate-x-1/2 z-0" />

            {roadmap.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  className={`mb-16 w-full flex ${isLeft ? "justify-start" : "justify-end"} relative z-10`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-full sm:w-[48%] p-6 rounded-xl shadow-lg bg-[#161B22] border border-[#30363d] text-left">
                    <h3 className="text-xl font-semibold text-[#58A6FF] mb-4">
                      {item.year}
                    </h3>

                    {item.frontend && (
                      <div className="mb-4">
                        <p className="text-sm mb-2 text-[#8B949E]">Frontend</p>
                        <div className="flex flex-wrap gap-3">
                          {item.frontend.map((tech, i) => (
                            <span
                              key={i}
                              className="flex items-center gap-2 px-4 py-2 bg-[#0D1117] text-sm rounded-full shadow hover:bg-[#1c2129]"
                            >
                              {tech.icon} {tech.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.backend && (
                      <div className="mb-4">
                        <p className="text-sm mb-2 text-[#8B949E]">Backend</p>
                        <div className="flex flex-wrap gap-3">
                          {item.backend.map((tech, i) => (
                            <span
                              key={i}
                              className="flex items-center gap-2 px-4 py-2 bg-[#0D1117] text-sm rounded-full shadow hover:bg-[#1c2129]"
                            >
                              {tech.icon} {tech.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.nextTarget && (
                      <div className="mt-6 p-4 border border-[#58A6FF] rounded-xl bg-[#0D1117]">
                        <p className="text-sm font-semibold text-[#8B949E] mb-4">
                          🚀 Next Target
                        </p>

                        <div className="mb-4">
                          <p className="text-sm mb-2 text-[#8B949E]">Frontend</p>
                          <div className="flex flex-wrap gap-3">
                            {item.nextTarget.frontend.map((tech, i) => (
                              <span
                                key={i}
                                className="flex items-center gap-2 px-4 py-2 bg-[#161B22] text-sm rounded-full hover:bg-[#1c2129]"
                              >
                                {tech.icon} {tech.name}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <p className="text-sm mb-2 text-[#8B949E]">Backend</p>
                          <div className="flex flex-wrap gap-3">
                            {item.nextTarget.backend.map((tech, i) => (
                              <span
                                key={i}
                                className="flex items-center gap-2 px-4 py-2 bg-[#161B22] text-sm rounded-full hover:bg-[#1c2129]"
                              >
                                {tech.icon} {tech.name}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Roadmap;
