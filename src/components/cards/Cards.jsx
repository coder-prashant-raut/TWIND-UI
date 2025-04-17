import React from 'react';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';
import Card5 from './Card5';
import Card6 from './Card6';

function Cards({ theme }) {
  return (
    <div 
      className={ ` pt-20  ${
        theme === "dark" ? "bg-transparent text-white" : "bg-white text-gray-900"
      } max-w-6xl mx-auto space-y-10 py-10`}
    >
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl font-bold font-mono">
          Modern Cards Components Library
        </h1>
        <p className="sm:text-lg px-4 mt-2">
          Below are different modern card designs that you can use in your React projects. Each card component is
          responsive and customizable.
        </p>
      </div>

      {/* How to Use Section */}
      <div
        className={`${
          theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-900"
        } shadow-lg rounded-xl p-6 sm:p-8`}
      >
        <h2 className="text-xl font-semibold">
          How to Use These Cards?
        </h2>
        <p className="mt-2 text-sm sm:text-base">
          1️⃣ Each card component is designed with modern and responsive styles. <br />
          2️⃣ Import the desired card component into your React project and include it in your layout. <br />
          3️⃣ Customize colors, text, and images according to your project requirements. <br />
          4️⃣ Ensure you have the necessary dependencies installed before usage.
        </p>

        <h2 className="text-xl font-semibold mt-4">Required Dependencies</h2>
        <ul className="list-disc list-inside mt-2 text-sm sm:text-base">
          <li>react</li>
          <li>tailwindcss</li>
          <li>lucide-react (for icons, optional)</li>
        </ul>

        <p className="mt-3 text-sm sm:text-base">
          Install dependencies using:
          <code className="bg-gray-200 text-gray-800 px-2 py-1 rounded">
            npm install react tailwindcss lucide-react
          </code>
        </p>
      </div>

      {/* Card Components */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
        <Card5 />
        <Card6 />
      </div>
    </div>
  );
}

export default Cards;
