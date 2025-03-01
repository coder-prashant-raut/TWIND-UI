import React from "react";

const Card6 = () => {
  return (
    <div className="max-w-xs bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 rounded-2xl shadow-lg text-center">
      <img
        className="w-24 h-24 mx-auto rounded-full border-4 border-white"
        src="https://source.unsplash.com/100x100/?face,profile"
        alt="Profile"
      />
      <h3 className="mt-4 text-xl font-semibold">John Doe</h3>
      <p className="text-gray-200">UI/UX Designer</p>
      <button className="mt-4 px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-100 transition">
        Follow
      </button>
    </div>
  );
};

export default Card6;
