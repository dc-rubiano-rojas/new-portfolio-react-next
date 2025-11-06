"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-none space-y-2">
        <li>⚡ JavaScript / TypeScript</li>
        <li>⚙️ Node.js / NestJS</li>
        <li>⚛️ React / Next.js / React Native</li>
        <li>☁️ AWS (Lambda, API Gateway, DynamoDB)</li>
        <li>🧱 PostgreSQL / MongoDB</li>
        <li>🚀 Terraform / CI/CD (Jenkins, CircleCI)</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-none space-y-2">
        <li>🎓 Master’s in Artificial Intelligence — Universidad de La Salle</li>
        <li>💻 Specialization in Software Engineering — Universidad Antonio Nariño</li>
        <li>🎵 Bachelor’s in Sound Engineering — Universidad San Buenaventura</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-none space-y-2">
        <li>🏅 DevOps with AWS (Smart Data, 2023)</li>
        <li>🪙 Ethereum Developer Professional</li>
        <li>🧠 Master in Node.js / Master in JavaScript (Udemy)</li>
        <li>💻 MTA: Software Development Fundamentals</li>
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
    <section
      className="relative bg-[#0b0b0b] py-18 lg:py-28 lg:pb-1 overflow-hidden"
      id="about"
    >
      {/* Background glow */}
      <div className="absolute top-10 left-1/4 w-[400px] h-[400px] bg-purple-600/20 blur-[180px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-600/20 blur-[160px] rounded-full"></div>

      <div className="container relative mx-auto px-6 md:grid md:grid-cols-2 gap-12 items-center">
        {/* Left visual with logo */}
        <motion.div
          className="flex justify-center md:justify-start"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative w-[280px] h-[280px] lg:w-[400px] lg:h-[400px] flex items-center justify-center">
            {/* Outer rotating glow */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 blur-2xl opacity-40"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              }}
            />
            {/* Inner circle */}
            <div className="relative z-10 w-[220px] h-[220px] lg:w-[300px] lg:h-[300px] rounded-full bg-[#111]/80 backdrop-blur-lg border border-gray-700 shadow-2xl flex items-center justify-center">
              <Image
                src="/images/dc-logo.png"
                alt="Daniel Rubiano Logo"
                width={160}
                height={160}
                className="object-contain opacity-90 hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </motion.div>

        {/* Right text */}
        <motion.div
          className="mt-10 md:mt-0 text-left flex flex-col justify-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-400 to-cyan-400 mb-6">
            About Me
          </h2>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            I’m a passionate <strong>Full Stack Developer</strong> with solid
            experience designing and maintaining scalable applications on AWS.
            I love building modern, cloud-powered solutions that merge
            functionality and creativity to deliver exceptional user
            experiences.
          </p>

          {/* Tabs */}
          <div className="flex flex-row flex-wrap gap-4 mt-8">
            {TAB_DATA.map((t) => (
              <TabButton
                key={t.id}
                selectedTab={() => handleTabChange(t.id)}
                active={tab === t.id}
              >
                {t.title}
              </TabButton>
            ))}
          </div>

          {/* Tab content */}
          <motion.div
            className="mt-8 text-gray-200"
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
