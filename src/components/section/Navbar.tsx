import React, { useEffect, useState } from 'react';
import Logo from '@/assets/logo.svg';
import Hamburger from '@/assets/hamburger.svg';
import { styles } from '@/css/styles';
import useWidth from '@/hooks/useWidth';
import Sidebar from '../molecules/Sidebar';

const Navbar = () => {
  /*
   * Sticky Navigation
   * @see https://theodorusclarence.com/library/sticky-nav
   */

  const [onTop, setOnTop] = useState(true);

  const handleScroll = () => {
    if (onTop !== (window.pageYOffset === 0)) {
      setOnTop(window.pageYOffset === 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  // Toggle sidebar

  const { width } = useWidth();

  const [open, SetIsOpen] = useState(false);

  const toggleSidebar = () => {
    SetIsOpen(!open);
  };

  useEffect(() => {
    if (width > 768) {
      SetIsOpen(false);
    }
  }, [width]);

  return (
    <nav
      className={`bg-white bg-opacity-20 backdrop-blur-md sticky z-50 top-0  transition-shadow ${
        +onTop ? '' : 'shadow-sm'
      }`}
    >
      <div className={`${styles['main-container']}} m-auto`}>
        <div className="flex items-center justify-between sm:h-[100px] h-[70px]  text-xl font-semibold">
          <div className="flex items-center">
            <img src={Logo} width={100} />
            <Sidebar isOpen={open} setIsOpen={() => null}>
              H
            </Sidebar>
            <ul className="md:flex items-center ml-[70px] gap-x-10  text-[#394360] hidden">
              <li className="text-underline whitespace-nowrap">Home</li>
              <li className="text-underline whitespace-nowrap">Learnings</li>
              <li className="text-underline whitespace-nowrap">About Us</li>
              <li className="text-underline whitespace-nowrap">Testimonial</li>
            </ul>
          </div>
          <div className="lg:flex gap-x-[42px] hidden">
            <button className="text-purple-brand">Login</button>
            <button className="bg-purple-brand text-white px-4 h-[52px] rounded-lg whitespace-nowrap">
              Sign Up
            </button>
          </div>
          <img
            src={Hamburger}
            className="md:hidden cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
