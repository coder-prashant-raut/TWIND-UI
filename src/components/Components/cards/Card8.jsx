import React from "react";

const Card8 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-r from-green-100 via-blue-100 to-purple-100">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row transform transition duration-500 hover:scale-105 hover:shadow-xl">
        
        {/* Image Section */}
        <div className="w-full md:w-1/3 h-48 md:h-auto overflow-hidden">
          <img
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            src="https://images.pexels.com/photos/70862/pexels-photo-70862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Nature scene"
          />
        </div>
        
        {/* Text Section */}
        <div className="p-6 flex flex-col justify-between w-full md:w-2/3">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-800 mb-3 tracking-tight">
              Blueberry
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Blueberries are sweet, juicy berries rich in antioxidants, perfect for snacking and healthy desserts.
            </p>
          </div>
          <div className="mt-6">
            <a
              href="#"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold py-2 px-5 rounded-full transition duration-300"
            >
              Read More →
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Card8;
export const Card8Code = `
import React from "react";

const Card8 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-r from-green-100 via-blue-100 to-purple-100">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row transform transition duration-500 hover:scale-105 hover:shadow-xl">
        
        {/* Image Section */}
        <div className="w-full md:w-1/3 h-48 md:h-auto overflow-hidden">
          <img
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            src="https://images.pexels.com/photos/70862/pexels-photo-70862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Nature scene"
          />
        </div>
        
        {/* Text Section */}
        <div className="p-6 flex flex-col justify-between w-full md:w-2/3">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-800 mb-3 tracking-tight">
              Blueberry
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Blueberries are sweet, juicy berries rich in antioxidants, perfect for snacking and healthy desserts.
            </p>
          </div>
          <div className="mt-6">
            <a
              href="#"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold py-2 px-5 rounded-full transition duration-300"
            >
              Read More →
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Card8;
`