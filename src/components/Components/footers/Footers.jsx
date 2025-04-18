import React from 'react';
import Footer1 from './Footer1';
import Footer2 from './Footer2';
import Footer3 from './Footer3';
import Footer4 from './Footer4';
import Footer5 from './Footer5';

function Footers() {
  return (
    <div className="max-w-6xl mx-auto space-y-10 py-10">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Modern Footer Components Library
        </h1>
        <p className="text-gray-600 sm:text-lg px-4 mt-2">
          Below are different modern footer designs that you can use in your React projects. Each footer component is 
          responsive and customizable.
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
