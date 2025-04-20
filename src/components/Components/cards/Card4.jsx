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
          className=" size-10 rounded-full"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
export const card4Code = `
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
`
