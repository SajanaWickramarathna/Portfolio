import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0D1117]/70 backdrop-blur-md border-t border-[#30363D] text-[#C9D1D9] mt-16 px-6 py-8 transition-all duration-300">
      <div className="max-w-5xl mx-auto h-12 flex flex-col items-center space-y-5">
        {/* Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/SajanaWickramarathna"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8B949E] hover:text-[#58A6FF] transition-colors duration-300"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/sajana-wickramarathna-a4b4062b6/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8B949E] hover:text-[#58A6FF] transition-colors duration-300"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="mailto:sajanawickramarathna143@gmail.com"
            className="text-[#8B949E] hover:text-[#58A6FF] transition-colors duration-300"
          >
            <FaEnvelope size={22} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-[#8B949E] tracking-wide">
          &copy; {new Date().getFullYear()} Sajana Wickramarathna. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
