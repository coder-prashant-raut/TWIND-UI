import { useState, useEffect } from "react";

const Hero8 = () => {
  const headings = [
    "Innovate Your Digital World",
    "Design. Develop. Elevate.",
    "Crafting Future-Ready UI",
  ];
  const [currentHeading, setCurrentHeading] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeading((prev) => (prev + 1) % headings.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center bg-gray-900 text-white overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900 via-purple-800 to-indigo-700 opacity-90 animate-gradientMove"></div>
      
      {/* Dynamic Heading */}
      <h1 className="relative z-10 text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 mb-6 transition-all duration-1000 ease-in-out">
        {headings[currentHeading]}
      </h1>
      
      <p className="text-lg md:text-xl text-gray-300 mb-8 z-10">
        Transform ideas into reality with powerful UI components.
      </p>
      
      <div className="flex space-x-6 z-10">
        <button className="px-6 py-3 bg-indigo-500 font-semibold rounded-lg shadow-lg hover:bg-indigo-600 transition-all">
          Get Started
        </button>
        <button className="px-6 py-3 border border-gray-300 text-gray-200 font-semibold rounded-lg shadow-lg hover:bg-gray-200 hover:text-gray-900 transition-all">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Hero8;
