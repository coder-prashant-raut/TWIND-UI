import React from "react";

const Card6 = () => {
  return (
    <div className="max-w-xs bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 rounded-2xl shadow-lg text-center">
      <img
        className="w-24 h-24 mx-auto rounded-full border-4 border-white"
        src="https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
export const card6Code = `
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
`