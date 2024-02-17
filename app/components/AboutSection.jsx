"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";

import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Javascript</li>
        <li>Typescript</li>
        <li>NodeJs</li>
        <li>NestJs</li>
        <li>React</li>
        <li>NextJs</li>
        <li>React-native</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Specialization in Software Engineering</li>
        <li>Bachelor Degree in Sound Engineer</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Devops with AWS</li>
        <li>Ethereum Developer Professional</li>
        <li>Master In Nodejs</li>
        <li>Certification MTA software Development Fundamentals</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-me-section.png" width={500} height={500} alt="about-me" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
          <p className="text-base md:text-lg">
            I am a dedicated and efficient fullstack developer, experienced in
            crafting and maintaining both web and mobile applications. My skill
            set spans front-end and back-end development, allowing me to
            seamlessly merge usability and user experience with technical
            expertise to create captivating digital experiences.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectedTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectedTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectedTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certification{" "}
            </TabButton>
          </div>

          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
