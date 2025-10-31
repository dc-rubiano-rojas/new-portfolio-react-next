"use client";
import React from "react";
import Link from "next/link";
import { FaRegEye } from "react-icons/fa6";
import { HiCodeBracket } from "react-icons/hi2";
import { motion } from "framer-motion";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <motion.div
      className="group bg-[#141414]/70 border border-gray-800 rounded-2xl overflow-hidden backdrop-blur-sm hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-500"
      whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
    >
      {/* Image */}
      <div
        className="relative h-52 md:h-64 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4">
          <Link
            href={previewUrl}
            target="_blank"
            className="p-3 border-2 border-gray-300 rounded-full hover:border-white hover:bg-white/10 transition"
          >
            <FaRegEye className="text-gray-300 text-2xl group-hover:text-white" />
          </Link>
          <Link
            href={gitUrl}
            target="_blank"
            className="p-3 border-2 border-gray-300 rounded-full hover:border-white hover:bg-white/10 transition"
          >
            <HiCodeBracket className="text-gray-300 text-2xl group-hover:text-white" />
          </Link>
        </div>
      </div>

      {/* Info */}
      <div className="p-6">
        <h5 className="text-white font-semibold text-xl mb-2">{title}</h5>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
