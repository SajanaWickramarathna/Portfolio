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
import Articles from './pages/Artical.js';
import ScrollToTop from './components/ScrollToTop .js';

// Project Pages
import Slaccounting from './Projects/slaccounting.js';
import Healthbridge from './Projects/healthbridge.js';
import Learnbridge from './Projects/learnbridge.js';
import Rurallink from './Projects/RuralLink.js';
import Kickstore from './Projects/kickstore.js';
import Spark from './Projects/SPARK.js';
import Carelink from './Projects/carelink.js';
import Khb from './Projects/khb.js';
import Finora from './Projects/finora.js';
import Pcify from './Projects/pcify.js';
import Kasss from './Projects/KASSS.js';
import Cleanwave from './Projects/cleanwave.js';
import Portfolio from './Projects/portfolio.js';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/articles" element={<Articles />} />
        
        <Route path="/slaccounting" element={<Slaccounting />} />
        <Route path="/healthbridge" element={<Healthbridge />} />
        <Route path="/learnbridge" element={<Learnbridge />} />
        <Route path="/rurallink" element={<Rurallink />} />
        <Route path="/kickstore" element={<Kickstore />} />
        <Route path="/spark" element={<Spark />} />
        <Route path="/carelink" element={<Carelink />} />
        <Route path="/khb" element={<Khb />} />
        <Route path="/finora" element={<Finora />} />
        <Route path="/pcify" element={<Pcify />} />
        <Route path="/kasss" element={<Kasss />} />
        <Route path="/cleanwave" element={<Cleanwave />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
