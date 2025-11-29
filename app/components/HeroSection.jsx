"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#1a1a1a]">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-[420px] h-[420px] bg-purple-600/25 blur-[160px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[320px] h-[320px] bg-blue-500/20 blur-[150px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 relative z-10 items-center">
        {/* Text Section */}
        <motion.div
          className="md:col-span-7 flex flex-col justify-center text-center md:text-left order-2 md:order-1"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-7xl leading-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300">
              Hi, I’m Daniel
            </span>
            <br />

            <TypeAnimation
              sequence={[
                "Full-Stack Engineer",
                1500,
                "Backend Developer",
                1500,
                "AI & Cloud Engineer",
                1500,
                "Node.js | Python | AWS",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-white"
            />
          </h1>

          <p className="text-gray-300 text-lg lg:text-xl mb-10 max-w-2xl mx-auto md:mx-0">
            I design and build high-performance applications — from scalable backend 
            architectures to clean, modern front-end experiences. Passionate about 
            cloud computing, AI-powered solutions, and creating products that deliver 
            real impact.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 sm:gap-6">
            <Link
              href="#contact"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:opacity-90 transition duration-300 shadow-xl shadow-purple-500/30"
            >
              Let’s Work Together
            </Link>

            <Link
              href="https://drive.google.com/file/d/1a3iFvVc0RqisJAfrQZ70vEYBUarq3ib-/view?usp=sharing"
              className="px-8 py-3 rounded-full border border-gray-600 text-gray-200 font-semibold hover:bg-gray-800/60 transition duration-300"
            >
              Download CV
            </Link>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="md:col-span-5 flex justify-center md:justify-end order-1 md:order-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[360px] md:h-[360px] lg:w-[420px] lg:h-[420px] bg-gradient-to-tr from-purple-600 to-blue-500 p-[4px] rounded-full shadow-2xl shadow-blue-500/30">
            <div className="relative w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
              <Image
                src="/images/new-hero-image.jpg"
                alt="Hero image"
                fill
                className="object-cover rounded-full hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 60vw, (max-width: 1200px) 40vw, 450px"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
