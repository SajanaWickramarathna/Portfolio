import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Roadmap", path: "/roadmap" },
  ];

  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-7xl px-8 py-4 bg-[#0D1117]/70 backdrop-blur-lg rounded-2xl border border-[#30363D] shadow-xl">
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-3 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate("/")}
        >
          <div className="p-[3px] rounded-full bg-gradient-to-br from-[#58A6FF] to-[#F78166]">
            <div className="bg-[#0D1117] p-[6px] rounded-full border border-[#30363D]">
              <img src={logo} alt="Logo" className="w-10 h-10 rounded-full object-cover" />
            </div>
          </div>
          <span className="text-[#C9D1D9] font-bold tracking-wide text-lg hidden sm:block">
            Sajana.dev
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {navItems.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) =>
                `relative px-2 py-1 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-[#58A6FF]"
                    : "text-[#C9D1D9] hover:text-[#8B949E]"
                }`
              }
            >
              {({ isActive }) => (
                <span className="relative">
                  {name}
                  {isActive && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 -bottom-1 h-[2px] w-full rounded bg-[#58A6FF]"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Contact Button */}
        <motion.button
          onClick={() => navigate("/contact")}
          className="hidden md:block bg-gradient-to-r from-[#F78166] to-[#FF9E7D] text-[#0D1117] px-5 py-2 rounded-full font-semibold text-sm shadow-lg hover:scale-105 hover:shadow-xl transition-all"
          whileTap={{ scale: 0.95 }}
        >
          Let’s Talk
        </motion.button>

        {/* Mobile Toggle */}
        <motion.button
          className="md:hidden text-2xl text-[#58A6FF]"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle Menu"
          animate={{
            rotate: isMobileOpen ? 90 : 0,
            scale: isMobileOpen ? 1.2 : 1,
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
            className="md:hidden mt-4 px-4 py-6 bg-[#161B22] border border-[#30363D] rounded-xl shadow-xl space-y-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {navItems.map(({ name, path }) => (
              <NavLink
                key={name}
                to={path}
                onClick={() => setIsMobileOpen(false)}
                className={({ isActive }) =>
                  `block text-sm font-medium px-3 py-2 rounded-md transition-all ${
                    isActive
                      ? "bg-[#21262D] text-[#58A6FF]"
                      : "text-[#C9D1D9] hover:text-[#8B949E]"
                  }`
                }
              >
                {name}
              </NavLink>
            ))}
            <motion.button
              className="w-full bg-[#F78166] text-[#0D1117] py-2 mt-2 rounded-full font-semibold text-sm hover:bg-[#f7937d] transition-all"
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setIsMobileOpen(false);
                navigate("/contact");
              }}
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
