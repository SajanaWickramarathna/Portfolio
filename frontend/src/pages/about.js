import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Footer from '../components/footer';
const Cv = "/CV.pdf";

const About = () => {
  const navigate = useNavigate();

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
        id="about"
        className="relative z-10 flex items-center justify-center min-h-screen px-6 py-20 mt-10"
      >
        <div className="container mx-auto max-w-5xl text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-[#58A6FF]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-[#C9D1D9]/90 leading-relaxed max-w-3xl mx-auto mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Hi, I'm <span className="text-[#F78166] font-semibold">Sajana Wickramarathna</span>, 
            an undergraduate BSc IT student specializing in Software Engineering at SLIIT, Sri Lanka. 
            I'm a Full Stack Developer and UI/UX enthusiast, building performant and engaging applications 
            with the <span className="text-[#58A6FF] font-medium">MERN stack</span> and other modern technologies. 
            I also work with <span className="text-[#58A6FF] font-medium">JavaScript, TailwindCSS, PHP, Python, MySQL, Oracle, Kotlin, Java</span>, and enjoy designing intuitive interfaces in <span className="text-[#58A6FF] font-medium">Figma</span>. 
            I love collaborating in teams, tackling challenging projects, and continuously growing as a tech professional.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="mt-8 flex justify-center gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => navigate("/projects")}
              className="bg-gradient-to-r from-[#F78166] to-[#FF9E7D] hover:from-[#FF9E7D] hover:to-[#F78166] text-[#0D1117] font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300"
            >
              See My Work
            </button>
            <a
              href={Cv}
              className="border border-[#58A6FF] text-[#58A6FF] hover:bg-[#58A6FF]/10 px-6 py-3 rounded-full transition duration-300"
              download
            >
              Download CV
            </a>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
