import React from "react";
import RocketLogo  from '../../assets/rocket.png'
import {
  FaBook,
  FaRocket,
  FaPalette,
  FaMobileAlt,
  FaCode,
  FaMoon,
  FaCogs,
  FaLayerGroup,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = ({ theme }) => {
  const isDark = theme === "dark";

  const features = [
    {
      title: "Modern & Responsive",
      icon: <FaMobileAlt className="text-blue-500 text-3xl" />,
      desc: "Crafted for all devices with pixel-perfect responsiveness.",
    },
    {
      title: "Developer Friendly",
      icon: <FaCode className="text-green-500 text-3xl" />,
      desc: "Clean, modular, and intuitive codebase designed for devs.",
    },
    {
      title: "Dark Mode Ready",
      icon: <FaMoon className="text-purple-500 text-3xl" />,
      desc: "Seamless theme toggle support with graceful transitions.",
    },
    {
      title: "Aesthetic Design System",
      icon: <FaPalette className="text-pink-500 text-3xl" />,
      desc: "Curated styles with Tailwind CSS for consistent branding.",
    },
    {
      title: "Rich Component Library",
      icon: <FaRocket className="text-yellow-500 text-3xl" />,
      desc: "Navbars, cards, buttons, forms, heros, and more.",
    },
    {
      title: "Performance Optimized",
      icon: <FaCogs className="text-red-500 text-3xl" />,
      desc: "Blazing fast components with built-in optimizations.",
    },
    {
      title: "Production Ready",
      icon: <FaLayerGroup className="text-indigo-500 text-3xl" />,
      desc: "Use directly in live projects with confidence.",
    },
  ];

  return (
    <section
      className={`min-h-screen mt-0 px-6 pt-20 py-24 flex flex-col items-center justify-center text-center transition-all duration-500 relative overflow-hidden ${
        isDark
          ? "bg-gradient-to-br from-black via-gray-900 to-black text-white"
          : "bg-gradient-to-br from-white via-slate-100 to-white text-gray-900"
      }`}
    >
      {/* Glow Background Effects */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-blue-500/20 blur-[120px] rounded-full top-[-150px] left-[-150px] animate-pulse"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] bg-pink-500/20 blur-[100px] rounded-full bottom-[-100px] right-[-100px] animate-pulse"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Hero Content */}
      <motion.div
        className="z-10 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <div className="flex flex-col gap-2 justify-center items-center">
          
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 font-mono "  >
          Elevate Your UI Game <img src={RocketLogo} alt=""  className="max-h-[500px]"/>
        </h1>


        <p   className={`p-6 text-2xl font-mono ${
  isDark
    ? " text-white"
    : " text-gray-900"
}`}
>
          TWIND-UI is your gateway to stunning, efficient, and production-ready
          components. Build elegant interfaces faster than ever.
        </p>
     

        <div className="flex justify-center mt-6">
  <Link to="/documentation">
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center justify-center gap-3 px-17 py-3 text-lg font-bold border-2 border-amber-300  text-white dark:text-white bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 rounded-full shadow-lg shadow-amber-200 hover:shadow-2xl transition-all duration-300 font-mono"

    
    >
      <FaBook className="text-2xl" /> Explore Docs
    </motion.button>
  </Link>
      </div> 
</div>


      </motion.div>



      {/* Features Section */}
      <motion.div
        className="z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-24 max-w-6xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
           
            className={`p-6 rounded-3xl border backdrop-blur-lg bg-opacity-60 shadow-xl transition duration-300 transform hover:-translate-y-2 hover:shadow-2xl ${
              isDark
                ? "bg-gray-900/60 border-gray-700"
                : "bg-white/70 border-gray-200"
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 flex justify-center">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2 font-mono">{feature.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Home;
