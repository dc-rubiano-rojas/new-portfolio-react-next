"use client";
import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative bg-[#0b0b0b] border-t border-gray-800 text-gray-400 py-10 pt-2 overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gradient-to-b from-purple-600/20 to-transparent blur-[150px]" />

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Logo and name */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/dc-logo.png"
            width={60}
            height={60}
            alt="logo"
            className="rounded-full hover:scale-105 transition-transform duration-300"
          />
          <h3 className="text-white text-xl font-semibold tracking-wide">
            Daniel Rubiano
          </h3>
        </div>

        {/* Social icons */}
        <div className="flex gap-5 mt-6 md:mt-0">
          <a
            href="https://github.com/dc-rubiano-rojas"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:scale-110 transition-all duration-300"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-c-rubiano-rojas/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:scale-110 transition-all duration-300"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="mailto:dcrubiano01@gmail.com"
            className="hover:text-white hover:scale-110 transition-all duration-300"
          >
            <FaEnvelope className="text-2xl" />
          </a>
        </div>
      </div>

      {/* Divider line */}
      <div className="mt-10 border-t border-gray-800/60" />

      {/* Bottom text */}
      <p className="text-center text-sm text-gray-500 mt-6">
        © {new Date().getFullYear()} Daniel Rubiano. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
