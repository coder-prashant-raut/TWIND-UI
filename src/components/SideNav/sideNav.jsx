// components/SideNav.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { navItems } from "../../data/SideNav";

const SideNav = ({ theme }) => {
  return (
    <div className={`h-screen w-64 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} p-6 overflow-y-auto sticky top-0 left-0`}>
      {navItems.map((section, index) => (
        <div key={index} className="mb-6">
          <h2 className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} font-semibold mb-2`}>
            {section.title}
          </h2>
          <ul className="space-y-2">
            {section.items.map((item, idx) => (
              <li key={idx}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    `block px-2 py-1 rounded transition-colors ${
                      isActive
                        ? "text-blue-600 dark:text-blue-400 font-medium"
                        : theme === 'dark' 
                          ? "text-gray-200 hover:text-blue-400" 
                          : "text-gray-700 hover:text-blue-500"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SideNav;