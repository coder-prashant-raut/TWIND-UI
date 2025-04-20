import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";


const team = [
  {
    name: "Prashant Raut",
    image: "https://avatars.githubusercontent.com/u/162595999?s=400&u=94658085da622b6ea236bec37bb78d016bc033c3&v=4", // Replace with actual image
    github: "https://github.com/coder-prashant-raut",
    linkedin: "https://www.linkedin.com/in/prashant-raut-fullstac/",
    twitter: "https://x.com/prashant__raut",
  },
  {
    name: "Alok Tamrakar",
    image: "https://avatars.githubusercontent.com/u/136845497?s=400&u=eb8b1eedfb45765d5eb11cfe401637dd6d6de77f&v=4",
    github: "https://github.com/TammyAlok2",
    linkedin: "https://www.linkedin.com/in/alok-tamrakar-89a71a199/",
    twitter: "https://x.com/AlokTamrak12342",
  },
  {
    name: "Sumit Raskar",
    image: "https://avatars.githubusercontent.com/u/109581769?s=40&v=4",
    github: "https://github.com/SumitRaskar01",
    linkedin: "https://www.linkedin.com/in/sumit-raskar-5b6b92261/",
    twitter: "https://x.com/SumitRaska62485",
  },
];

function Footer({ theme }) {
  const isDark = theme === "dark";
  const [visibleIndex, setVisibleIndex] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  const showCard = (index) => {
    clearTimeout(timeoutId); // clear existing timer
    setVisibleIndex(index);
  };

  const hideCard = () => {
    const id = setTimeout(() => {
      setVisibleIndex(null);
    }, 3000);
    setTimeoutId(id);
  };

  return (
    <footer className={`${isDark ? "bg-black text-white" : "bg-gray-100 text-gray-800"} border-t border-white/10 py-10`}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Top Nav */}
        <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
              
<Link to="/">
  <h1 className="text-xl sm:text-2xl font-extrabold tracking-wider cursor-pointer">
    <span className={` ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
      Brahma
    </span>
    <span className="ml-1 bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text drop-shadow-md dark:text-transparent">
      UI
    </span>
  </h1>
</Link>


          <div className="flex space-x-6 text-lg font-medium">
            <a href="/" className="hover:underline transition-all">Home</a>
            <a href="https://github.com/coder-prashant-raut/TWIND-UI/" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all">
              GitHub
            </a>
          </div>
        </div>

        {/* Minds Behind BramhaUI */}
        <div className="mt-12">
          <div className="text-xl flex w-full justify-center items-center gap-2 font-semibold mb-6">Mind's Behind 
            
          <h1 className="text-xl sm:text-2xl font-extrabold tracking-wider">
    <span className={` ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
      Brahma
    </span>
    <span className="ml-1 bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text drop-shadow-md dark:text-transparent">
      UI
    </span>
  </h1>
          </div>
          <div className="flex justify-center gap-10 flex-wrap ">
            {team.map((person, idx) => (
              <div
                key={idx}
                className="relative flex flex-col items-center"
                onMouseEnter={() => showCard(idx)}
                onMouseLeave={hideCard}
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-20 h-20 object-cover rounded-full border-2 border-orange-500 shadow-lg transition-transform hover:scale-105"
                />

                {/* Hover card */}
                {visibleIndex === idx && (
                  <div className="absolute top-24 w-56 bg-white text-black p-4 rounded-xl shadow-2xl animate-fadeIn z-50">
                    <p className="font-semibold mb-2 text-center">{person.name}</p>
                    <div className="flex justify-center space-x-4 text-xl">
                      <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                        <FaLinkedin />
                      </a>
                      <a href={person.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-sky-500">
                        <FaTwitter />
                      </a>
                      <a href={person.github} target="_blank" rel="noopener noreferrer" className="hover:text-gray-800">
                        <FaGithub />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <p className="mt-10 text-sm opacity-70">&copy; {new Date().getFullYear()} BramhaUI. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
