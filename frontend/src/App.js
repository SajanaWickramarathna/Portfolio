
import './App.css';
import { Route, Routes } from "react-router-dom";


import Header from './components/header.js';

import Home from './pages/home.js';
import About from './pages/about.js';
import Services from './pages/services.js';
import Contact from './pages/contact.js';
import Roadmap from './pages/roadmap.js';
import Skills from './pages/skills.js';
import Projects from './pages/project.js';
import Pcify from './Projects/pcify.js';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/pcify" element={<Pcify />} />

      </Routes>
      
    </div>
  );
}

export default App;