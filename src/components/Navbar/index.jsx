import React from 'react';
import { GoChevronDown } from 'react-icons/go';

const Navbar = () => {
  return (
    <div className="bg-white-800 h-16 shadow-md w-full">
      <div className="max-w-screen-2xl mx-auto h-full flex justify-between items-center">
        <div className="flex justify-center items-center gap-10">
          <img src="" alt="" className="w-14 h-14 rounded-full border-2 border-red-200" />
          <nav className="flex text-gray-800 font-medium gap-10">
            <ul className="hover:cursor-pointer hover:text-gray-500">Schedule Generator</ul>
            <ul className="hover:cursor-pointer hover:text-gray-500">Filter Subject</ul>
            <ul className="hover:cursor-pointer hover:text-gray-500">Blog Review</ul>
          </nav>
        </div>
        <div className="font-medium flex justify-center items-center gap-2">
          <img src="" alt="" />
          <div className="">Username</div>
          <GoChevronDown className="hover:cursor-pointer text-gray-400" />
        </div>
      </div>
      {/* <div className="max-w-screen-2xl px-5 mx-auto h-full flex justify-between items-center">
        <div className="flex justify-center gap-5">
          <img
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.superdthailand.com%2Fnew-arrival%2Ftest.html&psig=AOvVaw3UOSQyKwXsEDXR8tTQi7QA&ust=1647842408732000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJDElMSB1PYCFQAAAAAdAAAAABAE"
            alt=""
          />
          <div className="">Schedule Generator</div>
          <div className="">Filter Subject</div>
          <div className="">Blog Review</div>
        </div>
        <div className="">Profile</div>
      </div> */}
    </div>
  );
};

export default Navbar;
