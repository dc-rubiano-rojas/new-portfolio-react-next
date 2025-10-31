"use client";
import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const baseStyle =
    "cursor-pointer px-5 py-2 text-sm rounded-full border transition-all duration-300";

  const activeStyle =
    "bg-gradient-to-r from-purple-600 to-blue-600 text-white border-transparent shadow-md shadow-purple-500/30";

  const inactiveStyle =
    "border-gray-600 text-gray-300 hover:text-white hover:border-purple-400";

  return (
    <button
      onClick={() => onClick(name)}
      className={`${baseStyle} ${isSelected ? activeStyle : inactiveStyle}`}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
