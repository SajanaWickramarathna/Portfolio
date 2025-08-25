import React from "react";
import { motion } from "framer-motion";

import KASS from "../assets/KASS.png";
import KHB from "../assets/KHB.png";
import Cleanwave from "../assets/cleanWave.png";
import csDrop from "../assets/csDrop.png";
import Finora from "../assets/finora.png";
import Pcify from "../assets/pcify.png"
import Footer from "../components/footer";

const projects = [
  {
    title: "KHB Associates",
    description:
      "Website for a import and export company with modern design.",
    image: KHB,
    link: "/khb",
  },
  {
    title: "CleanWave Laundry",
    description:
      "Laundry management system with user-friendly interface and booking features.",
    image: Cleanwave,
    link: "/cleanwave",
  },
  {
    title: "KASSS Advertising",
    description:
      "Advertising agency website with modern design and service showcase.",
    image: KASS,
    link: "/kasss",
  },
  {
    title: "CS Drop",
    description:
      "Website for a online shopping platform with responsive design and product showcase.",
    image: csDrop,
    link: "/csdrop",
  },
  {
    title: "Finora App",
    description:
      "Mobile app for managing personal finances with budget tracking.",
    image: Finora,
    link: "/finora",
  },
  {
    title: "PCIFY",
    description:
      "Mobile app for PC selling and buying with user-friendly interface.",
    image: Pcify,
    link: "/pcify",
  },
  {
    title: "Earn With What You Know",
    description:
      "website for a knowledge-sharing platform where users can monetize their expertise.",
    image: "",
    link: "/ewwyk",
  },
  {
    title: "lost2Found",
    description:
      "Platform where users can find their lost items.",
    image: "",
    link: "/l2f",
  },
  {
    title: "SPARK",
    description:
      "A volunteer management system for NGOs to organize and track volunteer activities.",
    image: "",
    link: "/spark",
  },
];

const Projects = () => {
 

  return (
    <div className="relative min-h-screen font-inter overflow-hidden text-white">
      {/* Background */}
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
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1117]/90 to-[#161B22]/95" />

      {/* Content */}
      <section
        id="projects"
        className="relative z-10 flex flex-col items-center justify-center px-6 py-24"
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-10 mt-12 tracking-tight text-[#58A6FF]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group bg-[#161B22] rounded-2xl overflow-hidden shadow-md hover:shadow-[#58A6FF]/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5 flex flex-col justify-between h-[220px]">
                <h3 className="text-xl font-semibold text-[#58A6FF] mb-1">
                  {project.title}
                </h3>
                <p className="text-[#8B949E] text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  
                  rel="noopener noreferrer"
                  className="mt-auto mx-auto inline-flex items-center justify-center w-80 py-2 bg-gradient-to-r from-[#F78166] to-[#FF9E7D] hover:from-[#FF9E7D] hover:to-[#F78166] text-[#0D1117] text-[#0D1117] 
                  font-bold rounded-full transition duration-300 text-sm"

                >
                  
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      
        <Footer />
      
    </div>
  );
};

export default Projects;
