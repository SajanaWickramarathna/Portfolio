import React from "react";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
import Footer from "../components/footer";
import khb from "../assets/saj.jpg"; 

const ProjectHero = () => {
  return (
    <div className="relative min-h-screen font-inter overflow-hidden text-white">
      {/* Background animation */}
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

      {/* Content Section */}
      <section className="relative z-10 flex items-center justify-center min-h-screen px-6 py-20 mt-10">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-10 text-[#58A6FF]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            KHB Associates
          </motion.h2>

          <motion.p
            className="text-center text-lg md:text-xl text-[#C9D1D9] max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            KHB Associates is a custom corporate website focused on building trust through professional aesthetics and modern design. It includes sections for services, client testimonials, and a contact form.
          </motion.p>

          <div className="flex flex-col md:flex-row gap-10 items-center">
            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-full md:w-[55%] lg:w-[50%] xl:w-[45%] max-h-[300px] rounded-xl overflow-hidden shadow-md border border-[#21262D] transform scale-95"

            >
              <img
                src={khb}
                alt="KHB Associates"
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>

            {/* Tech Stack + Button */}
            <div className="w-full md:w-1/3 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-[#C9D1D9] mb-6">
                Tech Stack:
              </h3>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {[
                  { icon: <SiMongodb className="text-green-500" />, label: "MongoDB" },
                  { icon: <SiExpress className="text-gray-300" />, label: "Express.js" },
                  { icon: <SiReact className="text-blue-400" />, label: "React" },
                  { icon: <SiNodedotjs className="text-green-400" />, label: "Node.js" },
                  { icon: <SiTailwindcss className="text-teal-400" />, label: "Tailwind CSS" },
                ].map((tech, i) => (
                  <span
                    key={i}
                    className="bg-[#21262D] hover:shadow-[#58A6FF]/30 shadow-sm text-sm px-4 py-2 rounded-full flex items-center gap-2 transition duration-300"
                  >
                    {tech.icon} {tech.label}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="https://github.com/your-link" // Replace with actual repo
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-10 px-6 py-3 rounded-full text-[#0D1117] bg-[#58A6FF] font-semibold hover:bg-[#1f6feb] transition-all duration-300"
              >
                Source Code
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectHero;
