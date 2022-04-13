import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login';

const Navbar = () => {
  return (
    <div className="bg-white-800  h-16 w-full">
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
        <Login />
      </div>
    </div>
  );
};

export default Navbar;
