"use client";
import React, { useState } from "react";

import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Landing Page",
    description: "Landing page for restaurant",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "My Pet Vaccines",
    description: "Records to your pet vaccines",
    image: "/images/projects/2.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Ecommerce",
    description: "Ecommerce with NextJS and Sanity to manage content",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Walmart Picking App",
    description: "App to pick to products of an order",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Av villas",
    description: "Web app to request for a credit card",
    image: "/images/projects/5.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Plazas de mercado Distritales",
    description:
      "Tech lead in the creation and deployment of an administration and E-Commerce platform tailored to local markets. Collaborating closely with app development team, including project and product managers, to ensure security and seamless integration with multiple APIs. Provides guidance on code development and reuse",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section className="relative">
      <div
        className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
       from-secondary to-transparent 
       rounded-full h-60 w-60 z-0
       blur-lg absolute top-4/4 -right-2 transform
       -translate-x-1/2 -translate-1/2"
      ></div>

      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4">
        Projects
      </h2>

      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
