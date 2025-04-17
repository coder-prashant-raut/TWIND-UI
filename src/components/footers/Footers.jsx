import React from 'react';
import Footer1 from './Footer1';
import Footer2 from './Footer2';
import Footer3 from './Footer3';
import Footer4 from './Footer4';
import Footer5 from './Footer5';

function Footers({ theme }) {
  return (
    <div
      className={`max-w-6xl mx-auto space-y-10 py-10 pt-20 transition-all duration-500 relative overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-br from-black via-gray-900 to-black text-white"
          : "bg-gradient-to-br from-white via-slate-100 to-white text-gray-900"
      }`}
    >
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl font-bold font-mono">
          Modern Footer Components Library
        </h1>
        <p className="text-gray-600 sm:text-lg px-4 mt-2">
          Below are different modern footer designs that you can use in your React projects. Each footer component is
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
    How to Use These Footers?
  </h2>
  <p className="mt-2 text-sm sm:text-base">
    1️⃣ Each footer component is designed with modern and responsive styles. <br />
    2️⃣ Import the desired footer component into your React project and include it in your layout. <br />
    3️⃣ Customize colors, links, and branding according to your project requirements. <br />
    4️⃣ Ensure you have the necessary dependencies installed before usage.
  </p>

  <h2 className="text-xl font-semibold mt-4">Required Dependencies</h2>
  <ul className="list-disc list-inside mt-2 text-sm sm:text-base">
    <li>react</li>
    <li>tailwindcss</li>
    <li>font-awesome (for icons, optional)</li>
  </ul>

  <p className="mt-3 text-sm sm:text-base">
    Install dependencies using:
    <code className="bg-gray-200 text-gray-800 px-2 py-1 rounded">
      npm install react tailwindcss
    </code>
  </p>
</div>


      {/* Footer Components */}
      <div className="space-y-10">
        <Footer1 />
        <Footer2 />
        <Footer3 />
        <Footer4 />
        <Footer5 />
      </div>
    </div>
  );
}

export default Footers;
