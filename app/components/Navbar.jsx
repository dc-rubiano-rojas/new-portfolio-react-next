"use client";
import React, { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 
      backdrop-blur-lg bg-[#0b0b0b]/80 border-b border-gray-800
      transition-all duration-300 ease-in-out`}
    >
      <div className="flex container items-center justify-between mx-auto px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/dc-logo.png"
            width={52}
            height={52}
            alt="logo"
            className="rounded-full hover:scale-105 transition-transform duration-300"
          />
          <span className="hidden sm:block text-white text-xl font-semibold tracking-wide">
            Daniel Rubiano
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.title}
              href={link.path}
              title={link.title}
              className="text-gray-300 hover:text-white hover:underline underline-offset-8 decoration-purple-500 transition-all duration-300"
            />
          ))}
        </div>

        {/* Mobile Button */}
        <div className="block md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="p-2 text-gray-300 rounded-md border border-gray-600 hover:text-white hover:border-white transition-all"
          >
            {navbarOpen ? (
              <MdClose className="h-6 w-6" />
            ) : (
              <GiHamburgerMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {navbarOpen && (
        <MenuOverlay
          links={navLinks}
          className="animate-slideDown bg-[#0b0b0b]/95 backdrop-blur-md"
        />
      )}
    </nav>
  );
};

export default NavBar;
