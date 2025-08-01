import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";


import Header from './components/header.js';
import Footer from './components/footer.js';
import Home from './pages/home.js';
import About from './pages/about.js';
import Services from './pages/services.js';
import Contact from './pages/contact.js';
import Roadmap from './pages/roadmap.js';
import Skills from './pages/skills.js';
import Projects from './pages/project.js';
//import KHB from './projects/KHB.js';
//import AVRweb from './projects/AVRweb.js';
//import Avrmobileapp from './projects/Avrmobileapp.js';
//import Kasss from './projects/kasss.js';
//import Walletpop from './projects/walletpop.js';
//import Cleanwave from './projects/cleanwave.js';

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
        {/*
        <Route path="/KHB" element={<KHB />} />
        <Route path="/AVRweb" element={<AVRweb />} />
        <Route path="/Avrmobileapp" element={<Avrmobileapp />} />
        <Route path="/Kasss" element={<Kasss />} />
        <Route path="/Walletpop" element={<Walletpop />} />
        <Route path="/Cleanwave" element={<Cleanwave />} />
        <Route path="/kasss" element={<Kasss />} />
        <Route path="/walletpop" element={<Walletpop />} />
        <Route path="/cleanwave" element={<Cleanwave />} />*/}

      </Routes>
      
    </div>
  );
}

export default App;