import react from "react";
import { useState } from "react";

export const Hero4 = () => {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12">
      <div className="flex md:pt-24 flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <div className="mb-16 ml-12 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase bg-deep-orange-300 text-blue-950 rounded-full">New Mobile Game</p>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none max-w-lg mb-6">
              Everything you
              <br className="hidden md:block" />
              can imagine{' '}
              <span className="inline-block text-blue-950">in your palm</span>
            </h2>
            <p className="text-gray-700 text-base md:text-lg">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.</p>
          </div>
          <div className="flex items-center space-x-3">
            <a href="/" className="w-32 transition duration-300 hover:shadow-lg">
              <img src="https://kitwind.io/assets/kometa/app-store.png" className="object-cover object-top w-full h-auto mx-auto" alt="" />
            </a>
            <a href="/" className="w-32 transition duration-300 hover:shadow-lg">
              <img src="https://kitwind.io/assets/kometa/google-play.png" className="object-cover object-top w-full h-auto mx-auto" alt="" />
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center xl:justify-end">
          <div className="xl:w-5/12 md:w-4/12 sm:w-4/12 w-4/12">
            <img className="object-cover" src="/level-phone.png" alt="Android Game" />
          </div>
          <div className="xl:w-4/12 md:w-4/12 sm:w-4/12 w-4/12 -ml-16 lg:-ml-32">
            <img className="object-cover" src="/level2-phone.png" alt="Mobile Game" />
          </div>
        </div>
      </div>
    </div>
  );
};