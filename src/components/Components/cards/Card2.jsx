import React from "react";

const Card2 = () => {
  return (
    <div className="max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        className="w-full h-56 object-cover"
        src="https://source.unsplash.com/400x300/?technology,blog"
        alt="Blog"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900">Modern UI Trends</h3>
        <p className="text-gray-600 mt-2">
          Discover the latest trends in UI/UX design and how they shape the
          future of web development.
        </p>
        <button className="mt-4 px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Card2;
