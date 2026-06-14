import React from "react";
import { motion } from "framer-motion";
import { Folder } from "lucide-react";
import Footer from "../components/footer";

const projects = [
  {
    title: "SL Accounting",
    description: "Full-stack MERN-based Learning Management System with course creation, lesson management, and student enrollment.",
    link: "/slaccounting",
  },
  {
    title: "HealthBridge",
    description: "Scalable telemedicine platform featuring online consultations, appointment management, and secure payments.",
    link: "/healthbridge",
  },
  {
    title: "Learn Bridge",
    description: "Full-stack learning management platform for virtual classes, knowledge resources, and educational content.",
    link: "/learnbridge",
  },
  {
    title: "Rural Link",
    description: "MERN-based delivery management platform for rural entrepreneurs with interactive maps and real-time tracking.",
    link: "/rurallink",
  },
  {
    title: "Kick Store",
    description: "Full-stack MERN e-commerce application enabling product browsing, ordering, and customer management.",
    link: "/kickstore",
  },
  {
    title: "SPARK",
    description: "System for managing volunteers, organizations, and events with role-based access and group chat.",
    link: "/spark",
  },
  {
    title: "Care Link",
    description: "Healthcare web application for managing appointments, patient records, and QR code report retrieval.",
    link: "/carelink",
  },
  {
    title: "KHB Associate",
    description: "Modern web application for a textile machinery sales company with order management and real-time updates.",
    link: "/khb",
  },
  {
    title: "Finora",
    description: "Android budgeting app to track income and expenses, manage budgets, and receive notifications.",
    link: "/finora",
  },
  {
    title: "PCIFY",
    description: "Android UI design for a PC components shopping app focused on a clean browsing experience.",
    link: "/pcify",
  },
  {
    title: "KASSS Advertising",
    description: "Advertising agency website showcasing marketing campaigns, client case studies, and testimonials.",
    link: "/kasss",
  },
  {
    title: "Clean Wave",
    description: "Java-based web application for managing laundry orders and invoices with real-time tracking.",
    link: "/cleanwave",
  },
  {
    title: "Portfolio",
    description: "Personal portfolio website using React to present software engineering projects and technical skills.",
    link: "/portfolio",
  }
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
              className="group flex flex-col bg-gradient-to-br from-[#161B22] to-[#0D1117] border border-[#30363D] rounded-2xl overflow-hidden shadow-lg hover:shadow-[#58A6FF]/20 hover:border-[#58A6FF]/50 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="p-8 flex flex-col flex-grow">
                <div className="w-14 h-14 rounded-full bg-[#58A6FF]/10 flex items-center justify-center mb-6 border border-[#58A6FF]/20 group-hover:bg-[#58A6FF]/20 transition-colors duration-300">
                  <Folder className="text-[#58A6FF] w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#58A6FF] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[#8B949E] text-base mb-8 line-clamp-4 leading-relaxed flex-grow">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  rel="noopener noreferrer"
                  className="mt-auto w-full inline-flex items-center justify-center py-3 bg-transparent border border-[#58A6FF]/30 hover:bg-[#58A6FF]/10 text-[#58A6FF] font-semibold rounded-xl transition duration-300 text-sm tracking-wide"
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
