import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Download } from "lucide-react";
import { SiElectron, SiReact, SiTypescript, SiNodedotjs, SiExpress, SiFirebase } from "react-icons/si";
import Footer from "../components/footer";
import { FaWindows, FaAndroid } from "react-icons/fa";

const PowerTap = () => {
  return (
    <div className="relative min-h-screen font-inter overflow-hidden text-white">
      {/* Main Content */}
      <section
        id="project-details"
        className="relative z-10 flex flex-col justify-center min-h-screen px-4 md:px-6 py-24 mt-10"
      >
        <div className="w-full max-w-6xl mx-auto mb-8 flex justify-start">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.02] backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all text-[#C9D1D9] hover:text-white font-medium text-sm group shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]"
          >
            <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
        </div>
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column - Overview Bento */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 bg-white/[0.02] backdrop-blur-sm border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:border-white/20 transition-all duration-500 shadow-lg hover:shadow-2xl flex flex-col"
          >
            <div className="absolute -left-20 -top-20 w-64 h-64 bg-gradient-to-br from-[#E3B341] to-[#D29922] opacity-10 group-hover:opacity-20 rounded-full blur-[80px] pointer-events-none transition-transform duration-700 group-hover:scale-150" />
            
            <div className="relative z-10 flex flex-col h-full">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#8B949E] mb-6 tracking-tight">
                Power Tap
              </h2>
              
              <p className="text-[#C9D1D9] text-base md:text-lg mb-10 leading-relaxed font-light">
                Power Tap is a convenient application that allows you to remotely shut down your PC using your mobile device. Download the PC client and the Android app from the links below to get started.
              </p>

              
              <div className="w-full bg-white/[0.01] rounded-2xl p-6 md:p-8 border border-white/5 mt-auto shadow-inner hover:border-white/10 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                   <span className="p-2 bg-[#E3B341]/10 rounded-lg"><span className="w-2 h-2 rounded-full bg-[#E3B341] block"></span></span> Download Apps
                </h3>
                <div className="flex flex-col gap-4">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a
                    href="https://limewire.com/d/iFVqr#gegMAEhBte"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-white/[0.05] border border-white/10 hover:border-[#E3B341]/50 hover:bg-white/[0.1] p-4 rounded-xl transition-all"
                  >
                    <FaWindows className="text-[#0078D6] text-2xl" />
                    <div className="flex flex-col">
                      <span className="text-white font-medium">Download for Windows PC</span>
                      <span className="text-sm text-[#8B949E]">Download EXE from Google Drive</span>
                    </div>
                    <Download className="ml-auto text-[#8B949E]" size={20} />
                  </a>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a
                    href="https://limewire.com/d/twiZm#KUfWNPUokv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-white/[0.05] border border-white/10 hover:border-[#E3B341]/50 hover:bg-white/[0.1] p-4 rounded-xl transition-all"
                  >
                    <FaAndroid className="text-[#3DDC84] text-2xl" />
                    <div className="flex flex-col">
                      <span className="text-white font-medium">Download for Android</span>
                      <span className="text-sm text-[#8B949E]">Download APK from Google Drive</span>
                    </div>
                    <Download className="ml-auto text-[#8B949E]" size={20} />
                  </a>
                </div>
              </div>

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
            <div className="bg-white/[0.02] backdrop-blur-sm border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:border-white/20 transition-all duration-500 shadow-lg flex-grow">
               <div className="absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-bl from-[#A371F7] to-[#8957E5] opacity-10 group-hover:opacity-20 rounded-full blur-[80px] pointer-events-none transition-transform duration-700 group-hover:scale-150" />
               <div className="relative z-10">
                 <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-4">
                    <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#A371F7] to-[#8957E5] flex items-center justify-center text-white font-bold shadow-lg shadow-[#A371F7]/30">⚙️</span>
                    Technologies Used
                 </h3>
                 <div className="flex flex-wrap gap-3">
                   <motion.span
                       whileHover={{ scale: 1.05 }}
                       className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-white/[0.01] backdrop-blur-md border border-white/5 rounded-full shadow cursor-default text-[#C9D1D9] hover:text-white hover:border-white/20 hover:bg-white/[0.05] transition-all"
                     >
                       <SiElectron className="text-[#47848F]" /> Electron
                   </motion.span>
                   <motion.span
                       whileHover={{ scale: 1.05 }}
                       className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-white/[0.01] backdrop-blur-md border border-white/5 rounded-full shadow cursor-default text-[#C9D1D9] hover:text-white hover:border-white/20 hover:bg-white/[0.05] transition-all"
                     >
                       <SiReact className="text-[#61DAFB]" /> React Native
                   </motion.span>
                   <motion.span
                       whileHover={{ scale: 1.05 }}
                       className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-white/[0.01] backdrop-blur-md border border-white/5 rounded-full shadow cursor-default text-[#C9D1D9] hover:text-white hover:border-white/20 hover:bg-white/[0.05] transition-all"
                     >
                       <SiTypescript className="text-[#3178C6]" /> TypeScript
                   </motion.span>
                   <motion.span
                       whileHover={{ scale: 1.05 }}
                       className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-white/[0.01] backdrop-blur-md border border-white/5 rounded-full shadow cursor-default text-[#C9D1D9] hover:text-white hover:border-white/20 hover:bg-white/[0.05] transition-all"
                     >
                       <SiNodedotjs className="text-[#339933]" /> Node.js
                   </motion.span>
                   <motion.span
                       whileHover={{ scale: 1.05 }}
                       className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-white/[0.01] backdrop-blur-md border border-white/5 rounded-full shadow cursor-default text-[#C9D1D9] hover:text-white hover:border-white/20 hover:bg-white/[0.05] transition-all"
                     >
                       <SiExpress className="text-white" /> Express
                   </motion.span>
                   <motion.span
                       whileHover={{ scale: 1.05 }}
                       className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-white/[0.01] backdrop-blur-md border border-white/5 rounded-full shadow cursor-default text-[#C9D1D9] hover:text-white hover:border-white/20 hover:bg-white/[0.05] transition-all"
                     >
                       <SiFirebase className="text-[#FFCA28]" /> Firebase
                   </motion.span>
                   <motion.span
                       whileHover={{ scale: 1.05 }}
                       className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-white/[0.01] backdrop-blur-md border border-white/5 rounded-full shadow cursor-default text-[#C9D1D9] hover:text-white hover:border-white/20 hover:bg-white/[0.05] transition-all"
                     >
                       <FaWindows className="text-[#0078D6]" /> Windows App
                   </motion.span>
                   <motion.span
                       whileHover={{ scale: 1.05 }}
                       className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-white/[0.01] backdrop-blur-md border border-white/5 rounded-full shadow cursor-default text-[#C9D1D9] hover:text-white hover:border-white/20 hover:bg-white/[0.05] transition-all"
                     >
                       <FaAndroid className="text-[#3DDC84]" /> Android App
                   </motion.span>
                 </div>
               </div>
            </div>

            {/* CTA Bento */}
            <div className="bg-white/[0.02] backdrop-blur-sm border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] rounded-3xl p-8 relative overflow-hidden group hover:border-white/20 transition-all duration-500 shadow-lg">
               <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-gradient-to-tr from-[#3FB950] to-[#2EA043] opacity-10 group-hover:opacity-20 rounded-full blur-[80px] pointer-events-none transition-transform duration-700 group-hover:scale-150" />
               <div className="relative z-10 flex flex-col items-center">
                 <h3 className="text-xl font-bold text-white mb-6 text-center tracking-wide">Get Power Tap Now</h3>
                 <p className="text-center text-[#8B949E] mb-6">Click the links on the left to download the PC and Android applications via Google Drive.</p>
                 <a
                    href="https://github.com/SajanaWickramarathna/PC-Shut-Down"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#E3B341] to-[#D29922] hover:from-[#D29922] hover:to-[#E3B341] text-white font-bold px-8 py-5 rounded-2xl shadow-[0_0_20px_rgba(227,179,65,0.3)] hover:shadow-[0_0_30px_rgba(227,179,65,0.5)] transition-all duration-300 transform hover:-translate-y-1 text-lg"
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

export default PowerTap;
