import React from 'react';

function Testimonial1() {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-center space-x-4">
          {/* Testimonial Image */}
          <img
         src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            {/* User Name and Role */}
            <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
            <p className="text-sm text-gray-500">Software Engineer</p>
          </div>
        </div>

        <div className="mt-4">
          {/* Testimonial Content */}
          <p className="text-gray-600 text-lg italic">
            "This UI library has completely transformed my development workflow. The components are easy to integrate, beautifully designed, and highly customizable. I can focus on building my app rather than spending time on UI design."
          </p>
        </div>
      </div>

      {/* Testimonial Quote Icon */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <svg
          className="text-blue-500 w-16 h-16"
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

export default Testimonial1;
export const testimonial1Code = `
import React from 'react';

function Testimonial1() {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-center space-x-4">
          {/* Testimonial Image */}
          <img
         src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            {/* User Name and Role */}
            <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
            <p className="text-sm text-gray-500">Software Engineer</p>
          </div>
        </div>

        <div className="mt-4">
          {/* Testimonial Content */}
          <p className="text-gray-600 text-lg italic">
            "This UI library has completely transformed my development workflow. The components are easy to integrate, beautifully designed, and highly customizable. I can focus on building my app rather than spending time on UI design."
          </p>
        </div>
      </div>

      {/* Testimonial Quote Icon */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <svg
          className="text-blue-500 w-16 h-16"
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

export default Testimonial1;
`