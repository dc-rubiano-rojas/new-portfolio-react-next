"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Landing Page",
    description: "Modern restaurant landing page built with React.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/dc-rubiano-rojas/REACT-landing",
    previewUrl: "https://dc-landing-page-clients.com/",
  },
  {
    id: 2,
    title: "My Pet Vaccines",
    description:
      "Mobile app to organize and manage your pet’s vaccination records.",
    image: "/images/projects/2.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/dc-rubiano-rojas/my-pet-vaccines",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description:
      "Advanced e-commerce system using Next.js and Sanity CMS for content management.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://ecomerce-nextjs.vercel.app/",
  },
  {
    id: 4,
    title: "Walmart Picking App",
    description:
      "React + React Native solution using Kafka for event-driven order processing and efficient deployment pipelines.",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Av Villas Credit System",
    description:
      "AWS-based system for digital credit card requests using Lambdas, Step Functions, and Terraform.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Plazas de Mercado Distritales",
    description:
      "E-Commerce and administration platform for local markets with Node.js and PostgreSQL backend.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section
      id="projects"
      className="relative bg-[#0b0b0b] py-24 lg:py-28 overflow-hidden"
    >
      {/* Background blur lights */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-purple-600/20 blur-[180px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-600/20 blur-[160px] rounded-full"></div>
      </div>

      <div className="container relative mx-auto px-6">
        <motion.h2
          className="text-center text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-400 to-cyan-400 mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        {/* Filter Tags */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {["All", "Web", "Mobile"].map((t) => (
            <ProjectTag
              key={t}
              onClick={setTag}
              name={t}
              isSelected={tag === t}
            />
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 md:gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;
