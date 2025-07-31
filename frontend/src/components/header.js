import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { name: "home", path: "/" },
    { name: "about", path: "/about" },
    { name: "services", path: "/services" },
    { name: "projects", path: "/projects" },
    { name: "skills", path: "/skills" },
    { name: "roadmap", path: "/roadmap" },
  ];

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: { opacity: 0, y: -20, transition: { when: "afterChildren" } },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -10 },
  };

  const hoverEffect = {
    scale: 1.1,
    textShadow: "0 0 8px #6366F1", // Indigo from palette
    transition: { type: "spring", stiffness: 300 },
  };

  const buttonHoverEffect = {
    scale: 1.05,
    boxShadow: "0 0 12px #10B981", // Emerald from palette
    transition: { type: "spring", stiffness: 300 },
  };

  return (
    <header className="flex items-center justify-between fixed top-4 left-4 right-4 z-50 p-4 transition-all duration-300 bg-white/30 text-gray-900 rounded-3xl shadow-xl backdrop-blur-lg">
      <div className="flex items-center justify-center p-2 bg-white/40 backdrop-blur-lg rounded-full shadow-md">
        <img src={logo} alt="Logo" className="w-13 h-12 object-cover rounded-full" />
      </div>

      <nav className="hidden md:flex gap-6 font-medium">
        {menuItems.map(({ name, path }) => (
          <motion.div key={name} whileHover={hoverEffect}>
            <NavLink
              to={path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block py-2 lg:py-0 transition ${
                isActive(path)
                  ? "text-indigo-600 font-semibold"
                  : "hover:text-indigo-400"
              }`}
            >
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </NavLink>
          </motion.div>
        ))}
      </nav>

      <motion.div className="hidden md:block">
        <motion.button
          className="bg-emerald-500 text-white font-semibold rounded-full px-8 py-2 shadow-md hover:bg-emerald-400 transition"
          whileHover={buttonHoverEffect}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setIsMobileMenuOpen(false);
            navigate("/contact");
          }}
        >
          Contact
        </motion.button>
      </motion.div>

      <motion.button
        className="md:hidden text-3xl text-indigo-600 focus:outline-none"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
        initial={false}
        animate={{
          rotate: isMobileMenuOpen ? 90 : 0,
          scale: isMobileMenuOpen ? 1.2 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {isMobileMenuOpen ? "✖" : "☰"}
      </motion.button>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="absolute top-full left-0 w-full bg-indigo-900 border-t border-indigo-700 shadow-md flex flex-col items-start px-6 py-4 space-y-3 z-50 md:hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropdownVariants}
          >
            {menuItems.map(({ name, path }) => (
              <motion.div
                key={name}
                variants={linkVariants}
                whileHover={hoverEffect}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink
                  to={path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block w-full text-white transition px-2 py-1 rounded ${
                    isActive(path)
                      ? "bg-indigo-700 font-semibold"
                      : "hover:text-indigo-400"
                  }`}
                >
                  {name.charAt(0).toUpperCase() + name.slice(1)}
                </NavLink>
              </motion.div>
            ))}

            <motion.button
              className="bg-emerald-500 text-white font-semibold rounded-full px-4 py-2 shadow-md hover:bg-emerald-400 transition mt-2 w-full"
              variants={linkVariants}
              whileHover={buttonHoverEffect}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setIsMobileMenuOpen(false);
                navigate("/contact");
              }}
            >
              Contact
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
