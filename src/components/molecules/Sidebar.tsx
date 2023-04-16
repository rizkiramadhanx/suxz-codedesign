import React from 'react';

interface ISidebarProps {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: () => void;
}
const Sidebar = ({ children, isOpen, setIsOpen }: ISidebarProps) => {
  return (
    <nav
      className={
        'fixed overflow-hidden z-10 bg-gray-900 bg-opacity-50 inset-0 transform ease-in-out' +
        (isOpen
          ? ' transition-opacity opacity-100 duration-500 translate-x-0  '
          : ' transition-all delay-500 opacity-0 translate-x-full')
      }
    >
      <section
        className={
          'w-[300px] bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  ' +
          (isOpen ? ' translate-x-0 ' : ' translate-x-full ')
        }
      >
        {children}
      </section>
      <section
        className="w-[300px] h-full cursor-pointer "
        onClick={() => {
          setIsOpen();
        }}
      ></section>
    </nav>
  );
};

export default Sidebar;
