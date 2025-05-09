import React from "react";

const Card1 = () => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden border-2 shadow-lg bg-gray-900 text-white transform hover:scale-105 transition-transform duration-300">
      {/* Image Section */}
      <img src="https://images.unsplash.com/photo-1707910393331-0145331bc039?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Sample Image" className="rounded-lg shadow-lg" />


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
export const card1Code = `
import React from "react";

const Card1 = () => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden border-2 shadow-lg bg-gray-900 text-white transform hover:scale-105 transition-transform duration-300">
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
`