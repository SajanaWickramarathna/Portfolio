import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaMedium  } from "react-icons/fa";
import { SiBehance } from "react-icons/si";
import Footer from "../components/footer";

const Articles = () => {
  const [activeTab, setActiveTab] = useState("all");

  // Sample articles data - replace with your actual articles
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
      image: "🛒",
      date: "Nov 20, 2025",
      readTime: "11 min read",
    },

    {
      id: 2,
      title: "Lost2Found – Lost Item Finder App (UI/UX)",
      description:
        "A mobile-first case study for Sri Lanka: covering the design process, user pain points, UI/UX decisions and a clean, intuitive interface meant to help people report and recover lost belongings — streamlining communication between finders and owners.",
      platform: "behance",
      platformName: "Behance",
      url: "https://www.behance.net/gallery/239024907/Lost2Found-Lost-Item-Finder-App-%28UIUX%29",
      image: "📱",
      date: "Nov 21, 2025",
    },
  ];

  const filteredArticles =
    activeTab === "all"
      ? articles
      : articles.filter((article) => article.platform === activeTab);

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.1 },
    }),
  };

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

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1117]/90 to-[#161B22]/95" />

      {/* Content */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 mt-14 sm:mt-8 px-2"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              My Articles & Projects
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
              Explore my latest articles on Medium and design projects on
              Behance
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12 flex-wrap px-2"
          >
            {[
              { id: "all", label: "All", icon: "📚" },
              { id: "medium", label: "Medium", icon: <FaMedium size={18} /> },
              {
                id: "behance",
                label: "Behance",
                icon: <SiBehance size={18} />,
              },
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold flex items-center gap-2 transition-all text-sm sm:text-base ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700"
                }`}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Articles Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-0"
          >
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                layout
                whileHover={{ y: -5 }}
                className="group relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm"
              >
                {/* Card Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300" />

                {/* Content */}
                <div className="relative p-4 sm:p-6 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div className="text-4xl mb-3">{article.image}</div>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-semibold flex items-center gap-1 border border-blue-500/30">
                      {article.platform === "medium" ? (
                        <FaMedium size={12} />
                      ) : (
                        <SiBehance size={12} />
                      )}
                      {article.platformName}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 flex-grow line-clamp-3">
                    {article.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-2 sm:gap-3 text-xs text-gray-400 mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-gray-700/50">
                    <span>{article.date}</span>
                    {article.readTime && <span>• {article.readTime}</span>}
                  </div>

                  {/* CTA Button */}
                  <motion.a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:shadow-lg transition-all w-full justify-center text-sm sm:text-base"
                  >
                    Read More
                    <FaExternalLinkAlt size={14} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredArticles.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-400 text-lg">
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
            className="mt-12 sm:mt-16 text-center px-2"
          >
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              Connect with me on my platforms
            </p>
            <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
              <motion.a
                href="https://medium.com/@sajanawickramarathna143"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 sm:p-4 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-lg hover:border-blue-500/50 transition-all flex items-center gap-2 text-gray-300 hover:text-blue-400 text-sm sm:text-base"
              >
                <FaMedium size={20} />
                <span className="hidden sm:inline">Follow on Medium</span>
                <span className="sm:hidden">Medium</span>
              </motion.a>
              <motion.a
                href="https://www.behance.net/sajanawickram"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 sm:p-4 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-lg hover:border-purple-500/50 transition-all flex items-center gap-2 text-gray-300 hover:text-purple-400 text-sm sm:text-base"
              >
                <SiBehance size={20} />
                <span className="hidden sm:inline">Follow on Behance</span>
                <span className="sm:hidden">Behance</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Articles;
