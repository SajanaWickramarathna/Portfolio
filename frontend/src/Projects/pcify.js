import React from "react";
import {
  SiKotlin,
  SiAndroid
} from "react-icons/si";
import { motion } from "framer-motion";
import Footer from "../components/footer";

const techs = [
  { label: "Kotlin", icon: <SiKotlin className="text-purple-500" /> },
  { label: "XML", icon: <SiAndroid className="text-green-500" /> },

];

const Pcify = () => {
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
                PCIFY
              </h2>
              
              <p className="text-[#C9D1D9] text-base md:text-lg mb-12 max-w-3xl leading-relaxed font-light">
                Android UI design for a PC components shopping app, focused on a clean, intuitive browsing and product selection experience.
              </p>

              

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
                href="https://github.com/SajanaWickramarathna/PCIFY"
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

export default Pcify;
