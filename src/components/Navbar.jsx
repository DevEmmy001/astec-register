import React, { useState } from "react";
import logo from "../assets/ResLoginLNW-removebg-preview.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-green-500 text-white font-Poppins fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="items-center flex font-bold text-sm">
          <img src={logo} className="w-10" alt="" />
          <p>
            Adventist Secondary Technical College Owerrinta Student Registration
            Form
          </p>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-4">
          <a href="#home" className="hover:text-gray-200">
            Home
          </a>
          <a href="#about" className="hover:text-gray-200">
            About
          </a>
          <a href="#services" className="hover:text-gray-200">
            Services
          </a>
          <a href="#contact" className="hover:text-gray-200">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-green-600">
          <ul className="space-y-2 px-4 py-4">
            <li>
              <a href="#home" className="block hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a
                href="https://astecowerrintaportal.com/"
                className="block hover:text-gray-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="https://astecowerrintaportal.com/"
                className="block hover:text-gray-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="https://astecowerrintaportal.com/"
                className="block hover:text-gray-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
