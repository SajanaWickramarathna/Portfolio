import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Roadmap", id: "roadmap" },
    { name: "Articles", id: "articles" },
  ];

  const handleScrollTo = (id) => {
    setActiveSection(id);
    setIsMobileOpen(false);

    if (location.pathname !== "/") {
      // If we're on a project page, navigate to main page with hash
      navigate(`/#${id}`);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    } else {
      // If already on main page, just scroll smoothly
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-4 sm:top-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-7xl px-4 sm:px-8 py-3 sm:py-4 bg-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]">
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-3 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => handleScrollTo("home")}
        >
          <div className="p-[3px] rounded-full bg-gradient-to-br from-[#58A6FF] to-[#F78166]">
            <div className="bg-[#0D1117] p-[6px] rounded-full border border-[#30363D]">
              <img src={logo} alt="Logo" loading="lazy" className="w-10 h-10 rounded-full object-cover" />
            </div>
          </div>
          <span className="text-[#C9D1D9] font-bold tracking-wide text-lg hidden sm:block">
            Sajana.online
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-6">
          {navItems.map(({ name, id }) => (
            <button
              key={name}
              onClick={() => handleScrollTo(id)}
              className={`relative px-2 py-1 text-sm font-medium transition-all duration-300 ${
                activeSection === id
                  ? "text-[#58A6FF]"
                  : "text-[#C9D1D9] hover:text-[#8B949E]"
              }`}
            >
              <span className="relative">
                {name}
                {activeSection === id && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 h-[2px] w-full rounded bg-[#58A6FF]"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </span>
            </button>
          ))}
        </nav>

        {/* Contact Button */}
        <motion.button
          onClick={() => handleScrollTo("contact")}
          className="hidden lg:block bg-gradient-to-r from-[#F78166] to-[#FF9E7D] text-[#0D1117] px-5 py-2 rounded-full font-semibold text-sm shadow-lg hover:scale-105 hover:shadow-xl transition-all"
          whileTap={{ scale: 0.95 }}
        >
          Let’s Talk
        </motion.button>

        {/* Mobile Toggle */}
        <motion.button
          className="lg:hidden text-2xl text-[#58A6FF] p-2"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isMobileOpen}
          animate={{
            rotate: isMobileOpen ? 90 : 0,
            scale: isMobileOpen ? 1.1 : 1,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {isMobileOpen ? "✖" : "☰"}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="lg:hidden mt-4 px-4 py-6 bg-[#000000]/40 backdrop-blur-3xl border border-white/10 rounded-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] space-y-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {navItems.map(({ name, id }) => (
              <button
                key={name}
                onClick={() => handleScrollTo(id)}
                className={`block w-full text-left text-sm font-medium px-3 py-2 rounded-md transition-all ${
                  activeSection === id
                    ? "bg-white/10 text-white"
                    : "text-[#C9D1D9] hover:text-white"
                }`}
              >
                {name}
              </button>
            ))}
            <motion.button
              className="w-full bg-[#F78166] text-[#0D1117] py-2 mt-2 rounded-full font-semibold text-sm hover:bg-[#f7937d] transition-all"
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScrollTo("contact")}
            >
              Let’s Talk
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
