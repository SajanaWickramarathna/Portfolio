import React from "react";
import { motion } from "framer-motion";
import { Code, Server, PenTool, Wrench, Smartphone } from "lucide-react";

const services = [
  {
    title: "Frontend Development",
    description:
      "Crafting responsive, performant, and interactive user interfaces using modern frameworks like React.js and Tailwind CSS.",
    icon: <Code className="w-8 h-8" />,
    color: "from-[#58A6FF] to-[#3182CE]"
  },
  {
    title: "Backend Development",
    description:
      "Building robust backend systems and RESTful APIs with Node.js, Express, and MongoDB to power scalable applications.",
    icon: <Server className="w-8 h-8" />,
    color: "from-[#3FB950] to-[#2EA043]"
  },
  {
    title: "UI/UX Design",
    description:
      "Designing user-centered interfaces and experiences that are intuitive, consistent, and highly aesthetically pleasing.",
    icon: <PenTool className="w-8 h-8" />,
    color: "from-[#A371F7] to-[#8957E5]"
  },
  {
    title: "Web Maintenance",
    description:
      "Offering ongoing website updates, performance optimization, refactoring, and critical security enhancements.",
    icon: <Wrench className="w-8 h-8" />,
    color: "from-[#F78166] to-[#D73A49]"
  },
  {
    title: "Mobile App Development",
    description:
      "Creating seamless, native-feeling mobile experiences using responsive design principles and modern frameworks.",
    icon: <Smartphone className="w-8 h-8" />,
    color: "from-[#D2A8FF] to-[#A371F7]"
  },
];

const Services = () => {
  return (
    <div className="relative  font-inter overflow-hidden text-white">
      
      

      {/* Main Content */}
      <section
        id="services"
        className="relative z-10 scroll-mt-28 md:scroll-mt-32 flex flex-col items-center justify-center  px-4 md:px-6 py-16 md:py-24 mt-6 md:mt-10"
      >
        <div className="w-full max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#8B949E] tracking-tight">
              What I Offer
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#58A6FF] to-transparent mx-auto mt-6 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white/[0.02] backdrop-blur-sm border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] p-8 md:p-10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 shadow-lg hover:shadow-2xl"
              >
                {/* Glowing background blob */}
                <div className={`absolute -right-20 -top-20 w-56 h-56 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-15 rounded-full blur-[60px] transition-opacity duration-700 pointer-events-none`} />

                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 flex items-center justify-center shadow-lg mb-8 transform group-hover:scale-110 transition-transform duration-500 text-white`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-[#8B949E] text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Services;
