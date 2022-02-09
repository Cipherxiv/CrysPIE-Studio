import react from "react";
import { useState } from "react";
import { motion } from 'framer-motion';

export const Hero2 = () => {
    return (
      <div className="relative bg-blue-350 flex flex-col-reverse py-16 lg:h-screen lg:pt-0 lg:flex-col lg:pb-0 ">
        <div className="inset-y-0 top-0 right-0 z-0 bg-blue-350 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-blue-350 transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover bg-slate-100 w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="/title.png"
            alt=""
          />
        </div>
        <div className="relative z-0 flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-0 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg xl:px-1 md:px-10">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-blue-950 uppercase rounded-full bg-deep-orange-300">
              Newcommers in the Indie Market!
            </p>
            <motion.div initial="hidden" animate="visible" variants={{
              hidden: {
                scale: .8,
                opacity: 0
              },
              visible: {
                scale: 1,
                opacity:1,
                transition: {delay:.4}
              },
            }}><h2 className="mb-10 font-sans text-3xl font-bold tracking-tight text-gray-900 xl:text-6xl md:text-5xl md:leading-none">
              We are{" "}
              <br className="hidden md:block" />
              Crys{' '}
              <span className=" text-blue-950 font-bold">
                Pixel Indie Entertainment Studio
              </span>
            </h2></motion.div>
            <p className="pr-5 mb-10 text-base text-blue-950 lg:text-xl md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
            <div className="flex items-center">
              <a
                href="/"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-blue-950 transition duration-200 rounded shadow-md bg-deep-orange-300 hover:bg-deep-orange-600 focus:shadow-outline focus:outline-none"
              >
                Store Page
              </a>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-bold text-blue-950 transition-colors duration-200 hover:text-blue-650"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };