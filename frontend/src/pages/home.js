import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaWhatsapp,
  FaFacebook,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import saj from "../assets/saj.png";

/* ─── Social links ─────────────────────────────────────────────────── */
const socialLinks = [
  {
    icon: <FaGithub size={20} />,
    url: "https://github.com/SajanaWickramarathna",
    label: "GitHub",
    color: "#e6edf3",
  },
  {
    icon: <FaLinkedin size={20} />,
    url: "https://www.linkedin.com/in/sajana-wickramarathna-a4b4062b6/",
    label: "LinkedIn",
    color: "#0A66C2",
  },
  {
    icon: <FaXTwitter size={20} />,
    url: "https://x.com/SajanaAnupama",
    label: "Twitter",
    color: "#e6edf3",
  },
  {
    icon: <FaInstagram size={20} />,
    url: "https://www.instagram.com/saajjj.__/",
    label: "Instagram",
    color: "#E1306C",
  },
  {
    icon: <FaWhatsapp size={20} />,
    url: "https://wa.me/+94701422030",
    label: "WhatsApp",
    color: "#25D366",
  },
  {
    icon: <FaEnvelope size={20} />,
    url: "mailto:sajanawickramarathna143@gmail.com",
    label: "Email",
    color: "#F78166",
  },
  {
    icon: <FaFacebook size={20} />,
    url: "https://www.facebook.com/share/1Ha2ghwJsY/?mibextid=wwXIfr",
    label: "Facebook",
    color: "#1877F2",
  },
];

/* ─── Stats ─────────────────────────────────────────────────────────── */
const stats = [
  { value: 15, label: "Projects Built", suffix: "+" },
  { value: 3, label: "Years Learning", suffix: "+" },
  { value: 10, label: "Technologies", suffix: "+" },
  { value: 800, label: "Commits", suffix: "+" },
];

/* ─── Tech stack chips ──────────────────────────────────────────────── */
const techStack = [
  "React", "Node.js", "Java", "Kotlin", "MongoDB", "MySQL",
  "Tailwind CSS", "Express", "Firebase", "Figma", "JavaScript", "TypeScript", "Laravel"
];

/* ─── Typewriter hook ───────────────────────────────────────────────── */
const roles = [
  "Full Stack Developer",
  "UI/UX Designer",
  "Open Source Enthusiast",
  "Problem Solver",
];

function useTypewriter(texts, speed = 80, pause = 1800) {
  const [displayed, setDisplayed] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[roleIdx];
    let timeout;
    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setRoleIdx((r) => (r + 1) % texts.length);
    }
    setDisplayed(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, roleIdx, texts, speed, pause]);

  return displayed;
}

