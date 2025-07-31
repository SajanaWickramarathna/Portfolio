import React from "react";
import { motion } from "framer-motion";
import Footer from '../components/footer.js';
const Hero = () => (
    <div>
  <section className="h-screen flex items-center justify-center bg-gray-50 text-center" id="home">
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Sajana</h1>
      <p className="text-xl text-gray-700">Full Stack Developer & Designer</p>
    </motion.div>
  </section>
  <Footer />
  </div>
);

export default Hero;
