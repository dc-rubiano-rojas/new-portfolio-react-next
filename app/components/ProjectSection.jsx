"use client";
import React, { useState } from "react";

import CompanyLogos from "./CompanyLogos";

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
    <>
      <section
        id="projects"
        className="relative bg-[#0b0b0b] py-10 lg:py-10 overflow-hidden"
      >
        {/* ...contenido de proyectos */}
      </section>

      {/* Logos de compañías */}
      <CompanyLogos />
    </>
  );
};

export default ProjectSection;
