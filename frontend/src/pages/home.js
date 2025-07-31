import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import Footer from '../components/footer';
import back from '../assets/backgroundhero.jpg';
import saj from '../assets/saj.jpg';
import { useNavigate } from "react-router-dom";

const socialLinks = [
  { icon: <FaGithub size={22} />, url: "https://github.com/yourusername" },
  { icon: <FaLinkedin size={22} />, url: "https://linkedin.com/in/yourusername" },
  { icon: <FaTwitter size={22} />, url: "https://twitter.com/yourusername" },
  { icon: <FaInstagram size={22} />, url: "https://instagram.com/yourusername" },
  { icon: <FaWhatsapp size={22} />, url: "https://wa.me/yourphonenumber" },
  { icon: <FaEnvelope size={22} />, url: "mailto:your.email@example.com" }
];

const Hero = () => {
    const navigate = useNavigate();
  return (
    <div className="relative min-h-screen font-inter overflow-hidden text-white">
      {/* Background with animation */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${back}')` }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 30, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1117]/90 to-[#161B22]/95" />

      {/* Content */}
      <section className="relative z-10 flex items-center justify-center min-h-screen px-6 py-20 mt-10"  id="home">
        <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-14">
          {/* Left Section */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#58A6FF] mb-2 text-lg font-semibold tracking-wider uppercase">
              Welcome, I'm
            </p>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Sajana Wickramarathna
              <motion.span
                className="text-[#F78166]"
                animate={{ scale: [1, 1.1, 1], opacity: [1, 0.6, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                .
              </motion.span>
            </motion.h1>

            <h2 className="text-xl md:text-2xl font-medium text-[#8B949E] mb-6">
              Full Stack Developer & UI/UX Designer
            </h2>

            <p className="text-[#C9D1D9]/90 text-base md:text-lg leading-relaxed max-w-xl mb-8">
              I create immersive, performant, and intuitive digital experiences using modern tech stacks. I love turning ideas into functional, beautiful interfaces that users love.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <motion.a
                onClick={() => navigate("/contact")}
                className="bg-gradient-to-r from-[#F78166] to-[#FF9E7D] hover:from-[#FF9E7D] hover:to-[#F78166] text-[#0D1117] font-semibold px-6 py-3 rounded-full shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Connect
              </motion.a>
              <motion.a
                onClick={() => navigate("/projects")}
                className="border border-[#58A6FF] text-[#58A6FF] hover:bg-[#58A6FF]/10 font-medium px-6 py-3 rounded-full shadow-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See My Work
              </motion.a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8B949E] hover:text-[#58A6FF] transition-all duration-300"
                  whileHover={{ y: -3, scale: 1.2 }}
                  aria-label={`Social link`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-[#58A6FF] shadow-2xl overflow-hidden">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#58A6FF] to-[#F78166] filter blur-3xl opacity-70"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />
              <img
                src={saj}
                alt="Sajana Wickramarathna"
                className="w-full h-full object-cover rounded-full relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Hero;
