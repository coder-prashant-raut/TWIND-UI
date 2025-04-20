import React from "react";

const Card3 = () => {
  return (
    <div className="max-w-sm bg-gray-100 rounded-xl overflow-hidden shadow-lg text-center">
      <img
        className="w-full h-48 object-cover"
        src="https://plus.unsplash.com/premium_photo-1669644856868-6613f6683346?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Product"
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-900">Nike Air Max</h3>
        <p className="text-gray-600">$120.00</p>
        <button className="mt-3 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Card3;
export const card3Code = `
import React from "react";

const Card3 = () => {
  return (
    <div className="max-w-sm bg-gray-100 rounded-xl overflow-hidden shadow-lg text-center">
      <img
        className="w-full h-48 object-cover"
        src="https://source.unsplash.com/400x300/?shoes,sneakers"
        alt="Product"
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-900">Nike Air Max</h3>
        <p className="text-gray-600">$120.00</p>
        <button className="mt-3 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
          Buy Now
        </button>
      </div>
    </div>
  );
};

`