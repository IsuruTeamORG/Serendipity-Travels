"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LOGO from "../../../../public/Logo.png";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="absolute top-0 w-full z-10 bg-transparent">
      <div className="mx-[5%] px-4">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src={LOGO}
              alt="Logo"
              width={80}
              height={80}
              className="h-20 w-auto"
            />
          </div>

          {/* Navigation for larger screens */}
          <nav className="hidden lg:flex space-x-10 text-white">
            <a
              href="#"
              className="hover:text-gray-400 transition-all duration-300"
            >

              Home
            </a>
            <a
              href="#"
              className="hover:text-gray-400 transition-all duration-300"
            >
              Packages
            </a>
            <a
              href="#"
              className="hover:text-gray-400 transition-all duration-300"
            >
              Destinations
            </a>
            <a
              href="#"
              className="hover:text-gray-400 transition-all duration-300"
            >
              Gallery
            </a>
            <a
              href="#"
              className="hover:text-gray-400 transition-all duration-300"
            >
              Contact
            </a>
          </nav>

          {/* Hamburger Menu for mobile screens */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: isOpen ? "auto" : 0 }}
          className="overflow-hidden bg-gray-800"
        >
          <nav className="lg:hidden flex flex-col space-y-6 py-4 text-white">
            <a
              href="#"
              className="hover:text-gray-400 transition-all duration-300 pl-4"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#"
              className="hover:text-gray-400 transition-all duration-300 pl-4"
              onClick={toggleMenu}
            >
              Packages
            </a>
            <a
              href="#"
              className="hover:text-gray-400 transition-all duration-300 pl-4"
              onClick={toggleMenu}
            >
              Destinations
            </a>
            <a
              href="#"
              className="hover:text-gray-400 transition-all duration-300 pl-4"
              onClick={toggleMenu}
            >
              Gallery
            </a>
            <a
              href="#"
              className="hover:text-gray-400 transition-all duration-300 pl-4"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </nav>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
