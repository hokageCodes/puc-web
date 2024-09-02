"use client";
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (path) =>
    pathname === path ? 'text-[#01553d] font-bold underline' : 'text-gray-900';

  return (
    <nav className="bg-white border-gray-200 shadow-md fixed top-0 left-0 right-0 z-20">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <Image width={50} height={50} src="/assets/img/puc-logo.png" className="h-8 mr-3" alt="puc-logo" />
          <span className="text-[#01553d] self-center text-2xl font-semibold whitespace-nowrap">PaulUsoro & Co</span>
        </a>
        <button
          id="navbar-toggle"
          onClick={handleToggle}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`w-full md:block md:w-auto ${menuOpen ? 'block' : 'hidden'}`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
            <li>
              <a href="/" className={`text-xl block py-2 pl-3 pr-4 rounded md:p-0 ${isActive('/')}`}>Home</a>
            </li>
            <li>
              <a href="/the-firm" className={`text-xl block py-2 pl-3 pr-4 rounded md:p-0 ${isActive('/the-firm')}`}>The Firm</a>
            </li>
            <li>
              <a href="/expertise" className={`text-xl block py-2 pl-3 pr-4 rounded md:p-0 ${isActive('/expertise')}`}>Expertise</a>
            </li>
            <li>
              <a href="/people" className={`text-xl block py-2 pl-3 pr-4 rounded md:p-0 ${isActive('/people')}`}>People</a>
            </li>
            <li>
              <a href="/careers" className={`text-xl block py-2 pl-3 pr-4 rounded md:p-0 ${isActive('/careers')}`}>Careers</a>
            </li>
            <li>
              <a href="/contact-us" className={`text-xl block py-2 pl-3 pr-4 rounded md:p-0 ${isActive('/contact-us')}`}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
