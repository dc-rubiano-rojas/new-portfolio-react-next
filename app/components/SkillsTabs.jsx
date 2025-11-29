"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SKILLS_TABS = [
  {
    id: "backend",
    title: "Backend",
    content: (
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>Node.js, TypeScript, Python, Java</li>
        <li>Express, NestJS, FastAPI, Spring Boot</li>
        <li>REST, GraphQL, WebSockets</li>
      </ul>
    ),
  },
  {
    id: "frontend",
    title: "Frontend",
    content: (
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>React, Next.js, React Native</li>
        <li>TailwindCSS, Zustand, Redux</li>
        <li>Responsive UI, SSR, SSG, API Consumption</li>
      </ul>
    ),
  },
  {
    id: "databases",
    title: "Databases",
    content: (
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>PostgreSQL, MySQL, MongoDB</li>
        <li>DynamoDB, Redis</li>
      </ul>
    ),
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    content: (
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>AWS (Lambda, Step Functions, API Gateway, S3, EKS)</li>
        <li>Azure Functions, Azure Custom Vision</li>
        <li>GCP, Docker, Kubernetes, Terraform</li>
        <li>CI/CD: Jenkins, GitHub Actions, CircleCI</li>
      </ul>
    ),
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    content: (
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>OpenAI, Groq LLMs, LangChain</li>
        <li>HuggingFace Transformers</li>
        <li>MFCC, Custom Vision, ML Pipelines</li>
      </ul>
    ),
  },
];

export default function SkillsTabs() {
  const [active, setActive] = useState("backend");
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = direction === "left" ? -200 : 200;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <div className="mt-4 w-full">

      {/* Tabs + Arrows in the same row */}
      <div className="flex items-center gap-3 w-full">

        {/* Left arrow */}
        <button
          onClick={() => scroll("left")}
          className="p-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition hidden sm:flex"
        >
          <ChevronLeft size={16} />
        </button>

        {/* Scrollable Tabs */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto hide-scrollbar flex-1 pb-2"
          style={{ scrollBehavior: "smooth" }}
        >
          {SKILLS_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition whitespace-nowrap ${
                active === tab.id
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => scroll("right")}
          className="p-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition hidden sm:flex"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Skills Content */}
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mt-6 text-gray-200"
      >
        {SKILLS_TABS.find((s) => s.id === active)?.content}
      </motion.div>

      {/* custom scrollbar hide */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
