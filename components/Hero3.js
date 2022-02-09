import react from "react";
import { useState } from "react";

export const Hero3 = () => {
    return (
      <div className="bg-white relative flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-60 xl:py-52 md:px-8 sm:max-w-full md:max-w-full">
        <div className="z-0 flex justify-center h-full overflow-hidden lg:pt-24 lg:pb-25 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute sm:py-16 sm:pb-20 lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
          <img
            src="/laptop.png"
            className="object-cover object-right w-full h-auto lg:w-auto lg:h-full"
            alt=""
          />
        </div>
        <div className=" relative flex justify-end max-w-xl mx-auto xl:pr-32 xl:pt-16 lg:max-w-screen-xl lg:pb-10">
          <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-blue-950 uppercase rounded-full bg-deep-orange-300">
                  New PC game
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Experience a Unique Survival{' '}
                <span className=" text-blue-950">
                  Role Playing Game
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
              </p>
            </div>
            <form>
              <div className="flex items-center mt-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-950 hover:bg-blue-650 focus:shadow-outline focus:outline-none"
                >
                  Steam Store
                </button>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-950 hover:text-blue-650"
                >
                  Learn more
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };