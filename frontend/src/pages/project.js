import React from "react";
import { motion } from "framer-motion";
import back from "../assets/backgroundhero.jpg";
import pcify from "../Projects/pcify.js";

const projects = [
  {
    title: "E-commerce App",
    description:
      "Full-stack shopping site with cart, checkout, and admin panel.",
    image: back,
    link: "/pcify",
  },
  {
    title: "Portfolio Website",
    description: "Minimalist portfolio using React and Tailwind.",
    image:back, 
    link: "https://your-ecommerce-demo-link.com",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const Projects = () => (
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
      id="projects"
      className="relative z-10 flex items-center justify-center min-h-screen px-6 py-20 mt-10"
    >
      <div className="container mx-auto max-w-5xl text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-[#58A6FF]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="bg-[#161B22] rounded-2xl overflow-hidden shadow-md shadow-black/30 hover:shadow-[#58A6FF]/40 transition-all duration-300"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover object-center rounded-t-2xl"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#F78166] mb-2">
                  {project.title}
                </h3>
                <p className="text-[#8B949E] text-sm leading-relaxed">
                  {project.description}
                </p>
                <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-2 px-5 py-2 bg-[#58A6FF] hover:bg-[#1F6FEB] text-[#0D1117] font-medium rounded-full transition-all duration-300"
  >
    View Project
  </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Projects;
