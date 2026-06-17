import './App.css';
import { Route, Routes } from "react-router-dom";

import Header from './components/header.js';

import ScrollToTop from './components/ScrollToTop .js';

// Project Pages
import Slaccounting from './Projects/slaccounting.js';
import Healthbridge from './Projects/healthbridge.js';
import Learnbridge from './Projects/learnbridge.js';
import Rurallink from './Projects/rurallink.js';
import Kickstore from './Projects/kickstore.js';
import Spark from './Projects/spark.js';
import Carelink from './Projects/carelink.js';
import Khb from './Projects/khb.js';
import Finora from './Projects/finora.js';
import Pcify from './Projects/pcify.js';
import Kasss from './Projects/kasss.js';
import Cleanwave from './Projects/cleanwave.js';
import Portfolio from './Projects/portfolio.js';
import PowerTap from './Projects/powertap.js';

import MainPage from './pages/MainPage.js';
import ParticleBackground from './components/ParticleBackground.js';

function App() {
  return (
    <div className="App relative min-h-screen text-white font-inter">
      <ParticleBackground />
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        

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
        <Route path="/powertap" element={<PowerTap />} />
      </Routes>
    </div>
  );
}

export default App;
