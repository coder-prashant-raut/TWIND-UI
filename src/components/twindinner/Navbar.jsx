import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
  } from "react-router-dom";

function Navbar() {

    const [scrolled, setScrolled] = useState(false);


      // Track scroll for sticky navbar effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav className={`fixed  top-0 left-0 right-0 z-80 transition-all duration-300 ease-in-out backdrop-blur-md ${
        scrolled
          ? "bg-white/80 text-black shadow-xl border-b border-gray-200 rounded-xl mt-4 mx-4 md:mx-40"
          : "bg-black/5 rounded-none border-white/10 mt-0 mx-0"
      }`}>
<div className="container  rounded-xl p-3  mx-auto flex justify-between items-center px-6">
  <h1 className="text-2xl font-bold">TWIND-UI</h1>
  <ul className="flex space-x-6">
    {["Home", "Navbars", "Footers", "Cards", "Buttons", "Heros"].map(
      (page) => (
        <li key={page}>
          <NavLink
            to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
            className={({ isActive }) =>
              `px-2 py-1 text-xl  rounded-lg transition ${
                isActive ? "bg-blue-500" : "hover:bg-blue-400"
              }`
            }
          >
            {page}
          </NavLink>
        </li>
      )
    )}
  </ul>
</div>
</nav>
  )
}

export default Navbar