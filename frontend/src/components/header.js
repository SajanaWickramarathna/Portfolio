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
    return path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);
  };

  const hoverEffect = {
    scale: 1.1,
    textShadow: "0 0 8px #58A6FF",
    transition: { type: "spring", stiffness: 300 },
  };

  return (
    <header className="fixed top-4 left-4 right-4 z-50 bg-[#0D1117]/80 backdrop-blur-lg border border-[#30363D] rounded-3xl shadow-xl px-6 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate("/")}
        >
          <div className="bg-[#0D1117]/80 border border-[#30363D] p-2 rounded-full shadow-lg">
            <img
              src={logo}
              alt="Logo"
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>
          <span className="hidden md:block font-semibold text-[#C9D1D9] tracking-wide">
            Sajana
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 items-center text-sm font-medium">
          {menuItems.map(({ name, path }) => (
            <motion.div key={name} whileHover={hoverEffect}>
              <NavLink
                to={path}
                className={`transition capitalize ${
                  isActive(path)
                    ? "text-[#58A6FF] font-semibold"
                    : "text-[#C9D1D9] hover:text-[#8B949E]"
                }`}
              >
                {name}
              </NavLink>
            </motion.div>
          ))}
          <motion.button
            onClick={() => navigate("/contact")}
            className="ml-4 bg-[#F78166] text-[#0D1117] px-6 py-2 rounded-full font-semibold hover:bg-[#f7937d] transition-all shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px #F78166",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.button>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-3xl text-[#58A6FF]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
          animate={{
            rotate: isMobileMenuOpen ? 90 : 0,
            scale: isMobileMenuOpen ? 1.2 : 1,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {isMobileMenuOpen ? "✖" : "☰"}
        </motion.button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden mt-4 p-4 rounded-2xl bg-[#161B22] border border-[#30363D] shadow-lg space-y-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {menuItems.map(({ name, path }) => (
              <motion.div key={name} whileHover={hoverEffect}>
                <NavLink
                  to={path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-2 py-2 rounded-md capitalize transition-all ${
                    isActive(path)
                      ? "bg-[#21262D] text-[#58A6FF] font-semibold"
                      : "text-[#C9D1D9] hover:text-[#8B949E]"
                  }`}
                >
                  {name}
                </NavLink>
              </motion.div>
            ))}

            <motion.button
              className="w-full bg-[#F78166] text-[#0D1117] py-2 rounded-full font-semibold hover:bg-[#f7937d] transition-all"
              whileHover={{ scale: 1.05 }}
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
