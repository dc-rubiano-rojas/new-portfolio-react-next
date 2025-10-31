"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailSubmitted(true);

    // Aquí podrías agregar el envío real con API o servicio externo (Resend, Formspree, etc.)
    setTimeout(() => setEmailSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      className="relative bg-[#0b0b0b] py-24 lg:py-28 overflow-hidden"
    >
      {/* Background lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-b from-purple-600/20 to-transparent blur-[180px]" />
      <div className="absolute bottom-0 right-1/3 w-[300px] h-[300px] bg-blue-600/20 blur-[160px]" />

      <div className="container relative mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT: Text + Socials */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-400 to-cyan-400 mb-6">
            Let’s Connect
          </h2>

          <p className="text-gray-300 mb-8 leading-relaxed max-w-lg">
            I’m always open to new opportunities, collaborations, or just
            connecting with other passionate developers.  
            Feel free to reach out for project ideas, partnerships, or tech discussions.
          </p>

          <div className="flex gap-5">
            <Link
              href="https://github.com/dc-rubiano-rojas"
              target="_blank"
              className="p-3 bg-[#141414]/70 border border-gray-700 rounded-full hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              <FaGithub className="text-2xl text-gray-300 hover:text-white" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/danielc-rubiano-rojas/"
              target="_blank"
              className="p-3 bg-[#141414]/70 border border-gray-700 rounded-full hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              <FaLinkedin className="text-2xl text-gray-300 hover:text-white" />
            </Link>
            <Link
              href="mailto:dcrubiano01@gmail.com"
              className="p-3 bg-[#141414]/70 border border-gray-700 rounded-full hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              <FaEnvelope className="text-2xl text-gray-300 hover:text-white" />
            </Link>
          </div>
        </motion.div>

        {/* RIGHT: Form */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <form
            onSubmit={handleSubmit}
            className="bg-[#141414]/60 border border-gray-800 rounded-2xl p-8 shadow-lg shadow-purple-900/10 backdrop-blur-md"
          >
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full p-3 rounded-lg bg-[#1b1b1b] border border-gray-700 text-gray-100 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="Let’s build something great..."
                className="w-full p-3 rounded-lg bg-[#1b1b1b] border border-gray-700 text-gray-100 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Hi Daniel, I’d like to talk about..."
                className="w-full p-3 rounded-lg bg-[#1b1b1b] border border-gray-700 text-gray-100 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium py-3 rounded-lg hover:opacity-90 transition duration-300"
            >
              Send Message
            </button>

            {emailSubmitted && (
              <p className="text-green-400 text-sm mt-4 text-center">
                ✅ Message sent successfully! I’ll get back to you soon.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default EmailSection;
