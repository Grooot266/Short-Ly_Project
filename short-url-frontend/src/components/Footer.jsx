import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-[linear-gradient(90deg,_#d53369_0%,_#daae51_100%)] text-black py-8 z-40 relative">
      <div className="container mx-auto px-6 lg:px-14 flex flex-col lg:flex-row lg:justify-between items-center gap-4">
        <div className="text-center lg:text-left">
          <a href="/"><h2 className="text-3xl font-bold mb-2 hover:text-white">Short-ly</h2></a>
          <p className=" hover:text-white">Simplifying URL shortening for efficient sharing</p>
        </div>

        <p className="mt-4 lg:mt-0 hover:text-white">
          &copy; 2025 Short-ly. All rights reserved.
        </p>

        <div className="flex space-x-6 mt-4 lg:mt-0">
          <a href="#" className="hover:text-gray-200">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="hover:text-gray-200">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="hover:text-gray-200">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="hover:text-gray-200">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;