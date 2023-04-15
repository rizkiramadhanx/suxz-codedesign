import React from 'react';
import Logo from '@/assets/logo.svg';
import Hamburger from '@/assets/hamburger.svg';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-[1280px] px-[30px] sm:px-[70px] md:[110px] m-auto">
        <div className="flex items-center justify-between h-[100px] text-xl font-semibold">
          <div className="flex items-center">
            <img src={Logo} width={100} />
            <ul className="md:flex items-center ml-[70px] gap-x-10  text-[#394360] hidden">
              <li>Home</li>
              <li>Learnings</li>
              <li>About Us</li>
              <li>Testimonial</li>
            </ul>
          </div>
          <div className="md:flex gap-x-[42px] hidden">
            <button className="text-purple-brand">Login</button>
            <button className="bg-purple-brand text-white px-4 h-[52px] rounded-lg">
              Sign Up
            </button>
          </div>
          <img src={Hamburger} className="md:hidden" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
