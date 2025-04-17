import React from 'react';

function Testimonial3() {
  return (
    <div className="max-w-3xl mx-auto bg-white border-l-4 border-blue-500 p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
      <div className="flex flex-col items-center">
        {/* Testimonial Quote */}
        <p className="text-2xl font-semibold text-gray-800 text-center italic">
          "This UI library has completely transformed the way I build interfaces. The components are so intuitive and easy to use, I highly recommend it to anyone!"
        </p>

        {/* User Name and Role */}
        <div className="mt-6 text-center">
          <h3 className="text-xl font-semibold text-gray-900">John Doe</h3>
          <p className="text-sm text-gray-500">Lead Developer, Tech Co.</p>
        </div>
      </div>

      {/* Decorative Quote Icon */}
      <div className="absolute top-2 right-4 opacity-30">
        <svg
          className="text-gray-300 w-16 h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 8a6 6 0 1 0-6 6H6l4 4v-4H9a9 9 0 1 1 9-9z"></path>
        </svg>
      </div>
    </div>
  );
}

export default Testimonial3;
