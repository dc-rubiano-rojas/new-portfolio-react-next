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
    gitUrl: "https://github.com/dc-rubiano-rojas/REACT-landing",
    previewUrl: "https://dc-landing-page-clients.com/",
  },
  {
    id: 2,
    title: "My Pet Vaccines",
    description: "My Pet Vaccines is an app dedicated to organizing and managing your pet's vaccination records.",
    image: "/images/projects/2.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/dc-rubiano-rojas/my-pet-vaccines",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Ecommerce",
    description: "I've created an advanced ecommerce platform leveraging Next.js and Sanity for seamless content management",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://ecomerce-nextjs.vercel.app/",
  },
  {
    id: 4,
    title: "Walmart Picking App",
    description: "I develop and support web and mobile applications using React and React Native technologies. I utilize Apache Kafka for event-based architecture to process orders efficiently. Additionally, I manage releases to production, ensuring applications meet stakeholders' needs and add value.",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Av villas",
    description: "Development and maintenance of a web application to request credit cards, through services in Amazon Web Services",
    image: "/images/projects/5.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Plazas de mercado Distritales",
    description:
      "Tech lead developing and implementing an administration and an E-Commerce platform to locals markets. Work closely with app development team including project and product manager.",
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

  const filteredProjects = projectsData.filter((project) => {
    return project.tag.includes(tag);
  });

  return (
    <section id="projects">
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
