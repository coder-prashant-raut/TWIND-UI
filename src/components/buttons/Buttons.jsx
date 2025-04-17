import React from 'react';

function Buttons({ theme }) {
  const isDark = theme === 'dark';

  return (
    <div
      className={`min-h-screen mt-0 px-6 pt-20 py-24 flex flex-col items-center justify-center text-center transition-all duration-500 relative overflow-hidden ${
        isDark
          ? "bg-gradient-to-br from-black via-gray-900 to-black text-white"
          : "bg-gradient-to-br from-white via-slate-100 to-white text-gray-900"
      }`}
    >
      {/* Header Section */}
      <div className="max-w-6xl w-full mx-auto space-y-10">
        <div className="text-center px-4">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Modern Button Components Library
          </h1>
          <p className="mt-2 sm:text-lg text-gray-600 dark:text-gray-300">
            Below are different modern button designs that you can use in your React projects. Each button is responsive and customizable.
          </p>
        </div>

        {/* How to Use Section */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 sm:p-8">
          <h2 className="text-xl font-semibold">How to Use These Buttons?</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm sm:text-base leading-relaxed">
            1️⃣ Each button component is designed with modern and responsive styles. <br />
            2️⃣ Import the desired button into your React project and use it where needed. <br />
            3️⃣ Customize colors, sizes, and effects according to your project requirements. <br />
            4️⃣ Ensure you have the necessary dependencies installed.
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

        {/* Button Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 bg-gray-100 dark:bg-gray-900 rounded-xl">
          {[
            ['Neon Glow', 'bg-blue-600 shadow-blue-500/50 hover:shadow-blue-400/70'],
            ['Flip Effect', 'bg-purple-500 hover:rotate-180'],
            ['Slide Background', 'border-2 border-green-500 group'],
            ['Scale Bounce', 'bg-red-500 hover:scale-110 hover:-translate-y-1'],
            ['Text Stroke Effect', 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 border border-yellow-400 hover:bg-yellow-500 hover:text-white'],
            ['Gradient Pulse', 'bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse'],
            ['Glass Effect', 'bg-white/10 backdrop-blur-lg border border-white/20'],
            ['Border Expand', 'border-2 border-blue-500 group'],
            ['Shake Effect', 'bg-red-500 hover:animate-shake'],
            ['3D Press', 'bg-green-500 active:translate-y-1 active:shadow-none'],
            ['Neon Edge', 'border-2 border-pink-500 hover:shadow-pink-500/50'],
            ['Hover Glow', 'bg-yellow-500 text-gray-900 hover:shadow-yellow-500/50'],
            ['Text Fill', 'text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 border border-green-400 hover:text-white'],
            ['Ripple Effect', 'bg-blue-600 group'],
            ['Pop-up Effect', 'bg-gray-800 hover:scale-110'],
            ['Expand Outline', 'border border-gray-500 group'],
            ['Metallic Shine', 'bg-gradient-to-r from-gray-700 to-gray-900'],
            ['Soft Bounce', 'bg-purple-500 hover:scale-105'],
            ['Floating Effect', 'bg-indigo-500 hover:-translate-y-1'],
            ['Circular Button', 'bg-green-600 rounded-full hover:scale-110'],
            ['Color Morph', 'bg-pink-500 hover:bg-blue-500'],
            ['Magnetic Hover', 'bg-orange-500 hover:scale-105 hover:shadow-2xl'],
            ['Split Hover', 'border-2 border-red-500 group'],
            ['Pulse Border', 'bg-teal-500 border-2 border-transparent hover:border-white'],
            ['Flip Card', 'bg-gradient-to-r from-blue-600 to-blue-400 hover:rotate-180'],
            ['Sliding Underline', 'border border-gray-400 hover:border-white group']
          ].map(([label, classes], i) => (
            <button
              key={i}
              className={`relative px-6 py-3 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 ${classes}`}
            >
              {label.includes('Slide') || label.includes('Expand') || label.includes('Split') ? (
                <>
                  <span className="absolute inset-0 bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  <span className="relative z-10">{label}</span>
                </>
              ) : (
                label
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Buttons;