/* ─── Counter component ─────────────────────────────────────────────── */
function AnimatedCounter({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   HERO COMPONENT
═══════════════════════════════════════════════════════════════════════ */
const Hero = () => {
  const role = useTypewriter(roles);
  const [tooltip, setTooltip] = useState(null);

  return (
     <div className="relative  font-inter overflow-hidden text-white">

      

      

      {/* ── Main section ─────────────────────────────────────────────── */}
      <section
        className="relative z-10 scroll-mt-20 md:scroll-mt-24 flex items-center justify-center  px-6 pt-36 md:pt-40 pb-16"
        id="home"
      >
        <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* ── LEFT ───────────────────────────────────────────────── */}
          <motion.div
            className="lg:w-1/2 flex flex-col items-start"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              className="flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-[#58A6FF]/30 bg-[#58A6FF]/5"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-2 h-2 rounded-full bg-[#3fb950] animate-pulse" />
              <span className="text-[#58A6FF] text-xs font-semibold tracking-widest uppercase">
                Available for Work
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
            >
              Hi, I'm{" "}
              <span
                className="relative inline-block"
                style={{
                  background:
                    "linear-gradient(135deg, #58A6FF 0%, #a370f7 50%, #F78166 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Sajana
              </span>
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              className="h-10 flex items-center mb-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#8B949E]">
                {role}
                <span className="text-[#58A6FF] animate-pulse ml-0.5">|</span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-[#8B949E] text-base md:text-lg leading-relaxed max-w-xl mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              I craft{" "}
              <span className="text-[#C9D1D9] font-medium">
                immersive digital experiences
              </span>{" "}
              that live at the intersection of design and engineering. Turning
              bold ideas into elegant, high-performance products is what I love
              most.
            </motion.p>

            {/* Tech stack chips */}
            <motion.div
              className="flex flex-wrap gap-2 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
            >
              {techStack.map((tech, i) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium rounded-full border border-white/10 bg-white/[0.02] text-[#8B949E] hover:border-[#58A6FF]/50 hover:text-[#58A6FF] transition-all duration-300 cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.05 }}
                  whileHover={{ y: -2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mb-9"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
            >
              <motion.button
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="relative group px-7 py-3 rounded-full font-semibold text-sm overflow-hidden shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, #F78166 0%, #FF9E7D 100%)",
                  color: "#0D1117",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Let's Connect →</span>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>

              <motion.button
                onClick={() => {
                  const el = document.getElementById("projects");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-7 py-3 rounded-full font-semibold text-sm border border-[#58A6FF]/50 text-[#58A6FF] hover:bg-[#58A6FF]/10 transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              className="flex gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {socialLinks.map((social, index) => (
                <div key={index} className="relative group">
                  <motion.a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-9 h-9 rounded-full border border-white/10 bg-white/[0.02] text-[#8B949E] hover:border-transparent transition-all duration-300 shadow-[0_4px_16px_0_rgba(0,0,0,0.2)]"
                    style={{
                      "--hover-color": social.color,
                    }}
                    whileHover={{
                      y: -3,
                      scale: 1.15,
                      color: social.color,
                      borderColor: social.color + "60",
                      backgroundColor: social.color + "15",
                    }}
                    onMouseEnter={() => setTooltip(index)}
                    onMouseLeave={() => setTooltip(null)}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                  <AnimatePresence>
                    {tooltip === index && (
                      <motion.div
                        className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md text-[10px] font-semibold whitespace-nowrap pointer-events-none z-50"
                        style={{
                          background: social.color + "22",
                          color: social.color,
                          border: `1px solid ${social.color}44`,
                        }}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.15 }}
                      >
                        {social.label}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-[#58A6FF] shadow-2xl overflow-hidden">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#58A6FF] to-[#F78166] filter blur-3xl opacity-70"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />
              <img
                src={saj}
                alt="Sajana Wickramarathna"
                loading="lazy"
                className="w-full h-full object-cover rounded-full relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </section>

      

      {/* ── Stats section ────────────────────────────────────────────── */}
      <motion.section
        className="relative z-10 px-6 pb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.8 }}
      >
        <div className="container mx-auto max-w-5xl">
          {/* Divider */}
          <div className="flex items-center gap-4 mb-10">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#30363D] to-transparent" />
            <span className="text-[#8B949E] text-xs tracking-widest uppercase font-semibold">
              By the Numbers
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#30363D] to-transparent" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map(({ value, label, suffix }, i) => (
              <motion.div
                key={label}
                className="relative group rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] px-5 py-6 text-center overflow-hidden cursor-default"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.1 }}
                whileHover={{ borderColor: "#58A6FF50", scale: 1.02 }}
              >
                {/* Corner glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "radial-gradient(circle at 50% 0%, rgba(88,166,255,0.08) 0%, transparent 70%)" }}
                />
                <div
                  className="text-3xl font-black mb-1"
                  style={{
                    background: "linear-gradient(135deg, #58A6FF, #a370f7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  <AnimatedCounter value={value} suffix={suffix} />
                </div>
                <div className="text-[#8B949E] text-xs font-medium tracking-wide">
                  {label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      
    </div>
  );
};

export default Hero;
