import React from 'react';
import Hero1 from './Hero1';
import Hero2 from './Hero2';
import Hero3 from './Hero3';
import Hero4 from './Hero4';
import Hero5 from './Hero5';
import Hero6 from './Hero6';
import Hero7 from './Hero7';
import Hero8 from './Hero8';

function Heros({ theme }) {
  return (
    <div
      className={ `pt-20 ${
        theme === "dark" ? "bg-transparant text-white" : "bg-white text-gray-900"
      } max-w-6xl mx-auto space-y-10 py-10`}
    >
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl font-bold font-mono">
          Modern Hero Sections Library
        </h1>
        <p className="sm:text-lg px-4 mt-2">
          Below are different modern hero section designs that you can use in your React projects. Each hero component is
          responsive and engaging.
        </p>
      </div>

      {/* How to Use Section */}
      <div
        className={`${
          theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"
        } shadow-lg rounded-xl p-6 sm:p-8`}
      >
        <h2 className="text-xl font-semibold">
          How to Use These Hero Sections?
        </h2>
        <p className="mt-2 text-sm sm:text-base">
          1️⃣ Each hero component is built with modern and interactive designs. <br />
          2️⃣ Import the desired hero section into your React project and place it on your homepage or landing page. <br />
          3️⃣ Customize colors, texts, animations, and images to match your brand identity. <br />
          4️⃣ Ensure you have TailwindCSS installed for proper styling.
        </p>

        <h2 className="text-xl font-semibold mt-4">Required Dependencies</h2>
        <ul className="list-disc list-inside mt-2 text-sm sm:text-base">
          <li>react</li>
          <li>tailwindcss</li>
          <li>framer-motion (optional, for advanced animations)</li>
        </ul>

        <p className="mt-3 text-sm sm:text-base">
          Install dependencies using:  
          <code className="bg-gray-200 text-gray-800 px-2 py-1 rounded">
            npm install react tailwindcss
          </code>
        </p>
      </div>

      {/* Hero Components */}
      <div className="space-y-10">
        <Hero1 />
        {/* GitHub Code Link Section */}
        <div className="text-center mt-6">
          <a
            href="https://github.com/coder-prashant-raut/TWIND-UI/blob/main/src/components/heros/Hero1.jsx"
            target="_blank"
            className="bg-blue-500 text-white px-4 py-2 rounded-md inline-block mt-2"
          >
            GitHub Code
          </a>
        </div>
        <Hero2 />
        {/* GitHub Code Link Section */}
        <div className="text-center mt-6">
          <a
            href="https://github.com/coder-prashant-raut/TWIND-UI/blob/main/src/components/heros/Hero2.jsx"
            target="_blank"
            className="bg-blue-500 text-white px-4 py-2 rounded-md inline-block mt-2"
          >
            GitHub Code
          </a>
        </div>
        <Hero3 />
        {/* GitHub Code Link Section */}
        <div className="text-center mt-6">
          <a
            href="https://github.com/coder-prashant-raut/TWIND-UI/blob/main/src/components/heros/Hero3.jsx"
            target="_blank"
            className="bg-blue-500 text-white px-4 py-2 rounded-md inline-block mt-2"
          >
            GitHub Code
          </a>
        </div>
        <Hero4 />
        {/* GitHub Code Link Section */}
        <div className="text-center mt-6">
          <a
            href="https://github.com/coder-prashant-raut/TWIND-UI/blob/main/src/components/heros/Hero4.jsx"
            target="_blank"
            className="bg-blue-500 text-white px-4 py-2 rounded-md inline-block mt-2"
          >
            GitHub Code
          </a>
        </div>
        <Hero5 />
        {/* GitHub Code Link Section */}
        <div className="text-center mt-6">
          <a
            href="https://github.com/coder-prashant-raut/TWIND-UI/blob/main/src/components/heros/Hero5.jsx"
            target="_blank"
            className="bg-blue-500 text-white px-4 py-2 rounded-md inline-block mt-2"
          >
            GitHub Code
          </a>
        </div>
        <Hero6 />
        {/* GitHub Code Link Section */}
        <div className="text-center mt-6">
          <a
            href="https://github.com/coder-prashant-raut/TWIND-UI/blob/main/src/components/heros/Hero6.jsx"
            target="_blank"
            className="bg-blue-500 text-white px-4 py-2 rounded-md inline-block mt-2"
          >
            GitHub Code
          </a>
        </div>
        <Hero7 />
        {/* GitHub Code Link Section */}
        <div className="text-center mt-6">
          <a
            href="https://github.com/coder-prashant-raut/TWIND-UI/blob/main/src/components/heros/Hero7.jsx"
            target="_blank"
            className="bg-blue-500 text-white px-4 py-2 rounded-md inline-block mt-2"
          >
            GitHub Code
          </a>
        </div>
        <Hero8 />
        {/* GitHub Code Link Section */}
        <div className="text-center mt-6">
          <a
            href="https://github.com/coder-prashant-raut/TWIND-UI/blob/main/src/components/heros/Hero8.jsx"
            target="_blank"
            className="bg-blue-500 text-white px-4 py-2 rounded-md inline-block mt-2"
          >
            GitHub Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default Heros;
