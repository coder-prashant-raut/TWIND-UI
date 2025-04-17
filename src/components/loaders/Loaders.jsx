import React from "react";

function Loaders({ theme }) {
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen mt-0 px-6 pt-20 py-24 flex flex-col items-center justify-center text-center transition-all duration-500 relative overflow-hidden ${
        isDark
          ? "bg-gradient-to-br from-black via-gray-900 to-black text-white"
          : "bg-gradient-to-br from-white via-slate-100 to-white text-gray-900"
      }`}
    >
      {/* Header */}
      <div className="max-w-6xl w-full mx-auto space-y-10">
        <div className="text-center px-4">
          <h1 className="text-3xl sm:text-4xl font-bold font-mono">Modern Loaders Collection</h1>
          <p className="mt-2 sm:text-lg text-gray-600 dark:text-gray-300">
            A set of beautiful, smooth, and modern CSS loaders made with Tailwind and pure CSS.
          </p>
        </div>

        {/* How to Use Section */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 sm:p-8">
          <h2 className="text-xl font-semibold">How to Use These Loaders?</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm sm:text-base leading-relaxed">
            1️⃣ Use these loaders while fetching data or during async operations. <br />
            2️⃣ Customize size, color, and animation duration using Tailwind classes. <br />
            3️⃣ Import the required loader as a component where needed.
          </p>

          <h2 className="text-xl font-semibold mt-4">Required Dependencies</h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-2 text-sm sm:text-base">
            <li>react</li>
            <li>tailwindcss</li>
          </ul>

          <p className="text-gray-600 dark:text-gray-300 mt-3 text-sm sm:text-base">
            Install using:
            <code className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded ml-2">
              npm install react tailwindcss
            </code>
          </p>
        </div>

        {/* Loaders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6 bg-gray-100 dark:bg-gray-900 p-6 rounded-xl">
          {/* Loader 1 - Spinning Circle */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
            <p className="mt-2 text-sm">Spinning Circle</p>
          </div>

          {/* Loader 2 - Dual Ring */}
          <div className="flex flex-col items-center">
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <p className="mt-2 text-sm">Dual Ring</p>
          </div>

          {/* Loader 3 - Dot Pulse */}
          <div className="flex flex-col items-center space-y-1">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce delay-200"></div>
            </div>
            <p className="text-sm">Dot Pulse</p>
          </div>

          {/* Loader 4 - Ripple */}
          <div className="flex flex-col items-center">
            <div className="relative w-12 h-12">
              <div className="absolute w-full h-full border-2 border-green-500 rounded-full animate-ping"></div>
              <div className="absolute w-full h-full border-2 border-green-500 rounded-full"></div>
            </div>
            <p className="mt-2 text-sm">Ripple Effect</p>
          </div>

          {/* Loader 5 - Bars */}
          <div className="flex flex-col items-center">
            <div className="flex space-x-1">
              <div className="w-1 h-6 bg-pink-500 animate-pulse"></div>
              <div className="w-1 h-6 bg-pink-500 animate-pulse delay-100"></div>
              <div className="w-1 h-6 bg-pink-500 animate-pulse delay-200"></div>
            </div>
            <p className="mt-2 text-sm">Bars Pulse</p>
          </div>

          {/* Loader 6 - Flip Square */}
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-purple-500 animate-[spin_1s_linear_infinite]"></div>
            <p className="mt-2 text-sm">Rotating Square</p>
          </div>

          {/* Loaders Grid */}
  {/* Loader 1 - Spinning Ring */}
  <div className="flex flex-col items-center">
    <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    <p className="mt-2 text-sm">Spinning Ring</p>
  </div>

  {/* Loader 2 - Pulse Dots */}
  <div className="flex flex-col items-center">
    <div className="flex gap-2">
      <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"></div>
      <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce delay-150"></div>
      <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce delay-300"></div>
    </div>
    <p className="mt-2 text-sm">Pulse Dots</p>
  </div>

  {/* Loader 3 - Ripple Ping */}
  <div className="flex flex-col items-center">
    <span className="relative flex h-10 w-10">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-10 w-10 bg-green-500"></span>
    </span>
    <p className="mt-2 text-sm">Ripple Ping</p>
  </div>

  {/* Loader 4 - Dual Bars */}
  <div className="flex flex-col items-center">
    <div className="flex gap-1">
      <div className="w-1.5 h-6 bg-pink-500 animate-pulse"></div>
      <div className="w-1.5 h-6 bg-pink-500 animate-pulse delay-150"></div>
    </div>
    <p className="mt-2 text-sm">Dual Bars</p>
  </div>

  {/* Loader 5 - Square Spin */}
  <div className="flex flex-col items-center">
    <div className="w-8 h-8 bg-yellow-500 animate-spin rounded"></div>
    <p className="mt-2 text-sm">Rotating Square</p>
  </div>

  {/* Loader 6 - Dot Roller */}
  <div className="flex flex-col items-center">
    <div className="relative flex w-10 h-10 items-center justify-center">
      <div className="absolute w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-[0ms]"></div>
      <div className="absolute w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-[100ms] left-2"></div>
      <div className="absolute w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-[200ms] left-4"></div>
    </div>
    <p className="mt-2 text-sm">Dot Roller</p>
  </div>

  {/* Loader 7 - Clock Spinner */}
  <div className="flex flex-col items-center">
    <div className="w-12 h-12 border-4 border-gray-300 border-t-purple-600 rounded-full animate-spin"></div>
    <p className="mt-2 text-sm">Clock Spinner</p>
  </div>

  {/* Loader 8 - Mini Pulse Circles */}
  <div className="flex flex-col items-center">
    <div className="flex gap-1">
      <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
      <div className="w-2 h-2 bg-red-500 rounded-full animate-ping delay-150"></div>
      <div className="w-2 h-2 bg-red-500 rounded-full animate-ping delay-300"></div>
    </div>
    <p className="mt-2 text-sm">Mini Ping Circles</p>
  </div>

  {/* Loader 9 - Ring Pulse */}
  <div className="flex flex-col items-center">
    <div className="w-10 h-10 rounded-full border-4 border-cyan-500 animate-pulse"></div>
    <p className="mt-2 text-sm">Ring Pulse</p>
  </div>

  {/* Loader 10 - Ellipsis Dots */}
  <div className="flex flex-col items-center">
    <div className="flex gap-1">
      <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce"></div>
      <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce delay-100"></div>
      <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce delay-200"></div>
    </div>
    <p className="mt-2 text-sm">Ellipsis Dots</p>
  </div>

  {/* Loader 11 - Spinner with Gap */}
  <div className="flex flex-col items-center">
    <div className="w-12 h-12 border-4 border-l-transparent border-blue-600 rounded-full animate-spin"></div>
    <p className="mt-2 text-sm">Gap Spinner</p>
  </div>

  {/* Loader 12 - Bounce Circle */}
  <div className="flex flex-col items-center">
    <div className="w-10 h-10 rounded-full bg-indigo-500 animate-bounce"></div>
    <p className="mt-2 text-sm">Bounce Circle</p>
  </div>

  {/* Loader 13 - Flip Dot */}
  <div className="flex flex-col items-center">
    <div className="w-6 h-6 bg-pink-600 rounded-full transform animate-spin"></div>
    <p className="mt-2 text-sm">Flip Dot</p>
  </div>

  

  {/* Loader 15 - Floating Square */}
  <div className="flex flex-col items-center">
    <div className="w-8 h-8 bg-green-500 rounded-md animate-bounce"></div>
    <p className="mt-2 text-sm">Floating Square</p>
  </div>

        </div>
      </div>
    </div>
  );
}

export default Loaders;
