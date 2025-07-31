import React from "react";
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaGithub } from "react-icons/fa";

const TechStack = () => (
  <section className="py-20 px-6 bg-white" id="tech">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>
      <div className="flex justify-center gap-8 text-5xl text-blue-500">
        <FaReact />
        <FaNodeJs />
        <FaHtml5 />
        <FaCss3Alt />
        <FaGithub />
      </div>
    </div>
  </section>
);

export default TechStack;
