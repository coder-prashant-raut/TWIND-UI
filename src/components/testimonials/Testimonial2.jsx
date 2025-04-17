import React from 'react';

function Testimonial2() {
  return (
    <div className="max-w-md mx-auto bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
      <div className="p-8">
        {/* Testimonial Content */}
        <div className="flex items-center space-x-6">
          {/* Testimonial Image */}
          <img
            src="https://via.placeholder.com/80"
            alt="User"
            className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
          />
          <div>
            {/* User Name and Role */}
            <h3 className="text-2xl font-semibold">Alice Johnson</h3>
            <p className="text-sm">Creative Director</p>
          </div>
        </div>

        <div className="mt-6">
          {/* Testimonial Quote */}
          <p className="text-lg text-opacity-90 italic">
            "This UI library has elevated my projects to the next level. The components are sleek, functional, and incredibly customizable, making my job much easier!"
          </p>
        </div>
      </div>

      {/* Decorative Quote Icon */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-40">
        <svg
          className="text-white w-16 h-16"
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

export default Testimonial2;
