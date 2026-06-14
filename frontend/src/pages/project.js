import React from "react";
import { motion } from "framer-motion";
import { 
  ChevronRight, BookOpen, Heart, GraduationCap, 
  Truck, ShoppingCart, Users, Calendar, Settings, 
  Wallet, Cpu, Megaphone, Droplets, Briefcase 
} from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "SL Accounting",
    description: "Full-stack MERN-based Learning Management System with course creation, lesson management, and student enrollment.",
    link: "/slaccounting",
    color: "from-[#58A6FF] to-[#3182CE]",
    icon: BookOpen
  },
  {
    title: "HealthBridge",
    description: "Scalable telemedicine platform featuring online consultations, appointment management, and secure payments.",
    link: "/healthbridge",
    color: "from-[#3FB950] to-[#2EA043]",
    icon: Heart
  },
  {
    title: "Learn Bridge",
    description: "Full-stack learning management platform for virtual classes, knowledge resources, and educational content.",
    link: "/learnbridge",
    color: "from-[#A371F7] to-[#8957E5]",
    icon: GraduationCap
  },
  {
    title: "Rural Link",
    description: "MERN-based delivery management platform for rural entrepreneurs with interactive maps and real-time tracking.",
    link: "/rurallink",
    color: "from-[#F78166] to-[#D73A49]",
    icon: Truck
  },
  {
    title: "Kick Store",
    description: "Full-stack MERN e-commerce application enabling product browsing, ordering, and customer management.",
    link: "/kickstore",
    color: "from-[#E3B341] to-[#D29922]",
    icon: ShoppingCart
  },
  {
    title: "SPARK",
    description: "System for managing volunteers, organizations, and events with role-based access and group chat.",
    link: "/spark",
    color: "from-[#58A6FF] to-[#3182CE]",
    icon: Users
  },
  {
    title: "Care Link",
    description: "Healthcare web application for managing appointments, patient records, and QR code report retrieval.",
    link: "/carelink",
    color: "from-[#3FB950] to-[#2EA043]",
    icon: Calendar
  },
  {
    title: "KHB Associate",
    description: "Modern web application for a textile machinery sales company with order management and real-time updates.",
    link: "/khb",
    color: "from-[#A371F7] to-[#8957E5]",
    icon: Settings
  },
  {
    title: "Finora",
    description: "Android budgeting app to track income and expenses, manage budgets, and receive notifications.",
    link: "/finora",
    color: "from-[#F78166] to-[#D73A49]",
    icon: Wallet
  },
  {
    title: "PCIFY",
    description: "Android UI design for a PC components shopping app focused on a clean browsing experience.",
    link: "/pcify",
    color: "from-[#E3B341] to-[#D29922]",
    icon: Cpu
  },
  {
    title: "KASSS Advertising",
    description: "Advertising agency website showcasing marketing campaigns, client case studies, and testimonials.",
    link: "/kasss",
    color: "from-[#58A6FF] to-[#3182CE]",
    icon: Megaphone
  },
  {
    title: "Clean Wave",
    description: "Java-based web application for managing laundry orders and invoices with real-time tracking.",
    link: "/cleanwave",
    color: "from-[#3FB950] to-[#2EA043]",
    icon: Droplets
  },
  {
    title: "Portfolio",
    description: "Personal portfolio website using React to present software engineering projects and technical skills.",
    link: "/portfolio",
    color: "from-[#A371F7] to-[#8957E5]",
    icon: Briefcase
  }
];

const Projects = () => {
  return (
    <div className="relative  font-inter overflow-hidden text-white">
      
      

      {/* Main Content */}
      <section
        id="projects"
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
              My Work
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#58A6FF] to-transparent mx-auto mt-6 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index % 6) * 0.1 }}
                className="group relative bg-white/[0.02] backdrop-blur-sm border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] p-8 md:p-10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 shadow-lg hover:shadow-2xl flex flex-col"
              >
                {/* Glowing background blob */}
                <div className={`absolute -right-20 -top-20 w-56 h-56 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-15 rounded-full blur-[60px] transition-opacity duration-700 pointer-events-none`} />

                <div className="relative z-10 scroll-mt-28 md:scroll-mt-32 flex flex-col flex-grow">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} p-4 flex items-center justify-center shadow-lg mb-8 transform group-hover:scale-110 transition-transform duration-500 text-white`}>
                    <project.icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-[#8B949E] text-base leading-relaxed flex-grow mb-8">
                    {project.description}
                  </p>

                  <Link
                    to={project.link}
                    className="mt-auto w-full inline-flex items-center justify-center gap-2 py-4 bg-white/[0.02] backdrop-blur-sm border border-white/10 shadow-lg hover:bg-white/[0.02] text-white font-semibold rounded-xl transition-all duration-300 text-sm tracking-wide group-hover:border-white/20"
                  >
                    View Project <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Projects;
