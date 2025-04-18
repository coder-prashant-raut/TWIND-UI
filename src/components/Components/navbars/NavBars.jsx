import React from "react";
import Navbar1 from "./NavBar1";
import Navbar2 from "./NavBar2";
import Navbar3 from "./NavBar3";
import Navbar4 from "./NavBar4";

function NavBars() {
  return (
    <div className="min-h-screen bg-gray-100 px-1 sm:px-0 py-2 sm:py-6">
      <div className="max-w-6xl mx-auto space-y-4 sm:space-y-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800">
          Modern Navbar Components Library
        </h1>
        
        <p className="text-center text-gray-600 sm:text-lg px-2">
          Below are different modern navbar designs that you can use in your React projects. Each navbar component 
          includes a GitHub link where you can find its source code.
        </p>

        

        {/* Navbar Sections */}
        <div className="shadow-lg rounded-xl overflow-hidden bg-white p-3 sm:p-6">
          <h3 className="text-lg font-semibold text-gray-800">Navbar 1</h3>
          <Navbar1 />
        </div>

        <div className="shadow-lg rounded-xl overflow-hidden bg-white p-3 sm:p-6">
          <h3 className="text-lg font-semibold text-gray-800">Navbar 2</h3>
          <Navbar2 />
        </div>

        <div className="shadow-lg rounded-xl overflow-hidden bg-white p-3 sm:p-6">
          <h3 className="text-lg font-semibold text-gray-800">Navbar 3</h3>
          <Navbar3 />
        </div>

        <div className="shadow-lg rounded-xl overflow-hidden bg-white p-3 sm:p-6">
          <h3 className="text-lg font-semibold text-gray-800">Navbar 4</h3>
          <Navbar4 />
        </div>
      </div>
    </div>
  );
}

export default NavBars;
