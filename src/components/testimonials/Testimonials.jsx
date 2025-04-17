import React from "react";
import Testimonial1 from "./Testimonial1";
import Testimonial2 from "./Testimonial2";
import Testimonial3 from "./Testimonial3";
import Testimonial4 from "./Testimonial4";
import Testimonial5 from "./Testimonial5";

function Testimonials({ theme }) {
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen mt-0 px-6 pt-20 py-24 flex flex-col items-center justify-center text-center transition-all duration-500 relative overflow-hidden ${
        isDark
          ? "bg-gradient-to-br from-black via-gray-900 to-black text-white"
          : "bg-gradient-to-br from-white via-slate-100 to-white text-gray-900"
      }`}
    >
      {/* Soft blurred animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 w-[60vw] h-[60vw] bg-pink-400 opacity-20 blur-[150px] animate-pulse-slow rounded-full"></div>
        <div className="absolute bottom-10 right-1/2 w-[50vw] h-[50vw] bg-indigo-400 opacity-20 blur-[120px] animate-pulse-slow rounded-full"></div>
        <div className="absolute inset-0 bg-white/60 dark:bg-black/40 backdrop-blur-sm"></div>
      </div>

      <div className="max-w-6xl w-full space-y-12">
        {/* Page Heading */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-bold drop-shadow-md">
            🚀 What People Are Saying
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            See how our UI Library is making a difference in the development community!
          </p>
        </div>

        {/* Guide Box */}
        <div
          className={`rounded-2xl shadow-md p-6 sm:p-8 border transition ${
            isDark
              ? "bg-gray-800 border-gray-700 text-white"
              : "bg-white/80 border-gray-200 text-gray-800"
          }`}
        >
          <h2 className="text-2xl font-semibold mb-4">📘 How to Use</h2>
          <ol className="list-decimal list-inside space-y-2 text-base">
            <li>Each testimonial showcases real feedback from users.</li>
            <li>Explore how the UI Library has helped with development efficiency.</li>
            <li>Feel free to customize any component as per your needs.</li>
          </ol>

          <h2 className="text-2xl font-semibold mb-4">📦 Required Dependencies</h2>
          <ul className="list-disc list-inside mt-2">
            <li>
              <code className="bg-gray-100 text-blue-600 px-2 py-1 rounded">react</code>
            </li>
            <li>
              <code className="bg-gray-100 text-blue-600 px-2 py-1 rounded">tailwindcss</code>
            </li>
            <li>
              <code className="bg-gray-100 text-blue-600 px-2 py-1 rounded">react-icons</code>
            </li>
          </ul>

          <p className="text-sm mt-4">
            Install with:
            <code className="ml-2 px-2 py-1 bg-gray-800 text-white rounded">
              npm install react tailwindcss react-icons
            </code>
          </p>

        </div>
          

        {/* Navbar Components */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[{ name: "Testimonial 1", Comp: Testimonial1 },
            { name: "Testimonial 2", Comp: Testimonial2 },
            { name: "Testimonial 3", Comp: Testimonial3 },
            { name: "Testimonial 4", Comp: Testimonial4 },
            { name: "Testimonial 5", Comp: Testimonial5 }].map(({ name, Comp }, idx) => (
            <div
              key={idx}
              className={`rounded-2xl shadow-lg border p-4 sm:p-6 transition duration-300 hover:shadow-2xl ${
                isDark
                  ? "bg-gray-800 border-gray-700 text-white"
                  : "bg-white/80 border-gray-200 text-gray-800"
              }`}
            >
              <h3 className="text-lg font-semibold mb-2">{name}</h3>
              <Comp />
            </div>
          ))}
        </div>

     
      </div>
    </div>
  );
}

export default Testimonials;
