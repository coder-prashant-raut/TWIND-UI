import React from "react";

const Card5 = () => {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-xl text-center p-8">
      <h3 className="text-3xl font-bold text-blue-600">Pro Plan</h3>
      <p className="text-gray-600 mt-2">$29.99/month</p>
      <ul className="mt-4 text-gray-500 space-y-2">
        <li>✔ Unlimited Access</li>
        <li>✔ Priority Support</li>
        <li>✔ Advanced Analytics</li>
      </ul>
      <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
        Subscribe Now
      </button>
    </div>
  );
};

export default Card5;
