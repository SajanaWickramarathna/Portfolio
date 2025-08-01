import React from "react";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
import khb from "../assets/saj.jpg"; // ✅ Replace with your actual path

const ProjectCard = () => {
  return (
    <section
      id="khb"
      className="bg-[#0D1117] text-[#C9D1D9] px-6 py-24 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto bg-[#161B22] rounded-2xl shadow-lg p-10 md:p-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#58A6FF] mb-4">
            KHB Associates
          </h2>
          <p className="text-[#8B949E] max-w-3xl mx-auto text-lg">
            KHB Associates is a custom corporate website focused on building trust through professional aesthetics and modern design. It includes sections for services, client testimonials, and a contact form.
          </p>
        </div>

        {/* Image and Tech Stack */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Image */}
          <div className="w-full md:w-2/3 rounded-xl overflow-hidden shadow-md">
            <img
              src={khb}
              alt="KHB Associates"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Tech Stack */}
          <div className="w-full md:w-1/3 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-[#C9D1D9] mb-4">
              Tech Stack:
            </h3>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <span className="bg-[#21262D] text-sm px-4 py-2 rounded-full flex items-center gap-2">
                <SiMongodb className="text-green-500" /> MongoDB
              </span>
              <span className="bg-[#21262D] text-sm px-4 py-2 rounded-full flex items-center gap-2">
                <SiExpress className="text-gray-300" /> Express.js
              </span>
              <span className="bg-[#21262D] text-sm px-4 py-2 rounded-full flex items-center gap-2">
                <SiReact className="text-blue-400" /> React
              </span>
              <span className="bg-[#21262D] text-sm px-4 py-2 rounded-full flex items-center gap-2">
                <SiNodedotjs className="text-green-400" /> Node.js
              </span>
              <span className="bg-[#21262D] text-sm px-4 py-2 rounded-full flex items-center gap-2">
                <SiTailwindcss className="text-teal-400" /> Tailwind CSS
              </span>
            </div>

            {/* Button */}
            <a
              href="https://github.com/your-link" // Replace this
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 px-6 py-3 rounded-full text-[#0D1117] bg-[#58A6FF] font-semibold hover:bg-[#1f6feb] transition"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
