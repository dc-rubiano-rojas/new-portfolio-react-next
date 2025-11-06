"use client";
import React from "react";
import { motion } from "framer-motion";

const logos = [
  { src: "/logos-trabajos/av-villas.png", alt: "AV Villas" },
  { src: "/logos-trabajos/claro.jpg", alt: "Claro" },
  { src: "/logos-trabajos/cloudhesive.png", alt: "Cloudhesive" },
  { src: "/logos-trabajos/vass.png", alt: "VASS" },
  { src: "/logos-trabajos/walmart.png", alt: "Walmart" },
];

const CompanyLogos = () => {
  return (
    <section className="relative bg-[#0b0b0b] py-20 lg:py-18 overflow-hidden">
      {/* Fondo con luces difusas */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[180px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/10 blur-[160px] rounded-full"></div>
      </div>

      <div className="container relative mx-auto px-6">
        {/* Título */}
        <motion.h2
          className="text-center text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Companies I’ve Worked With
        </motion.h2>

        {/* Cuadrícula de logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 justify-items-center items-center">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="relative w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 flex justify-center items-center bg-[#111111]/60 border border-gray-700/40 rounded-2xl backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.08 }}
            >
              {/* Efecto de resplandor al hacer hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300" />

              {/* Logo */}
              <img
                src={logo.src}
                alt={logo.alt}
                className="object-contain w-4/5 h-4/5 filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
