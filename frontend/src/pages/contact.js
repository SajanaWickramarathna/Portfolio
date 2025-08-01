import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";
import back from "../assets/backgroundhero.jpg";

const Contact = () => (
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
      id="contact"
      className="relative z-10 flex items-center justify-center min-h-screen px-6 py-20 mt-10"
    >
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-[#58A6FF]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>

        <motion.p
          className="text-[#8B949E] mb-10 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </motion.p>

        <div className="space-y-4 text-left text-[#C9D1D9] text-base mb-10">
          <p className="flex items-center gap-3">
            <FaEnvelope className="text-[#58A6FF]" /> 
            <a href="mailto:sajanawickramarathhna143@gmail.com" className="hover:text-[#F78166] transition">
              sajanawickramarathhna143@gmail.com
            </a>
          </p>
          <p className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-[#58A6FF]" />
            Colombo, Sri Lanka
          </p>
          <p className="flex items-center gap-3">
            <FaPhone className="text-[#58A6FF]" />
            +94 76 123 4567
          </p>
          <div className="flex gap-6 mt-6">
            <a href="https://github.com/sajanaworks" target="_blank" rel="noopener noreferrer" className="text-[#58A6FF] hover:text-[#F78166] text-xl">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/sajanawickramarathna" target="_blank" rel="noopener noreferrer" className="text-[#58A6FF] hover:text-[#F78166] text-xl">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <motion.a
          href="mailto:sajanawickramarathhna143@gmail.com"
          className="bg-gradient-to-r from-[#F78166] to-[#FF9E7D] hover:from-[#FF9E7D] hover:to-[#F78166] text-[#0D1117] font-bold px-6 py-3 rounded-full shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Send a Message
        </motion.a>
      </div>
    </section>
  </div>
);

export default Contact;
