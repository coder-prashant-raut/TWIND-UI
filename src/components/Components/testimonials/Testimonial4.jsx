import React from 'react';

function Testimonial4() {
  return (
    <div className="max-w-3xl mx-auto bg-gray-100 p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 relative">
      <div className="flex items-center justify-center mb-6">
        {/* Avatar */}
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="User Avatar"
          className="w-16 h-16 rounded-full border-4 border-blue-500"
        />
      </div>

      <div className="text-center">
        {/* Testimonial Quote */}
        <p className="text-xl font-medium text-gray-800 italic">
          "The components in this library are beautifully crafted, allowing me to easily create engaging user interfaces that are both functional and stylish."
        </p>

        {/* User Name and Role */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-900">Sarah Williams</h3>
          <p className="text-sm text-gray-500">Senior UX Designer, DevTech</p>
        </div>
      </div>

      {/* Decorative Quote Icon */}
      <div className="absolute top-2 left-6 opacity-40">
        <svg
          className="text-gray-300 w-12 h-12"
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

export default Testimonial4;
export const testimonial4Code =  `
import React from 'react';

function Testimonial4() {
  return (
    <div className="max-w-3xl mx-auto bg-gray-100 p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 relative">
      <div className="flex items-center justify-center mb-6">
        {/* Avatar */}
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="User Avatar"
          className="w-16 h-16 rounded-full border-4 border-blue-500"
        />
      </div>

      <div className="text-center">
        {/* Testimonial Quote */}
        <p className="text-xl font-medium text-gray-800 italic">
          "The components in this library are beautifully crafted, allowing me to easily create engaging user interfaces that are both functional and stylish."
        </p>

        {/* User Name and Role */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-900">Sarah Williams</h3>
          <p className="text-sm text-gray-500">Senior UX Designer, DevTech</p>
        </div>
      </div>

      {/* Decorative Quote Icon */}
      <div className="absolute top-2 left-6 opacity-40">
        <svg
          className="text-gray-300 w-12 h-12"
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

export default Testimonial4;
`