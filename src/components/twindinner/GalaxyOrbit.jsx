import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const components = [
  "Buttons", "Cards", "Navbars", "Footers",
  "Heros", "Testimonials", "Loaders",
];

export default function GalaxyComponent({ theme }) {
  const [angle, setAngle] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0.5, y: 0.5 });
  const [bursts, setBursts] = useState([]);
  const containerRef = useRef();

  const isDark = theme === "dark";

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => prev + 0.002);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  // Mouse/touch parallax effect
  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setCursorPos({ x, y });
  };

  const handleClick = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setBursts((prev) => [...prev, { id, x, y }]);
    setTimeout(() => {
      setBursts((prev) => prev.filter((b) => b.id !== id));
    }, 700);
  };

  const radius = window.innerWidth < 640 ? 100 : window.innerWidth < 768 ? 140 : 230;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center px-4 py-12 "
    >
      {/* Galaxy swirl background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-800/30 via-black to-black animate-pulse" />
      </div>

      {/* Light beam center glow */}
      <div className="absolute w-80 h-80 sm:w-[30rem] sm:h-[30rem] rounded-full bg-gradient-to-tr from-blue-500 via-transparent to-purple-500 blur-3xl opacity-30 pointer-events-none" />

      {/* Parallax cursor glow */}
      <div
        className="absolute w-60 h-60 bg-orange-400/30 rounded-full blur-3xl pointer-events-none transition-transform duration-300"
        style={{
          left: `${cursorPos.x * 100}%`,
          top: `${cursorPos.y * 100}%`,
          transform: `translate(-50%, -50%)`,
        }}
      />

      {/* Bursts on click */}
      <AnimatePresence>
        {bursts.map((b) => (
          <motion.div
            key={b.id}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 3, opacity: 0 }}
            exit={{ opacity: 0 }}
            className="absolute rounded-full bg-pink-500 pointer-events-none"
            style={{ width: 20, height: 20, left: b.x, top: b.y }}
          />
        ))}
      </AnimatePresence>

      {/* Central galaxy area */}
      <div className="relative rounded-full w-[85vw] max-w-[600px] sm:max-w-[700px] md:max-w-[800px] aspect-square flex items-center justify-center z-10 border border-white/10">
        
        {/* Center Text */}
        <motion.div
          className="absolute z-20 text-center px-4 max-w-xs sm:max-w-sm"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className=" font-extrabold tracking-wider cursor-pointer text-2xl sm:text-3xl md:text-5xl font-['Poppins'] bg-clip-text text-transparent">
    <span className={` ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
      Brahma
    </span>
    <span className="ml-1 bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text drop-shadow-md dark:text-transparent">
      UI
    </span>
  </h1>
        </motion.div>



        {/*  */}

        {/* Spinning spark ring */}
        {Array.from({ length: 20 }).map((_, i) => {
          const angleRad = (i / 20) * Math.PI * 2 + angle;
          const x = Math.cos(angleRad) * (radius - 40);
          const y = Math.sin(angleRad) * (radius - 40);
          return (
            <motion.div
              key={i}
              className="absolute w-[4px] h-[4px] rounded-full bg-orange-400 shadow-md"
              style={{ transform: `translate(${x}px, ${y}px)` }}
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.1 }}
            />
          );
        })}

        {/* Orbiting Component Cards */}
        {components.map((name, i) => {
          const angleRad = (i / components.length) * Math.PI * 2 + angle;
          const x = Math.cos(angleRad) * radius;
          const y = Math.sin(angleRad) * radius;

          return (
            <motion.div
              key={i}
              className={`absolute text-xs sm:text-sm md:text-base font-medium px-3 py-1 rounded-xl shadow-lg backdrop-blur-md transition-all border border-amber-600
                ${isDark ? "bg-white/10 text-white" : "bg-black/20 text-black"}
                hover:scale-110 hover:shadow-xl`}
              style={{ transform: `translate(${x}px, ${y}px)` }}
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
            >
              <Link to={`/${name.toLowerCase()}`}>{name}</Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
