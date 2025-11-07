"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Eye, Target, Lightbulb } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="bg-white text-gray-900 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* About text + image */}
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12 mb-16 sm:mb-20 md:mb-24">
          {/* Left: text */}
          <div className="md:w-1/2 text-center md:text-left md:pl-8 lg:pl-14">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-green-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              About the Department
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              The Department of Computer Science at Abia State University is dedicated
              to advancing knowledge through innovation, research, and hands-on
              learning. We prepare students for real-world challenges in computing,
              software development, and emerging technologies.
            </motion.p>
          </div>

          {/* Right: circular image */}
          <motion.div
            className="md:w-1/2 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Image
              src="/student.jpg"
              alt="Student of ABSU"
              width={450}
              height={450}
              className="rounded-full object-cover w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[430px] lg:h-[430px] shadow-lg"
              priority
            />
          </motion.div>
        </div>

        {/* Vision / Mission / Focus cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {[
            {
              title: "Our Vision",
              text: "To be a center of excellence in computer science education and research.",
              icon: <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-green-700" />,
            },
            {
              title: "Our Mission",
              text: "To produce competent graduates equipped with the skills to solve real-world technological problems.",
              icon: <Target className="w-5 h-5 sm:w-6 sm:h-6 text-green-700" />,
            },
            {
              title: "Our Focus",
              text: "We emphasize innovation, teamwork, and critical thinking through modern teaching approaches.",
              icon: <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-green-700" />,
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className="bg-green-50 p-6 sm:p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-start justify-start min-h-[240px] sm:min-h-[260px] md:min-h-[280px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                {card.icon}
                <h3 className="text-lg sm:text-xl font-semibold text-green-800">
                  {card.title}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};