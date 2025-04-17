import React from "react";
import Navbar1 from "./NavBar1";
import Navbar2 from "./NavBar2";
import Navbar3 from "./NavBar3";
import Navbar4 from "./NavBar4";

function NavBars({ theme }) {
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
            🚀 Modern Navbar Components
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Explore clean, responsive navbars for your React projects. Copy, customize, and build faster!
          </p>
        </div>

        {/* Guide Box */}
        <div className={`rounded-2xl shadow-md p-6 sm:p-8 border transition ${
          isDark
            ? "bg-gray-800 border-gray-700 text-white"
            : "bg-white/80 border-gray-200 text-gray-800"
        }`}>
          <h2 className="text-2xl font-semibold mb-4">📘 How to Use</h2>
          <ol className="list-decimal list-inside space-y-2 text-base">
            <li>Each navbar below includes a <strong>GitHub link</strong> with its source code.</li>
            <li>Click the link to view or copy the code directly.</li>
            <li>Import the navbar component into your React project.</li>
            <li>Customize links, logos, or styles as per your needs.</li>
          </ol>

          <h2 className="text-xl font-semibold mt-6">📦 Required Dependencies</h2>
          <ul className="list-disc list-inside mt-2">
            <li><code className="bg-gray-100 text-blue-600 px-2 py-1 rounded">react</code></li>
            <li><code className="bg-gray-100 text-blue-600 px-2 py-1 rounded">lucide-react</code></li>
            <li><code className="bg-gray-100 text-blue-600 px-2 py-1 rounded">tailwindcss</code></li>
          </ul>

          <p className="text-sm mt-4">
            Install with:
            <code className="ml-2 px-2 py-1 bg-gray-800 text-white rounded">
              npm install react lucide-react tailwindcss
            </code>
          </p>
        </div>

        {/* Navbar Components */}
        <div className="grid sm:grid-cols-1 gap-8">
          {[{ name: "Navbar 1", Comp: Navbar1 },
            { name: "Navbar 2", Comp: Navbar2 },
            { name: "Navbar 3", Comp: Navbar3 },
            { name: "Navbar 4", Comp: Navbar4 }].map(({ name, Comp }, idx) => (
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

export default NavBars;
