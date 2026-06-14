import React from "react";
import Home from "./home.js";
import About from "./about.js";
import Services from "./services.js";
import Projects from "./project.js";
import Skills from "./skills.js";
import Roadmap from "./roadmap.js";
import Articles from "./Artical.js";
import Contact from "./contact.js";
import Footer from "../components/footer.js";

import { motion } from "framer-motion";
import ParticleBackground from "../components/ParticleBackground.js";

const MainPage = () => {
  return (
    <div className="relative min-h-screen text-white font-inter">
      <ParticleBackground />

      {/* Content wrapper with z-index to appear above background */}
      <div className="relative z-10 flex flex-col gap-24 py-10">
      <Home />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Roadmap />
      <Articles />
      <Contact />
      </div>
      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
