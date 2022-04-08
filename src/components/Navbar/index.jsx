import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Login from '../Login';

import { GoChevronDown } from 'react-icons/go';

const Navbar = () => {
  const [isAuthen, setIsAuthen] = useState(false);

  return (
    <div className="bg-white-800 h-16 w-full mb-6">
      <div className="max-w-screen-2xl mx-auto h-full flex justify-between items-center">
        <div className="flex justify-center items-center gap-10">
          <Link to="/">
            <img
              src="https://media.discordapp.net/attachments/903302214859255818/955820487735394364/Logo.png"
              alt=""
              className="h-16 w-16"
            />
          </Link>
          <nav className="flex text-gray-800 font-medium gap-10">
            <Link to="/generator">
              <div className="hover:cursor-pointer hover:text-gray-500">Schedule Generator</div>
            </Link>
            <Link to="/filter">
              <div className="hover:cursor-pointer hover:text-gray-500">Filter Subject</div>
            </Link>
            <Link to="/review">
              <div className="hover:cursor-pointer hover:text-gray-500">Blog Review</div>
            </Link>
          </nav>
        </div>
        {isAuthen ? (
          <div className="font-medium flex justify-center items-center gap-2">
            {/* user's image and user's firstname goes here */}
            <img
              src="https://media.discordapp.net/attachments/904607198263509024/915881080706461696/ExodiatheForbiddenOne-TF04-JP-VG.jpg"
              alt=""
              className="h-10 w-10 border-2 border-orange-400 rounded-full shadow-md"
            />
            <div className="">Username</div>
            <GoChevronDown className="hover:cursor-pointer text-gray-400" />
          </div>
        ) : (
          // <button className="bg-black py-2 px-6 rounded-full text-white font-medium hover:cursor-pointer hover:scale-105  transition-all ease-in-out ">
          //   Sign In
          // </button>
          <Login />
        )}
      </div>
    </div>
  );
};

export default Navbar;
