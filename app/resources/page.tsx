"use client";

import { motion } from "framer-motion";
import { FileText, Download, BookOpen, Link as LinkIcon } from "lucide-react";
import { useState } from "react";

const categories = ["All", "Past Questions", "Lecture Notes", "Handbooks", "External Links"];

const resources = [
  {
    title: "CSC 101 Past Questions (2020–2023)",
    category: "Past Questions",
    description: "Past examination questions for Introduction to Computer Science.",
    type: "PDF",
    icon: <FileText className="w-5 h-5 text-green-600" />,
    href: "#",
  },
  {
    title: "CSC 201 Data Structures Past Questions",
    category: "Past Questions",
    description: "Past questions covering arrays, linked lists, stacks, and queues.",
    type: "PDF",
    icon: <FileText className="w-5 h-5 text-green-600" />,
    href: "#",
  },
  {
    title: "CSC 301 Database Systems Lecture Notes",
    category: "Lecture Notes",
    description: "Comprehensive notes on relational databases, SQL, and normalization.",
    type: "PDF",
    icon: <BookOpen className="w-5 h-5 text-green-600" />,
    href: "#",
  },
  {
    title: "CSC 311 Computer Networks Notes",
    category: "Lecture Notes",
    description: "Topics include OSI model, TCP/IP, routing, and network security.",
    type: "PDF",
    icon: <BookOpen className="w-5 h-5 text-green-600" />,
    href: "#",
  },
  {
    title: "ABSU CSC Student Handbook 2024",
    category: "Handbooks",
    description: "Official department rules, grading system, and course outlines.",
    type: "PDF",
    icon: <FileText className="w-5 h-5 text-green-600" />,
    href: "#",
  },
  {
    title: "Postgraduate Programme Handbook",
    category: "Handbooks",
    description: "Information for M.Sc and Ph.D students in the department.",
    type: "PDF",
    icon: <FileText className="w-5 h-5 text-green-600" />,
    href: "#",
  },
  {
    title: "freeCodeCamp – Free Coding Courses",
    category: "External Links",
    description: "Learn web development, Python, databases, and more for free.",
    type: "Link",
    icon: <LinkIcon className="w-5 h-5 text-green-600" />,
    href: "https://www.freecodecamp.org",
  },
  {
    title: "MIT OpenCourseWare – CS Courses",
    category: "External Links",
    description: "Free course materials from MIT covering algorithms, AI, and more.",
    type: "Link",
    icon: <LinkIcon className="w-5 h-5 text-green-600" />,
    href: "https://ocw.mit.edu",
  },
];

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? resources
      : resources.filter((r) => r.category === activeCategory);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <section className="bg-green-600 text-white py-14 px-4 text-center">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Resources
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg text-green-100 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          Access past questions, lecture notes, handbooks, and helpful external links.
        </motion.p>
      </section>

      {/* Filter Tabs */}
      <section className="pt-10 px-4 sm:px-8 max-w-6xl mx-auto">
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeCategory === cat
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-green-100 hover:text-green-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
          {filtered.map((resource, index) => (
            <motion.div
              key={index}
              className="bg-green-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-3">
                {resource.icon}
                <span className="text-xs font-semibold text-green-700 bg-green-100 px-2 py-0.5 rounded-full">
                  {resource.category}
                </span>
              </div>

              <h3 className="text-base font-bold text-green-800 mb-2">{resource.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-grow mb-5">
                {resource.description}
              </p>

              <a
                href={resource.href}
                target={resource.type === "Link" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-2 justify-center bg-green-600 hover:bg-green-700 text-white text-sm font-semibold py-2 px-4 rounded-full transition-colors mt-auto"
              >
                {resource.type === "Link" ? (
                  <><LinkIcon className="w-4 h-4" /> Visit Link</>
                ) : (
                  <><Download className="w-4 h-4" /> Download</>
                )}
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}