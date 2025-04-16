import React from "react";
import Navbar1 from "./NavBar1";
import Navbar2 from "./NavBar2";
import Navbar3 from "./NavBar3";
import Navbar4 from "./NavBar4";

function NavBars() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50 px-4 sm:px-6 py-10 overflow-hidden">
      {/* Soft blurred animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 w-[60vw] h-[60vw] bg-pink-400 opacity-20 blur-[150px] animate-pulse-slow rounded-full"></div>
        <div className="absolute bottom-10 right-1/2 w-[50vw] h-[50vw] bg-indigo-400 opacity-20 blur-[120px] animate-pulse-slow rounded-full"></div>
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        {/* Page Heading */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-bold text-gray-900 drop-shadow-md">
            🚀 Modern Navbar Components
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Explore clean, responsive navbars for your React projects. Copy, customize, and build faster!
          </p>
        </div>

        {/* Guide Box */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md p-6 sm:p-8 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">📘 How to Use</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2 text-base">
            <li>Each navbar below includes a <strong>GitHub link</strong> with its source code.</li>
            <li>Click the link to view or copy the code directly.</li>
            <li>Import the navbar component into your React project.</li>
            <li>Customize links, logos, or styles as per your needs.</li>
          </ol>

          <h2 className="text-xl font-semibold text-gray-800 mt-6">📦 Required Dependencies</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li><code className="bg-gray-100 text-blue-600 px-2 py-1 rounded">react</code></li>
            <li><code className="bg-gray-100 text-blue-600 px-2 py-1 rounded">lucide-react</code></li>
            <li><code className="bg-gray-100 text-blue-600 px-2 py-1 rounded">tailwindcss</code></li>
          </ul>

          <p className="text-sm text-gray-600 mt-4">
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
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6 transition duration-300 hover:shadow-2xl"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
              <Comp />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavBars;
