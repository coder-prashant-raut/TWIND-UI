import React from "react";

const Card1 = () => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-gray-900 text-white transform hover:scale-105 transition-transform duration-300">
      {/* Image Section */}
      <img
        className="w-full h-48 object-cover"
        src="https://source.unsplash.com/400x300/?technology,ui"
        alt="Card Image"
      />

      {/* Card Content */}
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-blue-400 mb-3">
          Modern UI Card
        </h2>
        <p className="text-gray-300">
          This is a beautifully designed card component with a modern UI, smooth hover effects, and a stunning aesthetic.
        </p>

        {/* Action Buttons */}
        <div className="mt-5 flex justify-between items-center">
          <button className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg shadow-lg hover:bg-blue-600 transition-all">
            Learn More
          </button>
          <span className="text-gray-400 text-sm">Updated 2h ago</span>
        </div>
      </div>
    </div>
  );
};

export default Card1;
