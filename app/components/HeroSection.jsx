"use client";
import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl font-extrabold">
            <span
              id="intro-slider"
              className="text-transparent bg-clip-text bg-gradient-to-t from-primary to-tertiary"
            >
              Hello, I'm {}{" "}
            </span>
            <br></br>
            <TypeAnimation
              className="text-secondary"
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Daniel Rubiano",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Software Engineer",
                1000,
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            A skilled computer programmer who handles both front-end and
            back-end coding. Passionate full stack developer creating seamless
            digital experiences with a commitment to continual growth.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-secondary hover:bg-tertiary text-white">
              Hire me!
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-secondary hover:bg-slate-800 text-white mt-3">
              <Link
                href="https://drive.google.com/file/d/1pJSdclkB6wB0HCh22kNYeK51P5Nw6nic/view?usp=sharing"
                passHref
                className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"
              >
                Download CV
              </Link>
            </button>
          </div>
        </div>

        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/dev-portfolio-hero-img.png"
              alt="Hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
        {/*         <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "#2c3e50",
            zIndex: 0,
            transform: "skewY(-3deg)",
            transformOrigin: "top left",
          }}
        ></div> */}
      </div>
    </section>
  );
};

export default HeroSection;
