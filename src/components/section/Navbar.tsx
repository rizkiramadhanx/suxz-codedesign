import React, { useEffect, useState } from 'react';
import Logo from '@/assets/logo.svg';
import Hamburger from '@/assets/hamburger.svg';
import { styles } from '@/css/styles';
import useWidth from '@/hooks/useWidth';
import Drawer from 'react-modern-drawer';

import 'react-modern-drawer/dist/index.css';

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

  const toggleDrawer = () => {
    SetIsOpen((prevState) => !prevState);
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
      <Drawer open={open} onClose={toggleDrawer} direction="left">
        <div className="flex flex-col mt-2" onClick={() => SetIsOpen(false)}>
          <img src={Logo} width={100} />
          <div className="flex flex-col gap-y-2 text-[#394360] mt-2 border-t">
            <a className="text-underline whitespace-nowrap ml-1" href="#home">
              Home
            </a>
            <a
              className="text-underline whitespace-nowrap ml-1"
              href="#learning"
            >
              Learnings
            </a>
            <a className="text-underline whitespace-nowrap ml-1" href="#about">
              About Us
            </a>
            <a
              className="text-underline whitespace-nowrap ml-1"
              href="#testimonial"
            >
              Testimonial
            </a>
          </div>
        </div>
        <div className="flex flex-col border bottom-1 mt-2 gap-y-2">
          <button className="text-purple-brand  ml-1 text-left">Login</button>
          <button className="bg-purple-brand pl-1 text-white h-[30px] text-left">
            Sign Up
          </button>
        </div>
      </Drawer>
      <div className={`${styles['main-container']}} m-auto`}>
        <div className="flex items-center justify-between sm:h-[100px] h-[70px]  text-xl font-semibold">
          <div className="flex items-center">
            <img src={Logo} width={100} />
            <div className="md:flex items-center ml-[70px] gap-x-10  text-[#394360] hidden">
              <a className="text-underline whitespace-nowrap" href="#home">
                Home
              </a>
              <a className="text-underline whitespace-nowrap" href="#learning">
                Learnings
              </a>
              <a className="text-underline whitespace-nowrap" href="#about">
                About Us
              </a>
              <a
                className="text-underline whitespace-nowrap"
                href="#testimonial"
              >
                Testimonial
              </a>
            </div>
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
