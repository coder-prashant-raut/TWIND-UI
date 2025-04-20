import React from "react";
import Navbar1 from "./NavBar1";
import Navbar2 from "./NavBar2";
import Navbar3 from "./NavBar3";
import Navbar4 from "./NavBar4";
import PreviewCode from "../../Common/PreviewCode";
import { navbar1Code } from "./NavBar1";
import { navbar2Code } from "./NavBar2";
import { navbar3Code } from "./NavBar3";
import { navbar4Code } from "./NavBar4";

function NavBars({ theme }) {
  const isDark = theme === "dark";

  // Navbar code strings for the code tab
 

  // Add code strings for other navbars similarly


  // Props for each navbar component (if any)
  const navbar1Props = [
    { name: "theme", type: "string", default: "'light'", description: "Theme mode of the navbar (light/dark)" }
  ];

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
        <h1 className="text-3xl sm:text-4xl font-bold font-mono mb-4">
            <span className={isDark ? "text-blue-400" : "text-blue-600"}>   🚀 Modern </span> Navbar Components
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Explore clean, responsive navbars for your React projects. Copy, customize, and build faster!
          </p>
        </div>
       
        {/* Navbar Components with PreviewCode */}
        <div className="grid sm:grid-cols-1 gap-6">
          <PreviewCode
            title="Navbar 1"
            description="A modern navbar with dark mode toggle and responsive mobile menu"
            component={<div className="w-full"><Navbar1 /></div>}
            code={navbar1Code}
            theme={isDark ? "dark" : "light"}
            fullWidth={true}
          />
          
          <PreviewCode
            title="Navbar 2"
            description="A simple navbar with logo and navigation links"
            component={<div className="w-full"><Navbar2 /></div>}
            code={navbar2Code}
            theme={isDark ? "dark" : "light"}
            fullWidth={true}
          />
          
          <PreviewCode
            title="Navbar 3"
            description="A navbar with centered logo and navigation options"
            component={<div className="w-full"><Navbar3 /></div>}
            code={navbar3Code}
            theme={isDark ? "dark" : "light"}
            fullWidth={true}
          />
          
          <PreviewCode
            title="Navbar 4"
            description="A navbar with dropdown menus and action buttons"
            component={<div className="w-full"><Navbar4 /></div>}
            code={navbar4Code}
            theme={isDark ? "dark" : "light"}
            fullWidth={true}
          />
        </div>
      </div>
    </div>
  );
}

export default NavBars;