"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

const reviews = [
  {
    name: "Chukwudi Okonkwo",
    level: "400 Level",
    rating: 5,
    text: "The Department of Computer Science at ABSU has truly transformed my perspective on technology. The lecturers are experienced and always willing to help.",
  },
  {
    name: "Adaeze Nwosu",
    level: "300 Level",
    rating: 5,
    text: "I love how practical our courses are. We don't just learn theory — we build real projects. It has prepared me well for internships.",
  },
  {
    name: "Emeka Eze",
    level: "Alumni, 2023",
    rating: 4,
    text: "Great department with passionate lecturers. The resources could be expanded, but overall the experience was worth it. I got a job 2 months after graduation.",
  },
  {
    name: "Ngozi Alozie",
    level: "200 Level",
    rating: 5,
    text: "As a first-generation tech student, I was nervous. But the welcoming environment and structured curriculum made everything easier to grasp.",
  },
  {
    name: "Tobechukwu Obi",
    level: "400 Level",
    rating: 4,
    text: "The department keeps improving every year. The introduction of new courses in AI and cybersecurity is exciting and relevant to today's job market.",
  },
  {
    name: "Chisom Ugwu",
    level: "Alumni, 2022",
    rating: 5,
    text: "ABSU CSC gave me the foundation I needed. I'm now working as a software developer at a tech firm in Lagos. Forever grateful.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 mb-3">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${star <= rating ? "fill-green-500 text-green-500" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
}

function getInitials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");
}

export default function ReviewsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", level: "", text: "", rating: 5 });

  const handleSubmit = () => {
    if (!form.name || !form.text) return;
    setSubmitted(true);
  };

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
          Student Reviews
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg text-green-100 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          Hear what students and alumni are saying about the department.
        </motion.p>
      </section>

      {/* Reviews Grid */}
      <section className="py-14 px-4 sm:px-8 md:px-16 max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="bg-green-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <Quote className="w-6 h-6 text-green-300 mb-3" />
              <p className="text-gray-700 text-sm leading-relaxed flex-grow mb-4">
                {review.text}
              </p>
              <StarRating rating={review.rating} />
              <div className="flex items-center gap-3 mt-2">
                <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-bold shrink-0">
                  {getInitials(review.name)}
                </div>
                <div>
                  <p className="font-semibold text-green-800 text-sm">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.level}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Leave a Review */}
      <section className="bg-green-50 py-14 px-4 sm:px-8">
        <div className="max-w-xl mx-auto">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-green-800 mb-2 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
          >
            Leave a Review
          </motion.h2>
          <p className="text-center text-gray-500 text-sm mb-8">
            Share your experience with future students.
          </p>

          {submitted ? (
            <motion.div
              className="bg-green-600 text-white text-center rounded-2xl py-10 px-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <p className="text-xl font-bold mb-2">Thank you! 🎉</p>
              <p className="text-green-100 text-sm">Your review has been submitted.</p>
            </motion.div>
          ) : (
            <motion.div
              className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 flex flex-col gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false }}
            >
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="text"
                placeholder="Your level (e.g. 300 Level, Alumni 2023)"
                value={form.level}
                onChange={(e) => setForm({ ...form, level: e.target.value })}
                className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Rating:</span>
                {[1, 2, 3, 4, 5].map((star) => (
                  <button key={star} onClick={() => setForm({ ...form, rating: star })}>
                    <Star
                      className={`w-5 h-5 transition-colors ${star <= form.rating ? "fill-green-500 text-green-500" : "text-gray-300"}`}
                    />
                  </button>
                ))}
              </div>
              <textarea
                placeholder="Write your review..."
                rows={4}
                value={form.text}
                onChange={(e) => setForm({ ...form, text: e.target.value })}
                className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
              />
              <motion.button
                onClick={handleSubmit}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 px-6 rounded-full transition text-sm"
              >
                Submit Review
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}