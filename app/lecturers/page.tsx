"use client";

import { motion } from "framer-motion";
import { Mail, BookOpen, Award } from "lucide-react";

const lecturers = [
  {
    name: "Prof. Chukwuemeka Obi",
    title: "Professor & Head of Department",
    specialization: "Artificial Intelligence & Machine Learning",
    courses: ["CSC 401", "CSC 501"],
    email: "c.obi@absu.edu.ng",
    image: null,
  },
  {
    name: "Dr. Ngozi Eze",
    title: "Senior Lecturer",
    specialization: "Database Systems & Information Management",
    courses: ["CSC 301", "CSC 302"],
    email: "n.eze@absu.edu.ng",
    image: null,
  },
  {
    name: "Dr. Ifeanyi Nwosu",
    title: "Lecturer I",
    specialization: "Computer Networks & Cybersecurity",
    courses: ["CSC 311", "CSC 412"],
    email: "i.nwosu@absu.edu.ng",
    image: null,
  },
  {
    name: "Dr. Amaka Okafor",
    title: "Lecturer I",
    specialization: "Software Engineering",
    courses: ["CSC 321", "CSC 421"],
    email: "a.okafor@absu.edu.ng",
    image: null,
  },
  {
    name: "Mr. Chidi Anozie",
    title: "Lecturer II",
    specialization: "Web Technologies & Mobile Computing",
    courses: ["CSC 211", "CSC 312"],
    email: "c.anozie@absu.edu.ng",
    image: null,
  },
  {
    name: "Mrs. Ifeoma Ugwu",
    title: "Lecturer II",
    specialization: "Programming Languages & Compilers",
    courses: ["CSC 101", "CSC 201"],
    email: "i.ugwu@absu.edu.ng",
    image: null,
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");
}

export default function LecturersPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Page Header */}
      <section className="bg-green-600 text-white py-14 px-4 text-center">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Our Lecturers
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg text-green-100 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          Meet the dedicated faculty shaping the next generation of computer scientists.
        </motion.p>
      </section>

      {/* Lecturers Grid */}
      <section className="py-14 px-4 sm:px-8 md:px-16 max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {lecturers.map((lecturer, index) => (
            <motion.div
              key={index}
              className="bg-green-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-green-600 flex items-center justify-center text-white text-2xl font-bold mb-4 shadow-md">
                {getInitials(lecturer.name)}
              </div>

              <h3 className="text-lg font-bold text-green-800">{lecturer.name}</h3>
              <p className="text-sm text-green-600 font-medium mb-2">{lecturer.title}</p>

              <div className="flex items-start gap-2 text-gray-600 text-sm mb-3">
                <Award className="w-4 h-4 mt-0.5 text-green-600 shrink-0" />
                <span>{lecturer.specialization}</span>
              </div>

              <div className="flex items-start gap-2 text-gray-600 text-sm mb-4">
                <BookOpen className="w-4 h-4 mt-0.5 text-green-600 shrink-0" />
                <span>Courses: {lecturer.courses.join(", ")}</span>
              </div>

              <a
                href={`mailto:${lecturer.email}`}
                className="flex items-center gap-2 text-sm text-green-700 hover:text-green-900 transition-colors mt-auto"
              >
                <Mail className="w-4 h-4" />
                {lecturer.email}
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}