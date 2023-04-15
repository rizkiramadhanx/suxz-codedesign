import React from 'react';
import Logo from '@/assets/logo.svg';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-[1280px] px-[30px] sm:px-[70px] md:[110px] m-auto">
        <div className="flex items-center justify-between h-[100px]">
          <div className="flex items-center">
            <img src={Logo} width={100} />
            <ul className="flex items-center ml-[70px] gap-x-10">
              <li>Home</li>
              <li>Learnings</li>
              <li>About Us</li>
              <li>Testimonial</li>
            </ul>
          </div>
          <div>
            <button>Login</button>
            <button>Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
