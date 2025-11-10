// src/components/Navbar.jsx
import React, { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { HiLink } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[linear-gradient(90deg,_#d53369_0%,_#daae51_100%)] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <HiLink size={28} className="text-black hover:text-white transition" />
          <a href="/">
          <h1 className="text-black text-2xl font-bold tracking-wide hover:text-white transition">Short-ly</h1>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="/" className=" text-black hover:text-white transition">Home</a>
          <a href="/about" className=" text-black hover:text-white transition">About</a>
          <a href="/register" className=" text-black hover:text-white transition">Sign-up</a>
        </div>

        {/* Social Media Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub className="text-black hover:text-white text-xl transition" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-black hover:text-white text-xl transition" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter className="text-black hover:text-white text-xl transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram className="text-black hover:text-white text-xl transition" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? (
              <HiX size={28} className="text-black hover:text-white" />
            ) : (
              <HiOutlineMenu size={28} className="text-black hover:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[linear-gradient(90deg,_#d53369_0%,_#daae51_100%)] text-white">
          <div className="px-6 py-4 flex flex-col space-y-4">
            <a href="/" className=" text-black hover:text-white transition" onClick={() => setIsOpen(false)}>Home</a>
            <a href="/about" className=" text-black hover:text-white transition" onClick={() => setIsOpen(false)}>About</a>
            <a href="/register" className=" text-black hover:text-white transition" onClick={() => setIsOpen(false)}>Sign-up</a>
           <div className="flex space-x-4 pt-2 border-t border-black">
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <FaGithub className="text-black hover:text-white text-xl transition" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedin className="text-black hover:text-white text-xl transition" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaTwitter className="text-black hover:text-white text-xl transition" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram className="text-black hover:text-white text-xl transition" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
