import React from "react";
import {
  SiHtml5,
  SiMysql,
  SiCss3,
  SiPhp
} from "react-icons/si";
import { motion } from "framer-motion";
import Footer from "../components/footer";

const techs = [
  { label: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
  { label: "CSS", icon: <SiCss3 className="text-blue-500" /> },
  { label: "PHP", icon: <SiPhp className="text-purple-400" /> },
  { label: "MySQL", icon: <SiMysql className="text-blue-600" /> },

];

const Kasss = () => {
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
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column - Overview Bento */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 bg-[#161B22]/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:border-white/20 transition-all duration-500 shadow-lg hover:shadow-2xl flex flex-col"
          >
            <div className="absolute -left-20 -top-20 w-64 h-64 bg-gradient-to-br from-[#58A6FF] to-[#3182CE] opacity-10 group-hover:opacity-20 rounded-full blur-[80px] pointer-events-none transition-transform duration-700 group-hover:scale-150" />
            
            <div className="relative z-10 flex flex-col h-full">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#8B949E] mb-6 tracking-tight">
                KASSS Advertising
              </h2>
              
              <p className="text-[#C9D1D9] text-base md:text-lg mb-10 leading-relaxed font-light">
                KASSS is an advertising agency website that showcases marketing campaigns, client case studies, and testimonials through a responsive and visually engaging interface.
              </p>

              
            </div>
          </motion.div>

          {/* Right Column - Tech & Links Bento */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            {/* Tech Stack Bento */}
            <div className="bg-[#161B22]/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:border-white/20 transition-all duration-500 shadow-lg flex-grow">
               <div className="absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-bl from-[#A371F7] to-[#8957E5] opacity-10 group-hover:opacity-20 rounded-full blur-[80px] pointer-events-none transition-transform duration-700 group-hover:scale-150" />
               <div className="relative z-10">
                 <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-4">
                    <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#A371F7] to-[#8957E5] flex items-center justify-center text-white font-bold shadow-lg shadow-[#A371F7]/30">⚙️</span>
                    Technologies Used
                 </h3>
                 <div className="flex flex-wrap gap-3">
                   {techs.map((tech, i) => (
                     <motion.span
                       key={i}
                       whileHover={{ scale: 1.05 }}
                       className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-[#0D1117]/80 backdrop-blur-md border border-white/5 rounded-full shadow cursor-default text-[#C9D1D9] hover:text-white hover:border-white/20 hover:bg-[#0D1117] transition-all"
                     >
                       {tech.icon}
                       {tech.label}
                     </motion.span>
                   ))}
                 </div>
               </div>
            </div>

            {/* CTA Bento */}
            <div className="bg-[#161B22]/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-white/20 transition-all duration-500 shadow-lg">
               <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-gradient-to-tr from-[#3FB950] to-[#2EA043] opacity-10 group-hover:opacity-20 rounded-full blur-[80px] pointer-events-none transition-transform duration-700 group-hover:scale-150" />
               <div className="relative z-10 flex flex-col items-center">
                 <h3 className="text-xl font-bold text-white mb-6 text-center tracking-wide">Ready to see it in action?</h3>
                 <a
                    href="https://github.com/Seneth-Jayashan/KASSS-Advertising-Agency"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#3FB950] to-[#2EA043] hover:from-[#2EA043] hover:to-[#3FB950] text-white font-bold px-8 py-5 rounded-2xl shadow-[0_0_20px_rgba(63,185,80,0.3)] hover:shadow-[0_0_30px_rgba(63,185,80,0.5)] transition-all duration-300 transform hover:-translate-y-1 text-lg"
                 >
                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                <span className="relative text-[#0D1117] text-lg">View Source Code</span>
                 </a>
               </div>
            </div>
          </motion.div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Kasss;
