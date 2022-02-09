import React from 'react';
import { useState } from 'react';

export const NavBar2 = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    return (
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen md:px-24 z-50">
        <div className="relative flex items-center justify-between">
          <a
            href="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            {/* <svg
              className="w-8 text-blue-650"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg> */}
            <img className='w-20' src='/cryspies.jpeg' alt='CrysPIEs Indie' />
            <span className="ml-2 text-xl font-bold tracking-wide text-blue-950">
              CrysPIEs
            </span>
          </a>
          <ul className="flex items-center hidden space-x-9 lg:flex">
            <li>
              <a
                href="#Games"
                aria-label="Our Games"
                title="Our Games"
                className="z-50 font-medium tracking-wide text-blue-950 transition-colors duration-200 hover:text-blue-650"
              >
                Games
              </a>
            </li>
            <li>
              <a
                href="#Books"
                aria-label="Our Books"
                title="Our Books"
                className="z-50 font-medium tracking-wide text-blue-950 transition-colors duration-200 hover:text-blue-650"
              >
                Books
              </a>
            </li>
            <li>
              <a
                href="#Apps"
                aria-label="Apps"
                title="Apps"
                className="z-50 font-medium tracking-wide text-blue-950 transition-colors duration-200 hover:text-blue-650"
              >
                Apps
              </a>
            </li>
            <li>
              <a
                href="#Socials"
                aria-label="About us"
                title="About us"
                className="z-50 font-medium tracking-wide text-blue-950 transition-colors duration-200 hover:text-blue-650"
              >
                Socials
              </a>
            </li>
            <li>
              <a
                href="/"
                className="z-50 font-extrabold inline-flex items-center justify-center h-12 px-6 tracking-wide text-blue-950 transition duration-200 rounded shadow-md bg-deep-orange-300 hover:bg-deep-orange-600 focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
              >
                Sign up
              </a>
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 right-0 w-full z-50">
                <div className="p-5 bg-white border rounded shadow-sm z-40">
                  <div className="flex items-center justify-between mb-4 z-30">
                    <div>
                      <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        {/* <svg
                          className="w-8 text-blue-650"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="currentColor"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg> */}
                        <img className='w-20' src='/cryspies.jpeg' alt='CrysPIEs Indie' />
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Company
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav className='relative left-5'>
                    <ul className="space-y-4">
                      <li>
                        <a
                          href="#Games"
                          aria-label="Our Games"
                          title="Our Games"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-650"
                        >
                          Games
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Books"
                          aria-label="Our Books"
                          title="Our Books"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-650"
                        >
                          Books
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Apps"
                          aria-label="Apps"
                          title="Apps"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-650"
                        >
                          Apps
                        </a>
                      </li>
                      <li>
                        <a
                          href="#Socials"
                          aria-label="About us"
                          title="About us"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-650"
                        >
                          Socials
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="inline-flex items-center justify-center w-3/5 h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-650 hover:bg-blue-950 focus:shadow-outline focus:outline-none"
                          aria-label="Sign up"
                          title="Sign up"
                        >
                          Sign up
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };