import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-3xl font-bold">Matt Richmond</h1>
          <p className="mt-2">Let's Create.</p>
        </div>
        <div className="flex justify-center md:justify-end space-x-4">
          <a href="#" className="text-white hover:text-gray-300 transition duration-300">Home</a>
          <a href="#" className="text-white hover:text-gray-300 transition duration-300">About</a>
          <a href="#" className="text-white hover:text-gray-300 transition duration-300">Services</a>
          <a href="#" className="text-white hover:text-gray-300 transition duration-300">Contact</a>
        </div>
        <div className="mt-6 flex justify-center md:justify-start items-center space-x-4">
          <a href="#" className="text-white hover:text-gray-300 transition duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-6 5l4 4M15 15l-4-4M10 20H4v-6"
              />
            </svg>
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;