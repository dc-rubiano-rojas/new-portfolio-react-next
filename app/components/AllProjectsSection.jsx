"use client";
import React from "react";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "District Marketplace Platform — Full-Stack E-Commerce",
    role: "Backend & Frontend Lead",
    problem:
      "Build a multi-tenant marketplace for local merchants with minimal technical skills.",
    solution: [
      "Designed the backend in Node.js (auth, merchants, tenants, payments, analytics).",
      "Developed the full UI using React for accessibility and ease of use.",
      "Managed PostgreSQL schema and cloud deployments on Azure/GCP via Cloud Functions.",
    ],
    tech: "Node.js, PostgreSQL, React, Azure, GCP",
    impact:
      "Increased merchant participation and significantly improved platform usability.",
  },
  {
    title: "Credit Card Request Platform — Banco AV Villas",
    role: "Full-Stack Developer",
    problem:
      "Automate and streamline the credit card application process with strong backend workflows.",
    solution: [
      "Built AWS Lambda + Step Functions automation flows.",
      "Implemented Backend-For-Frontend (BFF) logic using JavaScript and Python.",
      "Developed UI components to display request statuses clearly to users.",
    ],
    tech: "JavaScript, Python, React, AWS, Terraform",
    impact:
      "Faster processing time, improved customer experience, and reduced operational errors.",
  },
  {
    title: "Risk Detector — AI Image Classification Web App",
    role: "Full-Stack & AI Engineer",
    problem: "Detect risks or accidents in images using AI.",
    solution: [
      "Trained a vision model using Azure Custom Vision.",
      "Created a Next.js + Tailwind UI with image upload, preview and predictions.",
      "Integrated Azure prediction API for real-time classification.",
    ],
    tech: "Next.js, React, TailwindCSS, Azure Custom Vision",
    impact:
      "Achieved 90%+ accuracy in internal tests; responsive UI optimized for desktop and mobile.",
  },
  {
    title: "SER — Speech Emotion Recognition Platform",
    role: "AI Engineer + Frontend Integration",
    problem: "Recognize emotions in voice for remote psychological sessions.",
    solution: [
      "Developed full audio-processing pipeline using Python (MFCC, FFT).",
      "Built a simple web interface to upload/record audio and visualize emotions.",
    ],
    tech: "Python, Sklearn, Librosa, React",
    impact:
      "Functional MVP with clear metrics and intuitive UI for experimentation.",
  },
];

export default function AllProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-[#0b0b0b] relative">
      {/* glowing background */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-purple-700/20 blur-[180px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-400 to-cyan-300 mb-16">
          Featured Projects
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative group p-[2px] rounded-2xl bg-gradient-to-br from-purple-600/40 to-blue-500/40 hover:from-purple-600 hover:to-blue-500 transition"
            >
              {/* Card content */}
              <div className="bg-[#111]/80 rounded-2xl p-6 h-full flex flex-col backdrop-blur-xl border border-gray-700/40 group-hover:border-gray-500/60 transition">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-purple-300 text-sm font-semibold mb-4">
                  {project.role}
                </p>

                {/* Hover reveal container */}
                <div className="overflow-hidden">
                  <motion.div
                    initial={{ height: 90 }}
                    whileHover={{ height: "auto" }}
                    transition={{ duration: 0.4 }}
                    className="text-gray-300 space-y-2 text-sm"
                  >
                    <p>
                      <span className="font-semibold text-gray-200">Problem:</span>{" "}
                      {project.problem}
                    </p>

                    <p className="font-semibold text-gray-200">Solution:</p>
                    <ul className="list-disc list-inside ml-2 space-y-1">
                      {project.solution.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ul>

                    <p>
                      <span className="font-semibold text-gray-200">Tech:</span>{" "}
                      {project.tech}
                    </p>

                    <p>
                      <span className="font-semibold text-gray-200">Impact:</span>{" "}
                      {project.impact}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional projects */}
        <div className="mt-20">
          <h3 className="text-3xl font-semibold text-white mb-6">
            Additional Projects
          </h3>

          <ul className="space-y-4 text-gray-300 text-lg">
            <li>
              🎨 <strong>My Pet Vaccines — Mobile App</strong>  
              React Native + Zustand + Firebase Storage — vaccine tracking, image uploads, reminders.
            </li>

            <li>
              🛠️ <strong>Landing Page Portfolio Builder</strong>  
              Next.js + Tailwind — reusable UI components, animations, SEO optimization.
            </li>

            <li>
              🖼️ <strong>AI Chatbot UI</strong>  
              React + LangChain + Groq/OpenAI — chat with streaming responses and memory.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
