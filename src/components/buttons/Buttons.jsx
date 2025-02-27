import React from 'react';
import Button1 from './Button1';
import Button2 from './Button2';
import Button3 from './Button3';
import Button4 from './Button4';
import Button5 from './Button5';

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
        <Button1 />
        <Button2 />
        <Button3 />
        <Button4 />
        <Button5 />
      </div>
    </div>
  );
}

export default Buttons;
