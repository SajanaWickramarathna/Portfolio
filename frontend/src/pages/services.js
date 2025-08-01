import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaServer,
  FaPaintBrush,
  FaTools,
  FaMobileAlt,
} from "react-icons/fa";
import back from "../assets/backgroundhero.jpg";
import Footer from "../components/footer";

const services = [
  {
    title: "Frontend Development",
    description:
      "Crafting responsive, performant, and interactive user interfaces using modern frameworks like React.js and Tailwind CSS.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Backend Development",
    description:
      "Building robust backend systems with Node.js, Express, and MongoDB to power your applications.",
    icon: <FaServer />,
  },
  {
    title: "UI/UX Design",
    description:
      "Designing user-centered interfaces and experiences that are intuitive, consistent, and aesthetically pleasing.",
    icon: <FaPaintBrush />,
  },
  {
    title: "Web Maintenance",
    description:
      "Offering ongoing website updates, performance optimization, and security enhancements.",
    icon: <FaTools />,
  },
  {
    title: "Mobile App Development",
    description:
      "Creating mobile-friendly experiences using responsive design principles and cross-platform solutions.",
    icon: <FaMobileAlt />,
  },
];

const Services = () => {
  return (
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
        id="services"
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
            What I Offer
          </motion.h2>

          <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-[#161B22] p-6 rounded-2xl shadow-md hover:shadow-xl border border-[#1F2937] hover:border-[#58A6FF] transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl text-[#58A6FF] mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-[#8B949E] text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
