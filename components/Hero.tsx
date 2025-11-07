"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] lg:h-[90vh] flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/absu.jpg"
          alt="Abia State University Gate"
          fill
          priority
          className="object-cover brightness-[0.45]"
        />
      </div>

      {/* Overlay Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="px-4 sm:px-6 lg:px-8 py-12"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
          Department of Computer Science
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-xl lg:max-w-2xl mx-auto text-gray-100 px-2">
          Advancing knowledge through innovation, technology, and excellence in computing education.
        </p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/about"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 px-6 sm:py-3 sm:px-8 rounded-full transition text-sm sm:text-base"
          >
            Explore Department
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};