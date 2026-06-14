import React from "react";
import {
  SiReact
} from "react-icons/si";
import { motion } from "framer-motion";
import Footer from "../components/footer";

const techs = [
  { label: "React.js", icon: <SiReact className="text-blue-400" /> },

];

const Portfolio = () => {
  return (
    <div className="relative min-h-screen font-inter overflow-hidden text-white">
      {/* Background animation */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/backgroundhero.jpg')` }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 30, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1117]/90 to-[#161B22]/95" />

      {/* Main Content */}
      <section
        id="project-details"
        className="relative z-10 flex items-center justify-center min-h-screen px-4 md:px-6 py-24 mt-10"
      >
        <div className="w-full max-w-5xl mx-auto flex flex-col items-center relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full bg-[#161B22]/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-16 shadow-[0_0_50px_rgba(88,166,255,0.1)] relative overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#58A6FF]/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center">
              <motion.div 
                initial={{ scale: 0 }} 
                animate={{ scale: 1 }} 
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-20 h-20 bg-gradient-to-br from-[#58A6FF] to-[#3182CE] rounded-2xl mb-8 flex items-center justify-center shadow-lg shadow-[#58A6FF]/20"
              >
                 <span className="text-4xl font-extrabold text-white">#</span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#8B949E] mb-6 tracking-tight">
                Portfolio
              </h2>
              
              <p className="text-[#C9D1D9] text-base md:text-lg mb-12 max-w-3xl leading-relaxed font-light">
                Built a personal portfolio website using React to professionally present software engineering projects, technical skills, certifications, and career achievements through a responsive and user-friendly interface.
              </p>

              
              <div className="w-full max-w-3xl bg-black/20 rounded-2xl p-6 md:p-8 border border-white/5 mb-12 shadow-inner">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                   <span className="w-2 h-2 rounded-full bg-[#58A6FF]"></span> Key Highlights
                </h3>
                <ul className="text-[#8B949E] text-sm md:text-base space-y-4">
                  <li className="flex items-start gap-3 text-left"><span className="text-[#58A6FF] mt-1">✦</span><span>Responsive Web Design</span></li>
<li className="flex items-start gap-3 text-left"><span className="text-[#58A6FF] mt-1">✦</span><span>Project & Skill Showcase</span></li>
<li className="flex items-start gap-3 text-left"><span className="text-[#58A6FF] mt-1">✦</span><span>Interactive User Interface</span></li>

                </ul>
              </div>
        

              <div className="flex flex-col items-center w-full">
                <h3 className="text-sm font-bold text-[#8B949E] uppercase tracking-widest mb-6">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                  {techs.map((tech, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05, backgroundColor: "#21262D" }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="flex items-center gap-2 px-4 py-2 text-sm bg-[#0D1117]/80 backdrop-blur-md border border-white/10 rounded-full shadow-lg cursor-pointer text-gray-300 hover:text-white"
                    >
                      {tech.icon}
                      {tech.label}
                    </motion.span>
                  ))}
                </div>
              </div>

              <motion.a
                href="https://github.com/SajanaWickramarathna/Portfolio"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold text-white bg-gradient-to-r from-[#F78166] to-[#FF9E7D] rounded-full shadow-[0_0_20px_rgba(247,129,102,0.3)] hover:shadow-[0_0_30px_rgba(247,129,102,0.5)] transition-all duration-300"
              >
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                <span className="relative text-[#0D1117] text-lg">View Source Code</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
