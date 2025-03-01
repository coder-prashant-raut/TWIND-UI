import React from "react";

const Button1 = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center items-center min-h-screen bg-gray-900 p-6">
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
  );
};

export default Button1;
