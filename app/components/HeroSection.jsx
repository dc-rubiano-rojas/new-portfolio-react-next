"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-b from-[#0b0b0b] via-[#111] to-[#1a1a1a]">
      {/* Glow Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 -left-20 w-[400px] h-[400px] bg-purple-600/30 blur-[160px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-600/20 blur-[140px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-12 gap-8 relative z-10">
        {/* Text Section */}
        <motion.div
          className="col-span-7 flex flex-col justify-center text-center sm:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-7xl leading-tight mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-400 to-cyan-400">
              Hello, I’m
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Daniel Rubiano",
                1500,
                "Software Engineer",
                1500,
                "Full Stack Developer",
                1500,
                "AWS Cloud Enthusiast",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-white"
            />
          </h1>

          <p className="text-gray-300 text-base sm:text-lg lg:text-xl mb-8 max-w-2xl">
            I build scalable, performant, and elegant solutions — from intuitive
            frontends to reliable backend architectures. Passionate about
            innovation, cloud technologies, and creating digital experiences
            that truly connect.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Link
              href="#contact"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:opacity-90 transition duration-300 shadow-lg shadow-purple-500/30"
            >
              Hire me!
            </Link>

            <Link
              href="https://drive.google.com/file/d/1pJSdclkB6wB0HCh22kNYeK51P5Nw6nic/view?usp=sharing"
              passHref
              className="px-8 py-3 rounded-full border border-gray-500 text-gray-200 font-semibold hover:bg-gray-800/80 transition duration-300"
            >
              Download CV
            </Link>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="col-span-5 flex justify-center sm:justify-end mt-10 sm:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-[260px] h-[260px] lg:w-[380px] lg:h-[380px] rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 p-[2px]">
            <div className="w-full h-full rounded-full bg-[#0b0b0b] flex items-center justify-center overflow-hidden">
              <Image
                src="/images/dev-portfolio-hero-img.png"
                alt="Hero image"
                width={300}
                height={300}
                className="object-cover rounded-full hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
