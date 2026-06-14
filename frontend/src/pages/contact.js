import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => (
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

    <section
      id="contact"
      className="relative z-10 flex items-center justify-center min-h-screen px-4 md:px-6 py-24 mt-10"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-24">
        
        {/* Left Column: Messaging */}
        <motion.div 
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-[#8B949E]">
            Let's build <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#58A6FF] to-[#A371F7]">something amazing</span>
          </h2>
          
          <p className="text-[#8B949E] text-lg lg:text-xl leading-relaxed mb-10 max-w-lg mx-auto md:mx-0">
            I'm currently available for freelance work and full-time opportunities. If you have a project that needs some creative magic, I'd love to hear about it.
          </p>

          <motion.a
            href="mailto:sajanawickramarathhna143@gmail.com"
            className="inline-block bg-gradient-to-r from-[#58A6FF] to-[#A371F7] text-white font-bold px-8 py-4 rounded-full shadow-[0_0_20px_rgba(88,166,255,0.4)] hover:shadow-[0_0_40px_rgba(163,113,247,0.6)] transform hover:-translate-y-1 transition-all duration-300"
            whileTap={{ scale: 0.95 }}
          >
            Send Me a Message
          </motion.a>
        </motion.div>

        {/* Right Column: Contact Cards */}
        <motion.div 
          className="flex-1 w-full max-w-md grid grid-cols-1 gap-4"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Email Card */}
          <a href="mailto:sajanawickramarathhna143@gmail.com" className="group block">
            <div className="bg-[#161B22]/60 backdrop-blur-xl border border-white/10 p-6 rounded-2xl flex items-center gap-6 hover:bg-[#58A6FF]/10 hover:border-[#58A6FF]/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(88,166,255,0.1)]">
              <div className="w-12 h-12 rounded-full bg-[#0D1117] border border-white/10 flex items-center justify-center text-[#58A6FF] group-hover:bg-[#58A6FF] group-hover:text-white transition-colors duration-300">
                <FaEnvelope size={20} />
              </div>
              <div>
                <p className="text-sm text-[#8B949E] font-medium mb-1 uppercase tracking-wider">Email</p>
                <p className="text-white font-medium group-hover:text-[#58A6FF] transition-colors line-clamp-1">sajanawickramarathhna143@gmail.com</p>
              </div>
            </div>
          </a>

          {/* Location Card */}
          <div className="group block cursor-default">
            <div className="bg-[#161B22]/60 backdrop-blur-xl border border-white/10 p-6 rounded-2xl flex items-center gap-6 hover:bg-[#A371F7]/10 hover:border-[#A371F7]/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(163,113,247,0.1)]">
              <div className="w-12 h-12 rounded-full bg-[#0D1117] border border-white/10 flex items-center justify-center text-[#A371F7] group-hover:bg-[#A371F7] group-hover:text-white transition-colors duration-300">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <p className="text-sm text-[#8B949E] font-medium mb-1 uppercase tracking-wider">Location</p>
                <p className="text-white font-medium">Colombo, Sri Lanka</p>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <a href="tel:+94701422030" className="group block">
            <div className="bg-[#161B22]/60 backdrop-blur-xl border border-white/10 p-6 rounded-2xl flex items-center gap-6 hover:bg-[#3FB950]/10 hover:border-[#3FB950]/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(63,185,80,0.1)]">
              <div className="w-12 h-12 rounded-full bg-[#0D1117] border border-white/10 flex items-center justify-center text-[#3FB950] group-hover:bg-[#3FB950] group-hover:text-white transition-colors duration-300">
                <FaPhone size={20} />
              </div>
              <div>
                <p className="text-sm text-[#8B949E] font-medium mb-1 uppercase tracking-wider">Phone</p>
                <p className="text-white font-medium group-hover:text-[#3FB950] transition-colors">+94 70 142 2030</p>
              </div>
            </div>
          </a>

          {/* Social Row */}
          <div className="flex gap-4 mt-2">
            <a href="https://github.com/SajanaWickramarathna" target="_blank" rel="noopener noreferrer" className="flex-1 group">
              <div className="bg-[#161B22]/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
                <FaGithub className="text-white text-xl" />
                <span className="text-white font-medium">GitHub</span>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/sajana-wickramarathna-a4b4062b6/" target="_blank" rel="noopener noreferrer" className="flex-1 group">
              <div className="bg-[#161B22]/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-[#0077B5]/20 hover:border-[#0077B5]/50 transition-all duration-300 transform hover:-translate-y-1">
                <FaLinkedin className="text-[#0077B5] text-xl group-hover:text-white transition-colors" />
                <span className="text-white font-medium">LinkedIn</span>
              </div>
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  </div>
);

export default Contact;
