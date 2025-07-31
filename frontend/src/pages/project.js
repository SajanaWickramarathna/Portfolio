import React from "react";

const projects = [
  {
    title: "E-commerce App",
    description: "Full-stack shopping site with cart, checkout, admin panel.",
    image: "/assets/ecommerce.png",
  },
  {
    title: "Portfolio Website",
    description: "Minimalist portfolio using React and Tailwind.",
    image: "/assets/portfolio.png",
  },
];

const Projects = () => (
  <section className="py-20 bg-gray-100 px-6" id="projects">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <div key={i} className="bg-white shadow rounded-lg overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-52 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
