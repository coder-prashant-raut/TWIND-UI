import React from 'react';

const Card9 = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 via-purple-100 to-pink-50 flex items-center justify-center min-h-screen py-8">
      <div className="flex gap-6 flex-wrap justify-center px-4">
        {/* Card 1 */}
        <div className="max-w-sm w-full sm:w-auto bg-white rounded-3xl shadow-2xl border border-gray-200 p-6 transform transition hover:scale-105 hover:shadow-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Pro Plan</h3>
          <p className="text-sm text-gray-500 mb-6">Perfect for freelancers and small teams</p>
          <div className="text-4xl font-extrabold text-gray-800 mb-4">$29<span className="text-base font-medium text-gray-500">/mo</span></div>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center text-gray-700"><span className="text-green-500 mr-2">✔</span>Unlimited Projects</li>
            <li className="flex items-center text-gray-700"><span className="text-green-500 mr-2">✔</span>Priority Support</li>
            <li className="flex items-center text-gray-700"><span className="text-green-500 mr-2">✔</span>Team Collaboration</li>
          </ul>
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl transition duration-300 shadow-md hover:shadow-lg">
            Choose Plan
          </button>
        </div>

        {/* Card 2 - Highlighted Plan */}
        <div className="max-w-sm w-full sm:w-auto bg-blue-600 text-white rounded-3xl shadow-2xl border-4 border-blue-800 p-6 transform transition hover:scale-105 hover:shadow-xl relative">
          <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
            POPULAR
          </div>
          <h3 className="text-2xl font-bold mb-2">Business Plan</h3>
          <p className="text-sm text-blue-100 mb-6">Ideal for growing businesses and startups</p>
          <div className="text-4xl font-extrabold mb-4">$59<span className="text-base font-medium text-blue-200">/mo</span></div>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center"><span className="text-green-300 mr-2">✔</span>Advanced Analytics</li>
            <li className="flex items-center"><span className="text-green-300 mr-2">✔</span>Dedicated Support</li>
            <li className="flex items-center"><span className="text-green-300 mr-2">✔</span>API Access</li>
          </ul>
          <button className="w-full bg-white text-blue-700 font-semibold py-2 px-4 rounded-xl transition duration-300 hover:bg-gray-100 shadow-md">
            Choose Plan
          </button>
        </div>

        {/* Card 3 */}
        <div className="max-w-sm w-full sm:w-auto bg-white rounded-3xl shadow-2xl border border-gray-200 p-6 transform transition hover:scale-105 hover:shadow-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Enterprise Plan</h3>
          <p className="text-sm text-gray-500 mb-6">Best for large companies with custom needs</p>
          <div className="text-4xl font-extrabold text-gray-800 mb-4">$99<span className="text-base font-medium text-gray-500">/mo</span></div>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center text-gray-700"><span className="text-green-500 mr-2">✔</span>Unlimited Users</li>
            <li className="flex items-center text-gray-700"><span className="text-green-500 mr-2">✔</span>Custom Integrations</li>
            <li className="flex items-center text-gray-700"><span className="text-green-500 mr-2">✔</span>24/7 Premium Support</li>
          </ul>
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl transition duration-300 shadow-md hover:shadow-lg">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card9;
export const card9Code = `
import React from 'react';

const Card9 = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 via-purple-100 to-pink-50 flex items-center justify-center min-h-screen py-8">
      <div className="flex gap-6 flex-wrap justify-center px-4">
        {/* Card 1 */}
        <div className="max-w-sm w-full sm:w-auto bg-white rounded-3xl shadow-2xl border border-gray-200 p-6 transform transition hover:scale-105 hover:shadow-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Pro Plan</h3>
          <p className="text-sm text-gray-500 mb-6">Perfect for freelancers and small teams</p>
          <div className="text-4xl font-extrabold text-gray-800 mb-4">$29<span className="text-base font-medium text-gray-500">/mo</span></div>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center text-gray-700"><span className="text-green-500 mr-2">✔</span>Unlimited Projects</li>
            <li className="flex items-center text-gray-700"><span className="text-green-500 mr-2">✔</span>Priority Support</li>
            <li className="flex items-center text-gray-700"><span className="text-green-500 mr-2">✔</span>Team Collaboration</li>
          </ul>
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl transition duration-300 shadow-md hover:shadow-lg">
            Choose Plan
          </button>
        </div>

        {/* Card 2 - Highlighted Plan */}
        <div className="max-w-sm w-full sm:w-auto bg-blue-600 text-white rounded-3xl shadow-2xl border-4 border-blue-800 p-6 transform transition hover:scale-105 hover:shadow-xl relative">
          <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
            POPULAR
          </div>
          <h3 className="text-2xl font-bold mb-2">Business Plan</h3>
          <p className="text-sm text-blue-100 mb-6">Ideal for growing businesses and startups</p>
          <div className="text-4xl font-extrabold mb-4">$59<span className="text-base font-medium text-blue-200">/mo</span></div>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center"><span className="text-green-300 mr-2">✔</span>Advanced Analytics</li>
            <li className="flex items-center"><span className="text-green-300 mr-2">✔</span>Dedicated Support</li>
            <li className="flex items-center"><span className="text-green-300 mr-2">✔</span>API Access</li>
          </ul>
          <button className="w-full bg-white text-blue-700 font-semibold py-2 px-4 rounded-xl transition duration-300 hover:bg-gray-100 shadow-md">
            Choose Plan
          </button>
        </div>

        {/* Card 3 */}
        <div className="max-w-sm w-full sm:w-auto bg-white rounded-3xl shadow-2xl border border-gray-200 p-6 transform transition hover:scale-105 hover:shadow-xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Enterprise Plan</h3>
          <p className="text-sm text-gray-500 mb-6">Best for large companies with custom needs</p>
          <div className="text-4xl font-extrabold text-gray-800 mb-4">$99<span className="text-base font-medium text-gray-500">/mo</span></div>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center text-gray-700"><span className="text-green-500 mr-2">✔</span>Unlimited Users</li>
            <li className="flex items-center text-gray-700"><span className="text-green-500 mr-2">✔</span>Custom Integrations</li>
            <li className="flex items-center text-gray-700"><span className="text-green-500 mr-2">✔</span>24/7 Premium Support</li>
          </ul>
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl transition duration-300 shadow-md hover:shadow-lg">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card9;`