"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import emailjs from '@emailjs/browser';

const contactInfo = [
  {
    icon: <MapPin className="w-5 h-5 text-green-600" />,
    label: "Address",
    value: "Department of Computer Science, Faculty of Physical Sciences, Abia State University, Uturu",
  },
  {
    icon: <Mail className="w-5 h-5 text-green-600" />,
    label: "Email",
    value: "csc@absu.edu.ng",
  },
  {
    icon: <Phone className="w-5 h-5 text-green-600" />,
    label: "Phone",
    value: "+234 800 000 0000",
  },
  {
    icon: <Clock className="w-5 h-5 text-green-600" />,
    label: "Office Hours",
    value: "Monday - Friday: 8:00 AM - 4:00 PM",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;

    emailjs.send(
      "service_245il59",
      "nvseugf",
      {
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      },
      "uTfMbiSojyus17Lj7"
    ).then(() => {
      setSubmitted(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    }).catch(() => {
      alert("Something went wrong. Please try again.");
    });
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-white text-gray-900 flex items-center justify-center">
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold text-green-600 mb-2">Message Sent!</h2>
          <p className="text-gray-600">We'll get back to you as soon as possible.</p>
        </div>
      </main>
    );
  }

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
          Contact Us
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg text-green-100 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          Have a question or inquiry? Reach out to the department director
        </motion.p>
      </section>

      <section className="py-14 px-4 sm:px-8 md:px-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
          >
            <h2 className="text-2xl font-bold text-green-800 mb-2">Get in touch</h2>
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="mt-0.5 shrink-0">{item.icon}</div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">{item.label}</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
          >
            <h2 className="text-2xl font-bold text-green-800 mb-6">Send a Message</h2>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your full name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="email"
                placeholder="Your email address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                placeholder="Subject"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <textarea
                placeholder="Your message..."
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <motion.button
                onClick={handleSubmit}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 px-6 rounded-full transition text-sm w-fit"
              >
                Send Message
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}