import React from 'react';

function Testimonial5() {
  return (
    <div className="max-w-3xl mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 rounded-xl shadow-lg relative">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-white opacity-50 rounded-t-xl"></div>

      <div className="flex items-center justify-center mb-6">
        {/* Avatar */}
        <img
          src="https://randomuser.me/api/portraits/women/32.jpg"
          alt="User Avatar"
          className="w-20 h-20 rounded-full border-4 border-white"
        />
      </div>

      <div className="text-center text-white relative z-10">
        {/* Testimonial Quote */}
        <p className="text-xl font-semibold italic">
          "This UI library has transformed the way I design websites. The components are easy to integrate, highly customizable, and look stunning on every screen."
        </p>

        {/* User Name and Role */}
        <div className="mt-6">
          <h3 className="text-2xl font-bold">Jessica Moore</h3>
          <p className="text-lg">Lead Developer, Tech Innovations</p>
        </div>
      </div>

      {/* Decorative Quote Icon */}
      <div className="absolute top-0 right-4 opacity-20 transform rotate-45">
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

export default Testimonial5;
export const testimonialCode5 = `
import React from 'react';

function Testimonial5() {
  return (
    <div className="max-w-3xl mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 rounded-xl shadow-lg relative">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-white opacity-50 rounded-t-xl"></div>

      <div className="flex items-center justify-center mb-6">
        {/* Avatar */}
        <img
          src="https://randomuser.me/api/portraits/women/32.jpg"
          alt="User Avatar"
          className="w-20 h-20 rounded-full border-4 border-white"
        />
      </div>

      <div className="text-center text-white relative z-10">
        {/* Testimonial Quote */}
        <p className="text-xl font-semibold italic">
          "This UI library has transformed the way I design websites. The components are easy to integrate, highly customizable, and look stunning on every screen."
        </p>

        {/* User Name and Role */}
        <div className="mt-6">
          <h3 className="text-2xl font-bold">Jessica Moore</h3>
          <p className="text-lg">Lead Developer, Tech Innovations</p>
        </div>
      </div>

      {/* Decorative Quote Icon */}
      <div className="absolute top-0 right-4 opacity-20 transform rotate-45">
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

export default Testimonial5;
`