import React from "react";

const Card7 = () => {
  return (
    <div className="bg-transparent min-h-screen flex items-center justify-center p-4">
      <div className="max-w-sm w-full rounded-3xl overflow-hidden shadow-2xl bg-white transform transition-all hover:scale-105 hover:shadow-xl">
        
        {/* Image */}
        <img
          className="w-full h-48 object-cover rounded-t-3xl"
          src="https://images.pexels.com/photos/952365/pexels-photo-952365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Yellow Lemon"
        />
        
        {/* Content */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Yellow Lemon</h2>
          <p className="text-gray-600 text-sm mb-6">
            Bright yellow citrus fruit, tangy flavor, rich in vitamin C, refreshing and zesty.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-xl transition transform hover:scale-105">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card7;
export const card7Code = `
import React from "react";

const Card7 = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 via-indigo-100 to-pink-100 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-sm w-full rounded-3xl overflow-hidden shadow-2xl bg-white transform transition-all hover:scale-105 hover:shadow-xl">
        
        {/* Image */}
        <img
          className="w-full h-48 object-cover rounded-t-3xl"
          src="https://images.pexels.com/photos/952365/pexels-photo-952365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Yellow Lemon"
        />
        
        {/* Content */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Yellow Lemon</h2>
          <p className="text-gray-600 text-sm mb-6">
            Bright yellow citrus fruit, tangy flavor, rich in vitamin C, refreshing and zesty.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-xl transition transform hover:scale-105">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card7;
`