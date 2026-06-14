import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaNodeJs, FaPython, FaJava, FaAws
} from "react-icons/fa";
import {
  SiPhp, SiMongodb, SiExpress, 
  SiNextdotjs, SiTailwindcss, SiMysql, SiC, SiKotlin, SiFlutter, SiPostgresql,
  SiAstro, SiDocker, SiKubernetes, SiLaravel, SiGraphql, SiSvelte
} from "react-icons/si";
import { MdOutlineDesignServices } from "react-icons/md";


const roadmap = [
  {
    year: "2020",
    frontend: [
      { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" /> },
    ],
    backend: [
      { name: "SQL", icon: <SiMysql className="text-[#4479A1]" /> },
      { name: "PHP", icon: <SiPhp className="text-[#777BB4]" /> },
    ],
  },
  {
    year: "2021",
    backend: [{ name: "Python", icon: <FaPython className="text-[#3776AB]" /> }],
  },
  {
    year: "2022",
    frontend: [{ name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> }],
  },
  {
    year: "2023",
    backend: [
      { name: "Java", icon: <FaJava className="text-[#007396]" /> },
      { name: "C", icon: <SiC className="text-[#A8B9CC]" /> },
    ],
  },
  {
    year: "2024",
    frontend: [
      { name: "ReactJS", icon: <FaReact className="text-[#61DAFB]" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    ],
    backend: [
      { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress className="text-white" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "Kotlin", icon: <SiKotlin className="text-[#7F52FF]" /> },
    ],
  },
  {
    year: "2025",
    frontend: [
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "UI/UX", icon: <MdOutlineDesignServices className="text-[#FF7B72]" /> },
      { name: "Astro", icon: <SiAstro className="text-[#FF5D01]" /> },
    ],
    backend: [
      { name: "Laravel", icon: <SiLaravel className="text-[#FF2D20]" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
      { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
      { name: "Kubernetes", icon: <SiKubernetes className="text-[#326CE5]" /> },
    ],
  },
  {
    year: "2026",
    nextTarget: {
      frontend: [
        { name: "SvelteKit", icon: <SiSvelte className="text-[#FF3E00]" /> },
        { name: "Advanced 3D UI", icon: <MdOutlineDesignServices className="text-[#E34F26]" /> },
        { name: "React Native", icon: <FaReact className="text-[#61DAFB]" /> },
        { name: "Flutter", icon: <SiFlutter className="text-[#02569B]" /> },
      ],
      backend: [
        { name: "AWS Architecture", icon: <FaAws className="text-[#FF9900]" /> },
        { name: "GraphQL APIs", icon: <SiGraphql className="text-[#E10098]" /> }
      ],
    },
  },
];

const Roadmap = () => {
  return (
    <div className="relative  font-inter overflow-hidden text-white">
      
      

      {/* Content */}
      <section
        id="roadmap"
        className="relative z-10 scroll-mt-28 md:scroll-mt-32 flex flex-col items-center  px-4 md:px-6 py-16 md:py-24 mt-6 md:mt-10"
      >
        <div className="w-full max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#8B949E] tracking-tight">
              My Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#58A6FF] to-transparent mx-auto mt-6 rounded-full" />
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Glowing Neon Timeline Line */}
            <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-[#58A6FF] via-[#A371F7] to-[#F78166] transform -translate-x-1/2 z-0 rounded-full shadow-[0_0_15px_rgba(88,166,255,0.5)] hidden md:block" />

            {roadmap.map((item, index) => {
              const isLeft = index % 2 === 0;
              const isFuture = !!item.nextTarget;

              return (
                <motion.div
                  key={index}
                  className={`mb-16 w-full flex flex-col md:flex-row ${isLeft ? "md:justify-start" : "md:justify-end"} items-center relative z-10`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {/* Timeline Node / Dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white/[0.02] backdrop-blur-sm border-4 border-[#58A6FF] items-center justify-center z-20 shadow-[0_0_20px_rgba(88,166,255,0.6)]">
                    <div className={`w-2 h-2 rounded-full ${isFuture ? 'bg-[#F78166] animate-pulse' : 'bg-[#58A6FF]'}`} />
                  </div>

                  <div className={`w-full md:w-[45%] ${isFuture ? 'bg-gradient-to-r from-[#F78166]/10 to-[#FF9E7D]/10 border-[#F78166]/40' : 'bg-white/[0.02] backdrop-blur-sm border-white/10'} backdrop-blur-sm p-8 rounded-3xl border shadow-xl hover:shadow-[0_0_30px_rgba(88,166,255,0.15)] transition-all duration-500 relative group overflow-hidden`}>
                    
                    {/* Hover Glow */}
                    <div className="absolute -right-20 -top-20 w-48 h-48 bg-[#58A6FF]/20 opacity-0 group-hover:opacity-100 rounded-full blur-[60px] transition-opacity duration-700 pointer-events-none" />

                    <h3 className={`text-3xl font-bold mb-6 flex items-center gap-3 ${isFuture ? 'text-[#F78166]' : 'text-[#58A6FF]'}`}>
                      {item.year}
                      {isFuture && <span className="text-sm px-3 py-1 bg-[#F78166]/20 rounded-full text-[#F78166] border border-[#F78166]/30">Future Target</span>}
                    </h3>

                    {item.frontend && (
                      <div className="mb-6 relative z-10">
                        <p className="text-sm font-medium tracking-wider uppercase text-[#8B949E] mb-3">Frontend</p>
                        <div className="flex flex-wrap gap-2">
                          {item.frontend.map((tech, i) => (
                            <span
                              key={i}
                              className="flex items-center gap-2 px-3 py-1.5 bg-white/[0.02] backdrop-blur-sm border border-white/5 text-sm rounded-full shadow hover:border-white/20 transition-all text-[#C9D1D9]"
                            >
                              {tech.icon} {tech.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.backend && (
                      <div className="mb-2 relative z-10">
                        <p className="text-sm font-medium tracking-wider uppercase text-[#8B949E] mb-3">Backend & DB</p>
                        <div className="flex flex-wrap gap-2">
                          {item.backend.map((tech, i) => (
                            <span
                              key={i}
                              className="flex items-center gap-2 px-3 py-1.5 bg-white/[0.02] backdrop-blur-sm border border-white/5 text-sm rounded-full shadow hover:border-white/20 transition-all text-[#C9D1D9]"
                            >
                              {tech.icon} {tech.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.nextTarget && (
                      <div className="relative z-10">
                        <div className="mb-6">
                          <p className="text-sm font-medium tracking-wider uppercase text-[#F78166] mb-3">Frontend Goals</p>
                          <div className="flex flex-wrap gap-2">
                            {item.nextTarget.frontend.map((tech, i) => (
                              <span
                                key={i}
                                className="flex items-center gap-2 px-3 py-1.5 bg-[#F78166]/10 border border-[#F78166]/20 text-sm rounded-full shadow text-white hover:bg-[#F78166]/20 transition-all"
                              >
                                {tech.icon} {tech.name}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <p className="text-sm font-medium tracking-wider uppercase text-[#F78166] mb-3">Backend Goals</p>
                          <div className="flex flex-wrap gap-2">
                            {item.nextTarget.backend.map((tech, i) => (
                              <span
                                key={i}
                                className="flex items-center gap-2 px-3 py-1.5 bg-[#F78166]/10 border border-[#F78166]/20 text-sm rounded-full shadow text-white hover:bg-[#F78166]/20 transition-all"
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

      
    </div>
  );
};

export default Roadmap;