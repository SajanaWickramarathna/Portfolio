import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { User, Code2, GraduationCap, MapPin, Briefcase, Download } from "lucide-react";
import Footer from '../components/footer';
const Cv = "/CV.pdf";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen font-inter overflow-hidden text-white">
      {/* Background with animation */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/backgroundhero.jpg')` }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1117]/90 to-[#161B22]/95" />

      {/* Main Content */}
      <section
        id="about"
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 md:px-6 py-24 mt-10"
      >
        <div className="w-full max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#8B949E] tracking-tight">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#58A6FF] to-transparent mx-auto mt-6 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Left Column - Profile Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-5 w-full bg-[#161B22]/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:border-[#58A6FF]/30 transition-colors duration-500 flex flex-col justify-center shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#58A6FF]/10 rounded-full blur-[80px] pointer-events-none transition-transform duration-700 group-hover:scale-150" />
              
              <div className="relative z-10">
                <div className="w-32 h-32 bg-gradient-to-br from-[#1F242C] to-[#0D1117] rounded-full border border-white/10 mx-auto mb-8 flex items-center justify-center shadow-lg relative overflow-hidden group-hover:border-[#58A6FF]/50 transition-colors duration-500">
                   <User className="w-14 h-14 text-[#8B949E] group-hover:text-[#58A6FF] transition-colors duration-500" />
                </div>
                
                <h3 className="text-3xl font-bold text-center text-white mb-2 tracking-tight">Sajana Wickramarathna</h3>
                <p className="text-[#58A6FF] text-center font-medium mb-10 text-lg">Software Engineering Undergraduate</p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-5 text-[#C9D1D9] bg-black/20 p-5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                    <div className="p-2 bg-[#58A6FF]/10 rounded-xl">
                      <GraduationCap className="w-6 h-6 text-[#58A6FF]" />
                    </div>
                    <span className="text-sm font-medium">BSc IT (Spec. Software Engineering) at SLIIT</span>
                  </div>
                  <div className="flex items-center gap-5 text-[#C9D1D9] bg-black/20 p-5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                    <div className="p-2 bg-[#F78166]/10 rounded-xl">
                      <Code2 className="w-6 h-6 text-[#F78166]" />
                    </div>
                    <span className="text-sm font-medium">Full Stack Web & Mobile Developer</span>
                  </div>
                  <div className="flex items-center gap-5 text-[#C9D1D9] bg-black/20 p-5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                    <div className="p-2 bg-[#3FB950]/10 rounded-xl">
                      <MapPin className="w-6 h-6 text-[#3FB950]" />
                    </div>
                    <span className="text-sm font-medium">Sri Lanka</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Bio & CTA */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="lg:col-span-7 flex flex-col justify-between"
            >
              <div className="bg-[#0D1117]/60 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-12 mb-8 shadow-inner relative overflow-hidden flex-grow">
                <div className="absolute top-[-50px] left-[-50px] w-48 h-48 bg-white/5 rounded-full blur-[60px] pointer-events-none" />
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-4">
                  <div className="p-3 bg-[#58A6FF]/10 rounded-2xl">
                    <Briefcase className="text-[#58A6FF] w-7 h-7" />
                  </div>
                  My Journey
                </h3>
                
                <div className="space-y-6 text-[#8B949E] text-base md:text-lg leading-relaxed font-light">
                  <p>
                    Hi! I'm a passionate developer who thrives on creating <span className="text-white font-medium">performant, engaging applications</span>. My journey in tech started with a profound curiosity about how things work under the hood, which naturally led me to software engineering.
                  </p>
                  <p>
                    Today, I specialize in the <span className="text-[#58A6FF] font-medium">MERN stack</span> and have hands-on experience building full-stack web platforms, Android apps, and scalable telemedicine solutions. 
                  </p>
                  <p>
                    Whether I'm crafting an intuitive UI in <span className="text-white font-medium">Figma</span> or architecting a robust backend in <span className="text-[#3FB950] font-medium">Node.js</span>, I bring a detail-oriented and collaborative approach to every project. I love tackling challenging projects and continuously growing as a tech professional.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-5">
                <button
                  onClick={() => navigate("/projects")}
                  className="flex-1 flex items-center justify-center gap-3 bg-gradient-to-r from-[#58A6FF] to-[#3182CE] hover:from-[#3182CE] hover:to-[#58A6FF] text-white font-bold px-8 py-5 rounded-2xl shadow-[0_0_20px_rgba(88,166,255,0.3)] hover:shadow-[0_0_30px_rgba(88,166,255,0.5)] transition-all duration-300 transform hover:-translate-y-1 text-lg"
                >
                  <Code2 className="w-6 h-6" /> View My Work
                </button>
                <a
                  href={Cv}
                  className="flex-1 flex items-center justify-center gap-3 bg-[#161B22] border border-[#58A6FF]/30 text-[#58A6FF] hover:bg-[#58A6FF]/10 hover:border-[#58A6FF] font-bold px-8 py-5 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 text-lg shadow-lg"
                  download
                >
                  <Download className="w-6 h-6" /> Download CV
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
