import React from "react";

const Card4 = () => {
  return (
    <div className="max-w-md bg-white rounded-xl shadow-lg p-6 flex flex-col">
      <p className="text-gray-700 italic">
        "This platform has transformed my workflow and increased my
        productivity!"
      </p>
      <div className="mt-4 flex items-center">
        <img
          className="w-12 h-12 rounded-full"
          src="https://source.unsplash.com/100x100/?face,smile"
          alt="Reviewer"
        />
        <div className="ml-4">
          <h4 className="font-bold text-gray-900">Emily Smith</h4>
          <p className="text-gray-500 text-sm">Product Manager</p>
        </div>
      </div>
    </div>
  );
};

export default Card4;
