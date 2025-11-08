'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

export default function CoursesPage() {
  const [activeLevel, setActiveLevel] = useState<'100' | '200' | '300' | '400'>('100');
  const [searchQuery, setSearchQuery] = useState('');

  const levels: ('100' | '200' | '300' | '400')[] = ['100', '200', '300', '400'];

  // Sample course data - replace with actual ABSU CSC courses
  const courses: Record<'100' | '200' | '300' | '400', { code: string; title: string; units: number; description: string }[]> = {
    '100': [
      { code: 'CSC 101', title: 'Introduction to Computer Science', units: 3, description: 'Basic concepts of computing, problem solving, and programming fundamentals.' },
      { code: 'CSC 102', title: 'Introduction to Problem Solving', units: 2, description: 'Algorithmic thinking and problem-solving techniques.' },
      { code: 'CSC 103', title: 'Computer Application Package', units: 2, description: 'Microsoft Office Suite, presentations, and productivity tools.' },
      { code: 'MTH 101', title: 'General Mathematics I', units: 3, description: 'Algebra, trigonometry, and elementary calculus.' },
      { code: 'MTH 102', title: 'General Mathematics II', units: 3, description: 'Vectors, matrices, and coordinate geometry.' },
      { code: 'PHY 101', title: 'General Physics I', units: 3, description: 'Mechanics, properties of matter, and thermal physics.' },
      { code: 'PHY 102', title: 'General Physics II', units: 3, description: 'Electricity, magnetism, and modern physics.' },
      { code: 'PHY 107', title: 'General Practical Physics I', units: 1, description: 'Laboratory experiments in mechanics and properties of matter.' },
      { code: 'CHM 101', title: 'General Chemistry I', units: 3, description: 'Atomic structure, chemical bonding, and stoichiometry.' },
      { code: 'CHM 107', title: 'General Practical Chemistry I', units: 1, description: 'Basic laboratory techniques and experiments.' },
      { code: 'GST 101', title: 'Use of English', units: 2, description: 'Communication skills in English language.' },
      { code: 'GST 103', title: 'Nigerian Peoples and Culture', units: 2, description: 'Nigerian history, culture, and social development.' },
      { code: 'GST 105', title: 'Entrepreneurship Studies', units: 2, description: 'Basics of entrepreneurship and business management.' },
    ],
    '200': [
      { code: 'CSC 201', title: 'Computer Programming I', units: 3, description: 'Introduction to programming using high-level languages like C++.' },
      { code: 'CSC 203', title: 'Data Structures', units: 3, description: 'Arrays, linked lists, stacks, queues, trees, and graphs.' },
      { code: 'CSC 205', title: 'Operating Systems I', units: 3, description: 'Basic concepts of operating systems and process management.' },
      { code: 'CSC 207', title: 'Computer Programming II', units: 3, description: 'Advanced programming concepts and object-oriented programming.' },
      { code: 'CSC 209', title: 'Discrete Mathematics', units: 3, description: 'Sets, logic, relations, functions, and graph theory.' },
      { code: 'CSC 211', title: 'Introduction to Web Development', units: 2, description: 'HTML, CSS, JavaScript, and basic web design principles.' },
      { code: 'MTH 201', title: 'Mathematical Methods I', units: 3, description: 'Differential equations and vector analysis.' },
      { code: 'MTH 203', title: 'Linear Algebra I', units: 3, description: 'Vector spaces, matrices, determinants, and eigenvalues.' },
      { code: 'STA 201', title: 'Probability I', units: 3, description: 'Basic probability theory and distributions.' },
      { code: 'STA 203', title: 'Statistics for Physical Sciences', units: 3, description: 'Statistical methods and data analysis.' },
      { code: 'GST 201', title: 'Logic and Philosophy', units: 2, description: 'Critical thinking and philosophical reasoning.' },
      { code: 'GST 203', title: 'Introduction to Entrepreneurship', units: 2, description: 'Business planning and innovation.' },
    ],
    '300': [
      { code: 'CSC 301', title: 'Computer Architecture', units: 3, description: 'Organization and architecture of computer systems.' },
      { code: 'CSC 303', title: 'Database Management Systems', units: 3, description: 'Database design, SQL, normalization, and administration.' },
      { code: 'CSC 305', title: 'Algorithm Design and Analysis', units: 3, description: 'Algorithm complexity, sorting, searching, and optimization techniques.' },
      { code: 'CSC 307', title: 'Software Engineering', units: 3, description: 'Software development lifecycle, methodologies, and project management.' },
      { code: 'CSC 309', title: 'Artificial Intelligence', units: 3, description: 'AI concepts, machine learning, and expert systems.' },
      { code: 'CSC 311', title: 'Systems Programming', units: 3, description: 'Low-level programming, system calls, and kernel interaction.' },
      { code: 'CSC 313', title: 'Computer Graphics', units: 3, description: '2D/3D graphics, transformations, and rendering techniques.' },
      { code: 'CSC 315', title: 'Theory of Computation', units: 3, description: 'Automata theory, formal languages, and computability.' },
      { code: 'CSC 317', title: 'Object-Oriented Programming', units: 3, description: 'OOP principles using Java and design patterns.' },
      { code: 'CSC 319', title: 'Computer Networks I', units: 3, description: 'Network fundamentals, protocols, and TCP/IP model.' },
      { code: 'CSC 321', title: 'Numerical Methods', units: 3, description: 'Numerical solutions for mathematical problems.' },
      { code: 'CSC 399', title: 'Industrial Training (SIWES)', units: 6, description: 'Six-month practical training in industry.' },
    ],
    '400': [
      { code: 'CSC 401', title: 'Research Methodology', units: 2, description: 'Research methods, proposal writing, and technical documentation.' },
      { code: 'CSC 403', title: 'Computer Networks II', units: 3, description: 'Advanced networking, routing protocols, and network security.' },
      { code: 'CSC 405', title: 'Compiler Construction', units: 3, description: 'Lexical analysis, parsing, semantic analysis, and code generation.' },
      { code: 'CSC 407', title: 'Distributed Systems', units: 3, description: 'Principles of distributed computing, cloud computing, and scalability.' },
      { code: 'CSC 409', title: 'Information Security', units: 3, description: 'Cryptography, network security, and cyber defense.' },
      { code: 'CSC 411', title: 'Mobile Application Development', units: 3, description: 'Android and iOS app development fundamentals.' },
      { code: 'CSC 413', title: 'Data Mining and Machine Learning', units: 3, description: 'Data analysis, pattern recognition, and ML algorithms.' },
      { code: 'CSC 415', title: 'Human-Computer Interaction', units: 2, description: 'UI/UX design principles and usability testing.' },
      { code: 'CSC 417', title: 'Cloud Computing', units: 3, description: 'Cloud architecture, services (IaaS, PaaS, SaaS), and deployment.' },
      { code: 'CSC 419', title: 'Internet of Things (IoT)', units: 2, description: 'IoT architecture, sensors, and embedded systems.' },
      { code: 'CSC 421', title: 'Digital Image Processing', units: 3, description: 'Image enhancement, restoration, and computer vision.' },
      { code: 'CSC 423', title: 'E-Commerce and Web Technologies', units: 2, description: 'Online business models, payment systems, and web frameworks.' },
      { code: 'CSC 499', title: 'Final Year Project', units: 6, description: 'Independent research and development project with defense.' },
    ],
  };

  // Filter courses based on search query
  const filteredCourses = courses[activeLevel].filter((course) => {
    const query = searchQuery.toLowerCase();
    return (
      course.code.toLowerCase().includes(query) ||
      course.title.toLowerCase().includes(query) ||
      course.description.toLowerCase().includes(query)
    );
  });

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
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <h2 className="text-3xl font-bold text-gray-900">
            {activeLevel} Level Courses
          </h2>

          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none text-gray-900"
            />
          </div>
        </div>

        {/* Course Cards */}
        {filteredCourses.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((course, index) => (
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
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No courses found matching "{searchQuery}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
}