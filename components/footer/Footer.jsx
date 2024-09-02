"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-[#01553d]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 flex justify-between items-center flex-col gap-8 lg:flex-row">
          <a href="/" className="flex justify-center">
            <Image
              priority
              width={100}
              height={100}
              src="/assets/img/puc-logo.png"
              className="mr-3"
              alt="codewithfaraz Logo"
            />
          </a>
          <ul className="text-lg text-center sm:flex items-center justify-center gap-14 lg:gap-10 xl:gap-14 transition-all duration-500">
            <li>
              <Link legacyBehavior href="/about">
                <a className="text-white hover:text-gray-400">About</a>
              </Link>
            </li>
            <li className="sm:my-0 my-2">
              <Link legacyBehavior href="/expertise">
                <a className="text-white hover:text-gray-400">Practice Areas</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/people">
                <a className="text-white hover:text-gray-400">People</a>
              </Link>
            </li>
            <li className="sm:my-0 my-2">
              <Link legacyBehavior href="/careers">
                <a className="text-white hover:text-gray-400">Careers</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/contact">
                <a className="text-white hover:text-gray-400">Contact</a>
              </Link>
            </li>
          </ul>
          <div className="flex space-x-4 sm:justify-center">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-indigo-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z"
                  fill="white"
                />
              </svg>
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-indigo-600"
            >
              <svg className="w-[1.25rem] h-[1.125rem] text-white" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.70975 7.93663C4.70975 6.65824 5.76102 5.62163 7.0582 5.62163C8.35537 5.62163 9.40721 6.65824 9.40721 7.93663C9.40721 9.21502 8.35537 10.2516 7.0582 10.2516C5.76102 10.2516 4.70975 9.21502 4.70975 7.93663ZM3.43991 7.93663C3.43991 9.90608 5.05982 11.5025 7.0582 11.5025C9.05658 11.5025 10.6765 9.90608 10.6765 7.93663C10.6765 5.96719 9.05658 4.37074 7.0582 4.37074C5.05982 4.37074 3.43991 5.96719 3.43991 7.93663ZM9.97414 4.22935C9.97408 4.39417 10.0236 4.55531 10.1165 4.69239C10.2093 4.82946 10.3413 4.93633 10.4958 4.99946C10.6503 5.06259 10.8203 5.07916 10.9844 5.04707C11.1484 5.01498 11.2991 4.93568 11.4174 4.81918C11.5357 4.70268 11.6163 4.55423 11.649 4.39259C11.6817 4.23095 11.665 4.06339 11.6011 3.91109C11.5371 3.7588 11.4288 3.6286 11.2898 3.53698C11.1508 3.44536 10.9873 3.39642 10.8201 3.39635H10.8197C10.5955 3.39646 10.3806 3.48424 10.222 3.64043C10.0635 3.79661 9.97434 4.00843 9.97414 4.22935ZM4.21142 13.5892C3.52442 13.5584 3.15101 13.4456 2.90286 13.3504C2.57387 13.2241 2.33914 13.0738 2.09235 12.8309C1.84555 12.588 1.69278 12.3569 1.56527 12.0327C1.46854 11.7882 1.3541 11.4201 1.32287 10.7431C1.28871 10.0111 1.28189 9.79119 1.28189 7.93669C1.28189 6.08219 1.28927 5.86291 1.32287 5.1303C1.35416 4.45324 1.46944 4.08585 1.56527 3.84069C1.69335 3.51647 1.84589 3.28513 2.09235 3.04191C2.3388 2.79869 2.57331 2.64813 2.90286 2.52247C3.1504 2.42713 3.52442 2.31459 4.21142 2.28332C5.06561 2.25204 5.55136 2.25877 7.0582 2.25877C8.56505 2.25877 9.0518 2.25204 9.96332 2.28332C10.6447 2.31459 11.0199 2.42713 11.2714 2.52247C11.6063 2.64621 11.846 2.79812 12.0977 3.04191C12.3494 3.28513 12.5045 3.51647 12.7343 3.84069C12.8359 4.08452 12.9493 4.45135 12.9807 5.1303C13.014 5.86291 13.0214 6.08219 13.0214 7.93663C13.0214 9.79112 13.014 10.0111 12.9807 10.7431C12.9493 11.4201 12.8359 11.7882 12.7343 12.0327C12.5045 12.3569 12.3494 12.588 12.0977 12.8309C11.846 13.0738 11.6063 13.2241 11.2714 13.3504C11.0234 13.4456 10.6504 13.5584 9.96332 13.5892C9.07136 13.6203 8.52508 13.6158 7.0582 13.6158C5.59132 13.6158 5.04221 13.6203 4.21142 13.5892Z"
                  fill="white"
                />
              </svg>
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="w-9 h-9 rounded-full bg-gray-800 flex justify-center items-center hover:bg-indigo-600"
            >
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.5 21C3.396 21 2.5 20.104 2.5 19V5C2.5 3.896 3.396 3 4.5 3H19.5C20.604 3 21.5 3.896 21.5 5V19C21.5 20.104 20.604 21 19.5 21H4.5ZM4.5 1C2.014 1 0 3.014 0 5V19C0 20.986 2.014 23 4.5 23H19.5C21.986 23 24 20.986 24 19V5C24 3.014 21.986 1 19.5 1H4.5ZM6 10H18V12H6V10ZM6 15H18V17H6V15ZM6 20H18V22H6V20Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
