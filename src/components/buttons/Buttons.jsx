import React from 'react';

function Buttons() {
  return (
    <div className="max-w-6xl mx-auto space-y-10 py-10">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Modern Button Components Library
        </h1>
        <p className="text-gray-600 sm:text-lg px-4 mt-2">
          Below are different modern button designs that you can use in your React projects. Each button component is 
          responsive and customizable.
        </p>
      </div>

      {/* How to Use Section */}
      <div className="bg-white shadow-lg rounded-xl p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-gray-800">How to Use These Buttons?</h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          1️⃣ Each button component is designed with modern and responsive styles.  <br/>
          2️⃣ Import the desired button component into your React project and use it where needed.  <br/>
          3️⃣ Customize colors, sizes, and effects according to your project requirements.  <br/>
          4️⃣ Ensure you have the necessary dependencies installed before usage.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-4">Required Dependencies</h2>
        <ul className="list-disc list-inside text-gray-600 mt-2 text-sm sm:text-base">
          <li>react</li>
          <li>tailwindcss</li>
        </ul>

        <p className="text-gray-600 mt-3 text-sm sm:text-base">
          Install dependencies using:  
          <code className="bg-gray-200 text-gray-800 px-2 py-1 rounded">npm install react tailwindcss</code>
        </p>
      </div>

      {/* Button Components */}
      <div className="space-y-6 flex flex-wrap justify-center gap-4">
      <div className="flex flex-wrap gap-6 justify-center items-center min-h-screen bg-gray-900 p-6">
      {/* Button 1: Neon Glow */}
      <button className="px-6 py-3 text-white font-semibold rounded-lg bg-blue-600 shadow-lg shadow-blue-500/50 hover:shadow-blue-400/70 transition-all duration-300">
        Neon Glow
      </button>

      {/* Button 2: Flip Effect */}
      <button className="relative px-6 py-3 font-semibold text-white bg-purple-500 rounded-lg overflow-hidden transition-all duration-500 transform hover:rotate-180">
        Flip Effect
      </button>

      {/* Button 3: Slide Background */}
      <button className="relative px-6 py-3 font-semibold text-white bg-transparent border-2 border-green-500 rounded-lg overflow-hidden group">
        <span className="absolute inset-0 bg-green-500 w-full h-full translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
        <span className="relative z-10">Slide Background</span>
      </button>

      {/* Button 4: Scale Bounce */}
      <button className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg transform transition-transform duration-300 hover:scale-110 hover:-translate-y-1">
        Scale Bounce
      </button>

      {/* Button 5: Text Stroke Animation */}
      <button className="px-6 py-3 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 border border-yellow-400 rounded-lg hover:bg-yellow-500 hover:text-white transition-all duration-300">
        Text Stroke Effect
      </button>

 
     {/* Button 1: Gradient Pulse */}
     <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg animate-pulse">
        Gradient Pulse
      </button>

      {/* Button 2: Glassmorphism */}
      <button className="px-6 py-3 bg-white/10 backdrop-blur-lg text-white border border-white/20 font-semibold rounded-lg shadow-lg">
        Glass Effect
      </button>

      {/* Button 3: Border Expand */}
      <button className="px-6 py-3 relative text-white border-2 border-blue-500 rounded-lg group overflow-hidden">
        <span className="absolute inset-0 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        <span className="relative z-10">Border Expand</span>
      </button>

      {/* Button 4: Shake Effect */}
      <button className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-lg hover:animate-shake">
        Shake Effect
      </button>

      {/* Button 5: 3D Press */}
      <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-lg active:translate-y-1 active:shadow-none">
        3D Press
      </button>

      {/* Button 6: Neon Edge */}
      <button className="px-6 py-3 text-white border-2 border-pink-500 rounded-lg shadow-lg hover:shadow-pink-500/50 transition-all">
        Neon Edge
      </button>

      {/* Button 7: Hover Glow */}
      <button className="px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg shadow-lg hover:shadow-yellow-500/50 transition-all">
        Hover Glow
      </button>

      {/* Button 8: Text Fill Animation */}
      <button className="px-6 py-3 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 border border-green-400 rounded-lg hover:text-white transition-all">
        Text Fill
      </button>

      {/* Button 9: Ripple Effect */}
      <button className="relative px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg overflow-hidden group">
        <span className="absolute w-full h-full bg-blue-500 scale-0 group-hover:scale-150 transition-transform duration-300"></span>
        <span className="relative z-10">Ripple Effect</span>
      </button>

      {/* Button 10: Pop-up Effect */}
      <button className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-lg hover:scale-110 transition-all">
        Pop-up Effect
      </button>

      {/* Button 11: Expand Outline */}
      <button className="relative px-6 py-3 text-white border border-gray-500 rounded-lg group overflow-hidden">
        <span className="absolute inset-0 bg-gray-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        <span className="relative z-10">Expand Outline</span>
      </button>

      {/* Button 12: Metallic Shine */}
      <button className="px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold rounded-lg shadow-lg">
        Metallic Shine
      </button>

      {/* Button 13: Soft Bounce */}
      <button className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-all">
        Soft Bounce
      </button>

      {/* Button 14: Floating Effect */}
      <button className="px-6 py-3 bg-indigo-500 text-white font-semibold rounded-lg shadow-lg hover:-translate-y-1 transition-all">
        Floating Effect
      </button>

      {/* Button 15: Circular Effect */}
      <button className="relative px-6 py-3 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:scale-110 transition-all">
        Circular Button
      </button>

      {/* Button 16: Color Morph */}
      <button className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-blue-500 transition-all duration-500">
        Color Morph
      </button>

      {/* Button 17: Magnetic Effect */}
      <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
        Magnetic Hover
      </button>

      {/* Button 18: Split Hover */}
      <button className="relative px-6 py-3 text-white border-2 border-red-500 rounded-lg overflow-hidden group">
        <span className="absolute inset-0 bg-red-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></span>
        <span className="relative z-10">Split Hover</span>
      </button>

      {/* Button 19: Pulse Border */}
      <button className="relative px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-lg border-2 border-transparent hover:border-white transition-all">
        Pulse Border
      </button>

      {/* Button 20: Flip Card Effect */}
      <button className="relative px-6 py-3 text-white bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg overflow-hidden transition-all duration-500 transform hover:rotate-180">
        Flip Card
      </button>

       {/* Button 1: Gradient Pulse */}
       <button className="px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 animate-pulse">
        Gradient Pulse
      </button>

      {/* Button 2: Border Expand */}
      <button className="px-6 py-3 font-semibold text-white border-2 border-indigo-500 rounded-lg relative overflow-hidden transition-all duration-300 group">
        <span className="absolute inset-0 bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        <span className="relative z-10 group-hover:text-white">
          Border Expand
        </span>
      </button>

      {/* Button 3: Ripple Effect */}
      <button className="relative px-6 py-3 bg-green-500 text-white font-semibold rounded-lg overflow-hidden group">
        <span className="absolute inset-0 bg-green-600 scale-0 group-hover:scale-100 transition-transform duration-300"></span>
        <span className="relative z-10">Ripple Effect</span>
      </button>

      {/* Button 4: Sliding Underline */}
      <button className="relative px-6 py-3 text-white font-semibold rounded-lg border border-gray-400 hover:border-white transition-all duration-300">
        Sliding Underline
        <span className="absolute left-0 bottom-0 w-full h-1 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
      </button>

      {/* Button 5: 3D Press Effect */}
      <button className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-lg active:translate-y-1 active:shadow-none transition-all duration-150">
        3D Press
      </button>

    </div>
      </div>
    </div>
  );
}

export default Buttons;
