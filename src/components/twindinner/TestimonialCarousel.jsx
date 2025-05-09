import React, { useEffect, useRef } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Aarav Sharma",
    title: "Frontend Developer",
    message:
      "Twind-UI saved me hours! The components are clean, responsive, and production ready.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Verma",
    title: "UI Designer",
    message: "I love the aesthetics. It just works beautifully out of the box!",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Rohit Sinha",
    title: "Full Stack Engineer",
    message:
      "The best Tailwind UI library I've ever used. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Sneha Kapoor",
    title: "Tech Lead",
    message:
      "Built my product UI in no time. The dark mode is 🔥. Thanks Brahma UI!",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
  },
];

export default function SmoothTestimonials({ theme }) {
  const scrollRef = useRef(null);
  const isDark = theme === "dark";

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollSpeed = 0.5;
    let animationFrameId;

    const scroll = () => {
      if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += scrollSpeed;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div
      className={`relative mt-20 w-full overflow-hidden py-12 transition-all duration-500 backdrop-blur-lg rounded-xl`}
    >
      {/* Left Gradient Overlay */}
      <div
        className={`absolute left-0 top-0 h-full 
          w-[80px] sm:w-[120px] md:w-[180px] lg:w-[350px] 
          z-10 pointer-events-none 
          bg-gradient-to-r ${isDark ? "from-gray-900/90" : "from-white/80"} to-transparent`}
      />
      <div
        className={`absolute right-0 top-0 h-full 
          w-[100px] sm:w-[140px] md:w-[200px] lg:w-[350px] 
          z-10 pointer-events-none 
          bg-gradient-to-l ${isDark ? "from-gray-900/90" : "from-white/80"} to-transparent`}
      />

      {/* Scrollable Testimonials */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto no-scrollbar px-4"
      >
        {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
          <div
            key={i}
            className={`min-w-[280px] max-w-[320px] flex-shrink-0 p-6 rounded-xl shadow-md 
              transition-transform duration-300 hover:scale-[1.03]
              backdrop-blur-lg border text-center flex flex-col items-center
              ${isDark ? "bg-zinc-800/60 border-zinc-700 text-gray-200" : "bg-white/70 border-gray-200 text-gray-700"}`}
          >
            <FaQuoteLeft className="text-orange-500 text-2xl mb-4" />
            <p className="text-sm leading-relaxed mb-6">{t.message}</p>
            <div className="flex flex-col items-center gap-3 mt-auto">
              <div className="relative group">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-orange-400 shadow-lg transition-all duration-300 group-hover:shadow-orange-400/70"
                />
                <div className="absolute inset-0 rounded-full blur-md opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-300 bg-orange-400 z-[-1]" />
              </div>
              <div className="mt-2">
                <p className={`font-semibold ${isDark ? "text-white" : "text-gray-800"}`}>
                  {t.name}
                </p>
                <p className={`text-xs mt-1 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                  {t.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
