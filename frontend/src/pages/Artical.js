import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMedium } from "react-icons/fa";
import { SiBehance } from "react-icons/si";
import { Layers, FileText, PenTool, ChevronRight } from "lucide-react";

const Articles = () => {
  const [activeTab, setActiveTab] = useState("all");

  const articles = [
    {
      id: 1,
      title:
        "Kicknet.store — How I Designed, Built & Launched a Full-Stack Online Shop",
      description:
        "A full case study of how Kicknet.store was conceived, designed (UI/UX), built (MERN stack), and deployed — covering frontend, backend, admin dashboard, product & cart flow, and lessons learned.",
      platform: "medium",
      platformName: "Medium",
      url: "https://medium.com/@sajanawickramarathna143/kicknet-store-how-i-designed-built-launched-a-full-stack-online-shop-a-complete-case-study-e36985d1ccf4",
      icon: <FileText className="w-8 h-8" />,
      color: "from-[#10B981] to-[#047857]", // Medium Green
    },
    {
      id: 2,
      title: "Lost2Found – Lost Item Finder App (UI/UX)",
      description:
        "A mobile-first case study for Sri Lanka: covering the design process, user pain points, UI/UX decisions and a clean, intuitive interface meant to help people report and recover lost belongings.",
      platform: "behance",
      platformName: "Behance",
      url: "https://www.behance.net/gallery/239024907/Lost2Found-Lost-Item-Finder-App-%28UIUX%29",
      icon: <PenTool className="w-8 h-8" />,
      color: "from-[#3B82F6] to-[#1D4ED8]", // Behance Blue
    },
  ];

  const filteredArticles =
    activeTab === "all"
      ? articles
      : articles.filter((article) => article.platform === activeTab);

  return (
    <div id="articles" className="relative scroll-mt-28 md:scroll-mt-32  font-inter overflow-hidden text-white">
      
      

      {/* Main Content */}
      <section className="relative z-10 scroll-mt-20 md:scroll-mt-24 flex flex-col items-center justify-center px-4 md:px-6 py-12 md:py-16">
        <div className="w-full max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#8B949E] tracking-tight">
              My Articles
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#58A6FF] to-transparent mx-auto mt-6 rounded-full" />
            <p className="text-[#8B949E] text-base sm:text-lg max-w-2xl mx-auto mt-6 font-light">
              Explore my latest engineering articles on Medium and detailed design case studies on Behance.
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center gap-4 mb-16 flex-wrap"
          >
            {[
              { id: "all", label: "All Works", icon: <Layers size={18} /> },
              { id: "medium", label: "Medium", icon: <FaMedium size={18} /> },
              { id: "behance", label: "Behance", icon: <SiBehance size={18} /> },
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-2xl font-semibold flex items-center gap-3 transition-all duration-300 text-sm shadow-lg ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-[#58A6FF] to-[#3182CE] text-white border border-[#58A6FF]/50 shadow-[0_0_20px_rgba(88,166,255,0.4)]"
                    : "bg-white/[0.02] backdrop-blur-sm border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] text-[#C9D1D9] hover:border-white/20 hover:text-white"
                }`}
              >
                {tab.icon}
                {tab.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Articles Grid (EXACT match to projects.js) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index % 6) * 0.1 }}
                layout
                className="group relative bg-white/[0.02] backdrop-blur-sm border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] p-8 md:p-10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 shadow-lg hover:shadow-2xl flex flex-col"
              >
                {/* Glowing background blob */}
                <div className={`absolute -right-20 -top-20 w-56 h-56 bg-gradient-to-br ${article.color} opacity-0 group-hover:opacity-15 rounded-full blur-[60px] transition-opacity duration-700 pointer-events-none`} />

                <div className="relative z-10 scroll-mt-28 md:scroll-mt-32 flex flex-col flex-grow">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${article.color} p-4 flex items-center justify-center shadow-lg mb-8 transform group-hover:scale-110 transition-transform duration-500 text-white`}>
                    {article.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                    {article.title}
                  </h3>
                  
                  <p className="text-[#8B949E] text-base leading-relaxed flex-grow mb-8">
                    {article.description}
                  </p>

                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto w-full inline-flex items-center justify-center gap-2 py-4 bg-white/[0.02] backdrop-blur-sm border border-white/10 shadow-lg hover:bg-white/[0.02] text-white font-semibold rounded-xl transition-all duration-300 text-sm tracking-wide group-hover:border-white/20"
                  >
                    Read on {article.platformName} <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredArticles.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/[0.02] rounded-full mb-6">
                <FileText className="w-10 h-10 text-[#8B949E]" />
              </div>
              <p className="text-[#C9D1D9] text-xl font-medium">
                No articles found in this category.
              </p>
            </motion.div>
          )}

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <h3 className="text-xl font-bold text-white mb-8 tracking-wide">Connect with me</h3>
            <div className="flex justify-center gap-6 flex-wrap">
              <motion.a
                href="https://medium.com/@sajanawickramarathna143"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/[0.02] backdrop-blur-sm border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] rounded-2xl hover:border-[#10B981]/50 transition-all flex items-center gap-3 text-[#C9D1D9] hover:text-[#10B981] font-medium shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]"
              >
                <FaMedium size={24} />
                <span>Follow on Medium</span>
              </motion.a>
              <motion.a
                href="https://www.behance.net/sajanawickram"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/[0.02] backdrop-blur-sm border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] rounded-2xl hover:border-[#3B82F6]/50 transition-all flex items-center gap-3 text-[#C9D1D9] hover:text-[#3B82F6] font-medium shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
              >
                <SiBehance size={24} />
                <span>Follow on Behance</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      
      
    </div>
  );
};

export default Articles;
