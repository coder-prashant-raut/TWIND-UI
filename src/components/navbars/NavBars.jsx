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

        <div className="bg-white shadow-lg rounded-xl p-4 sm:p-8">
          <h2 className="text-xl font-semibold text-gray-800">How to Use These Navbars?</h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            1️⃣ Each navbar component contains a **GitHub link** where you can find its source code.  <br />
            2️⃣ Click on the GitHub link inside each navbar to access the code and copy it.  <br />
            3️⃣ Import the navbar component into your React project and use it as needed.  <br />
            4️⃣ Customize the navbars by modifying styles, links, or branding according to your requirements.  <br />
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-4">Required Dependencies</h2>
          <ul className="list-disc list-inside text-gray-600 mt-2 text-sm sm:text-base">
            <li>react</li>
            <li>lucide-react</li>
            <li>tailwindcss</li>
          </ul>

          <p className="text-gray-600 mt-3 text-sm sm:text-base">
            Ensure you have these dependencies installed before using the navbars.  
            Install them using:  
            <code className="bg-gray-200 text-gray-800 px-2 py-1 rounded">npm install react lucide-react tailwindcss</code>
          </p>
        </div>

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
