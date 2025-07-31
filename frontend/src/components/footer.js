import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white/30 backdrop-blur-lg text-black dark:text-white dark:bg-gray-800 mt-12 shadow-inner px-6 py-8 transition-all duration-300">
      <div className="max-w-4xl mx-auto h-10 flex flex-col items-center space-y-4">
        <div className="flex space-x-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-green-500 transition"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          &copy; {new Date().getFullYear()} Sajana Wickramarathna. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
