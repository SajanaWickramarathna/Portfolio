import React from "react";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";
import { motion } from "framer-motion";
import Footer from "../components/footer";
//import Spark from "../assets/spark.png";


const techs = [
  { label: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { label: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { label: "React", icon: <SiReact className="text-blue-400" /> },
  { label: "Node.js", icon: <SiNodedotjs className="text-green-400" /> },
  { label: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { label: "Vite", icon: <SiVite className="text-purple-400" /> },
];

const CleanWaveSys = () => {
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
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1117]/90 to-[#161B22]/95" />

      {/* Main Content */}
      <section
        id="CleanWave"
        className="relative z-10 flex items-center justify-center min-h-screen px-6 py-20 mt-10"
      >
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#58A6FF] mb-3">
              Care Link LK
            </h2>
            <p className="text-[#C9D1D9] text-sm md:text-base mb-4 max-w-md mx-auto md:mx-0">
          Care Link LK is a JavaScript-based web app that helps clinics, caregivers,
           and patients manage healthcare tasks in Sri Lanka. It supports appointment 
           scheduling, patient records, role-based access, notifications, and caregiver–patient
            messaging, all in a responsive interface. The project is almost fully JavaScript, 
            making it easy to extend with local services and multilingual support.
            </p>

            <ul className="text-[#8B949E] text-sm mb-4 list-disc list-inside space-y-1 max-w-md mx-auto md:mx-0">
                <li>Role-Based Access Control: Different access levels for patients, caregivers, and admins.</li>
                <li>Appointment Scheduling: Book, view, and manage medical appointments.</li>
                <li>Patient Records: Secure storage and retrieval of patient health information.</li>
                <li>Notifications: Email and SMS reminders for appointments and updates.</li>
                <li>QR code for login and retrieval of patient history</li>
            </ul>

            <h3 className="text-base font-semibold text-white mb-2">
              Tech Stack:
            </h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8 mt-4">
              {techs.map((tech, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.1, backgroundColor: "#21262D" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center gap-1 px-3 py-1 text-xs bg-[#161B22] border border-white/10 rounded-full shadow cursor-pointer"
                >
                  {tech.icon}
                  {tech.label}
                </motion.span>
              ))}
            </div>

            <motion.a
              href="https://github.com/Seneth-Jayashan/Spark"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-[#F78166] to-[#FF9E7D] hover:from-[#FF9E7D] hover:to-[#F78166] text-[#0D1117] font-bold px-6 py-3 rounded-full shadow-md"
            >
              View Source Code
            </motion.a>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              //src={Spark}
              alt="Care-Link-LK"
              className="w-full max-w-xl h-3/4 rounded-2xl shadow-lg border border-white/10 object-cover h-[250px]"
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CleanWaveSys;
