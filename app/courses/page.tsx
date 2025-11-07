'use client';

import { useState } from 'react';

export default function CoursesPage() {
  // Restrict activeLevel to specific valid keys
  const [activeLevel, setActiveLevel] = useState<'100' | '200' | '300' | '400'>('100');

  const levels: ('100' | '200' | '300' | '400')[] = ['100', '200', '300', '400'];

  // Sample course data - replace with actual ABSU CSC courses
  const courses: Record<'100' | '200' | '300' | '400', { code: string; title: string; units: number; description: string }[]> = {
    '100': [
      { code: 'CSC 101', title: 'Introduction to Computer Science', units: 3, description: 'Basic concepts of computing, problem solving, and programming fundamentals.' },
      { code: 'CSC 102', title: 'Introduction to Problem Solving', units: 2, description: 'Algorithmic thinking and problem-solving techniques.' },
      { code: 'MTH 101', title: 'General Mathematics I', units: 3, description: 'Algebra, trigonometry, and elementary calculus.' },
      { code: 'PHY 101', title: 'General Physics I', units: 3, description: 'Mechanics, properties of matter, and thermal physics.' },
      { code: 'GST 101', title: 'Use of English', units: 2, description: 'Communication skills in English language.' },
    ],
    '200': [
      { code: 'CSC 201', title: 'Computer Programming I', units: 3, description: 'Introduction to programming using high-level languages.' },
      { code: 'CSC 203', title: 'Data Structures', units: 3, description: 'Arrays, linked lists, stacks, queues, trees, and graphs.' },
      { code: 'CSC 205', title: 'Operating Systems I', units: 3, description: 'Basic concepts of operating systems and process management.' },
      { code: 'MTH 201', title: 'Mathematical Methods I', units: 3, description: 'Differential equations and vector analysis.' },
      { code: 'STA 201', title: 'Probability I', units: 3, description: 'Basic probability theory and distributions.' },
    ],
    '300': [
      { code: 'CSC 301', title: 'Computer Architecture', units: 3, description: 'Organization and architecture of computer systems.' },
      { code: 'CSC 303', title: 'Database Management Systems', units: 3, description: 'Database design, SQL, and database administration.' },
      { code: 'CSC 305', title: 'Algorithm Design and Analysis', units: 3, description: 'Algorithm complexity, sorting, searching, and optimization.' },
      { code: 'CSC 307', title: 'Software Engineering', units: 3, description: 'Software development lifecycle and methodologies.' },
      { code: 'CSC 309', title: 'Artificial Intelligence', units: 3, description: 'AI concepts, machine learning, and expert systems.' },
    ],
    '400': [
      { code: 'CSC 401', title: 'Research Methodology', units: 2, description: 'Research methods and technical writing for computer science.' },
      { code: 'CSC 403', title: 'Computer Networks', units: 3, description: 'Network protocols, architectures, and security.' },
      { code: 'CSC 405', title: 'Compiler Construction', units: 3, description: 'Lexical analysis, parsing, and code generation.' },
      { code: 'CSC 407', title: 'Distributed Systems', units: 3, description: 'Principles of distributed computing and systems.' },
      { code: 'CSC 499', title: 'Final Year Project', units: 6, description: 'Independent research and development project.' },
    ],
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-green-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Computer Science Courses
          </h1>
        </div>
      </div>

      {/* Level Navigation */}
      <div className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center space-x-2 md:space-x-4 py-4">
            {levels.map((level) => (
              <button
                key={level}
                onClick={() => setActiveLevel(level)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeLevel === level
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {level} Level
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          {activeLevel} Level Courses
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses[activeLevel].map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-green-700">
                  {course.code}
                </h3>
                <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                  {course.units} Units
                </span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {course.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {course.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
