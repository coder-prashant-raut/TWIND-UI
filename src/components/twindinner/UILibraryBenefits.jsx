import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BenefitPng from "../../assets/benefit.png";

const benefits = [
  {
    title: "Lightning-Fast Development 🚀",
    description:
      "With a rich collection of ready-made components, you can build stunning UIs in minutes instead of hours. Focus more on logic, less on layout.",
  },
  {
    title: "Beautiful, Consistent UI 🎨",
    description:
      "Design aesthetics are unified across the app, giving a professional feel that aligns with modern design trends. No more mismatched styles!",
  },
  {
    title: "Fully Responsive Components 📱",
    description:
      "Every component adapts beautifully to mobile, tablet, and desktop views — ensuring a seamless user experience across devices.",
  },
  {
    title: "Dark Mode Ready 🌙",
    description:
      "Whether you're building a calm dark UI or a bright modern one, every component supports theme switching effortlessly.",
  },
  {
    title: "Production-Ready Designs ✅",
    description:
      "Each UI piece is accessibility-aware, performant, and tested to fit real-world use cases right out of the box.",
  },
];

export default function UILibraryBenefits({ theme }) {
  const [index, setIndex] = useState(0);
  const isDark = theme === "dark";

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % benefits.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`w-full mt-10 py-20 px-6 md:px-28 flex flex-col lg:flex-row items-center justify-center 
        gap-10 lg:gap-20 shadow-2xl rounded-3xl transition-all duration-300
        `}
    >
      {/* Left: Image + Glow */}
      <div className="relative w-full max-w-md lg:max-w-lg flex justify-center items-center">
        <motion.div
          className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-pink-500/20 blur-[100px] rounded-full -z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <img
          src={BenefitPng}
          alt="UI Library Benefits"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Right: Text Section */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full max-w-2xl">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold leading-tight mb-10 font-['Poppins']"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Our <span className="text-pink-500">UI Library</span> ?
        </motion.h1>

        <div className="h-[200px] mt-20 md:h-[220px] p-2 relative overflow-hidden w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="absolute w-full"
            >
              <motion.h2
                className="text-2xl md:text-3xl font-bold text-pink-500 mb-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {benefits[index].title}
              </motion.h2>

              <motion.p
                className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {benefits[index].description}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
