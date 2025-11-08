'use client';

import { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';

export default function CoursesPage() {
  const [activeLevel, setActiveLevel] = useState<'100' | '200' | '300' | '400'>('100');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedCourse) {
      // Store the current scroll position
      const scrollY = window.scrollY;
      
      // Prevent body scroll
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      
      return () => {
        // Restore body scroll
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [selectedCourse]);

  const levels: ('100' | '200' | '300' | '400')[] = ['100', '200', '300', '400'];

  interface Course {
    code: string;
    title: string;
    units: number;
    description: string;
    semester: string;
    prerequisites?: string;
    objectives?: string[];
    assessment?: string;
  }

  const courses: Record<'100' | '200' | '300' | '400', Course[]> = {
    '100': [
      { code: 'CSC 101', title: 'Introduction to Computer Science', units: 3, description: 'Basic concepts of computing, problem solving, and programming fundamentals.', semester: '1st Semester', prerequisites: 'None', objectives: ['Understand basic computer concepts', 'Learn problem-solving techniques', 'Introduction to programming logic'], assessment: 'Exam: 70%, Assignments: 10%, Tests: 20%' },
      { code: 'CSC 102', title: 'Introduction to Problem Solving', units: 2, description: 'Algorithmic thinking and problem-solving techniques.', semester: '2nd Semester', prerequisites: 'CSC 101', objectives: ['Develop algorithmic thinking', 'Learn flowcharting', 'Apply problem-solving strategies'], assessment: 'Exam: 50%, Practicals: 30%, Tests: 20%' },
      { code: 'CSC 103', title: 'Computer Application Package', units: 2, description: 'Microsoft Office Suite, presentations, and productivity tools.', semester: '1st Semester', prerequisites: 'None', objectives: ['Master MS Word, Excel, PowerPoint', 'Learn document formatting', 'Create effective presentations'], assessment: 'Exam: 40%, Practicals: 40%, Tests: 20%' },
      { code: 'MTH 101', title: 'General Mathematics I', units: 3, description: 'Algebra, trigonometry, and elementary calculus.', semester: '1st Semester', prerequisites: 'None', objectives: ['Master algebraic techniques', 'Understand trigonometric functions', 'Introduction to calculus'], assessment: 'Exam: 70%, Tests: 30%' },
      { code: 'MTH 102', title: 'General Mathematics II', units: 3, description: 'Vectors, matrices, and coordinate geometry.', semester: '2nd Semester', prerequisites: 'MTH 101', objectives: ['Learn vector operations', 'Understand matrix algebra', 'Apply coordinate geometry'], assessment: 'Exam: 70%, Tests: 30%' },
      { code: 'PHY 101', title: 'General Physics I', units: 3, description: 'Mechanics, properties of matter, and thermal physics.', semester: '1st Semester', prerequisites: 'None', objectives: ['Understand Newton\'s laws', 'Study motion and forces', 'Learn thermal properties'], assessment: 'Exam: 60%, Practicals: 20%, Tests: 20%' },
      { code: 'PHY 102', title: 'General Physics II', units: 3, description: 'Electricity, magnetism, and modern physics.', semester: '2nd Semester', prerequisites: 'PHY 101', objectives: ['Study electric fields and circuits', 'Understand magnetism', 'Introduction to quantum physics'], assessment: 'Exam: 60%, Practicals: 20%, Tests: 20%' },
      { code: 'PHY 107', title: 'General Practical Physics I', units: 1, description: 'Laboratory experiments in mechanics and properties of matter.', semester: '1st Semester', prerequisites: 'None', objectives: ['Perform physics experiments', 'Learn lab safety', 'Analyze experimental data'], assessment: 'Practicals: 70%, Lab Reports: 30%' },
      { code: 'CHM 101', title: 'General Chemistry I', units: 3, description: 'Atomic structure, chemical bonding, and stoichiometry.', semester: '1st Semester', prerequisites: 'None', objectives: ['Understand atomic theory', 'Learn chemical bonding', 'Master stoichiometric calculations'], assessment: 'Exam: 60%, Practicals: 20%, Tests: 20%' },
      { code: 'CHM 107', title: 'General Practical Chemistry I', units: 1, description: 'Basic laboratory techniques and experiments.', semester: '1st Semester', prerequisites: 'None', objectives: ['Learn lab techniques', 'Conduct chemical experiments', 'Write lab reports'], assessment: 'Practicals: 70%, Lab Reports: 30%' },
      { code: 'GST 101', title: 'Use of English', units: 2, description: 'Communication skills in English language.', semester: '1st Semester', prerequisites: 'None', objectives: ['Improve written communication', 'Enhance speaking skills', 'Learn academic writing'], assessment: 'Exam: 60%, Assignments: 20%, Tests: 20%' },
      { code: 'GST 103', title: 'Nigerian Peoples and Culture', units: 2, description: 'Nigerian history, culture, and social development.', semester: '1st Semester', prerequisites: 'None', objectives: ['Understand Nigerian history', 'Learn about diverse cultures', 'Study social structures'], assessment: 'Exam: 70%, Tests: 30%' },
      { code: 'GST 105', title: 'Entrepreneurship Studies', units: 2, description: 'Basics of entrepreneurship and business management.', semester: '2nd Semester', prerequisites: 'None', objectives: ['Learn business fundamentals', 'Develop entrepreneurial mindset', 'Create business plans'], assessment: 'Exam: 50%, Project: 30%, Tests: 20%' },
    ],
    '200': [
      { code: 'CSC 201', title: 'Computer Programming I', units: 3, description: 'Introduction to programming using high-level languages like C++.', semester: '1st Semester', prerequisites: 'CSC 101', objectives: ['Learn C++ syntax', 'Understand control structures', 'Write functional programs'], assessment: 'Exam: 50%, Practicals: 30%, Tests: 20%' },
      { code: 'CSC 203', title: 'Data Structures', units: 3, description: 'Arrays, linked lists, stacks, queues, trees, and graphs.', semester: '1st Semester', prerequisites: 'CSC 201', objectives: ['Master fundamental data structures', 'Analyze time complexity', 'Implement efficient algorithms'], assessment: 'Exam: 50%, Practicals: 30%, Tests: 20%' },
      { code: 'CSC 205', title: 'Operating Systems I', units: 3, description: 'Basic concepts of operating systems and process management.', semester: '2nd Semester', prerequisites: 'CSC 201', objectives: ['Understand OS concepts', 'Learn process scheduling', 'Study memory management'], assessment: 'Exam: 60%, Assignments: 20%, Tests: 20%' },
      { code: 'CSC 207', title: 'Computer Programming II', units: 3, description: 'Advanced programming concepts and object-oriented programming.', semester: '2nd Semester', prerequisites: 'CSC 201', objectives: ['Master OOP principles', 'Learn inheritance and polymorphism', 'Design software patterns'], assessment: 'Exam: 50%, Practicals: 30%, Tests: 20%' },
      { code: 'CSC 209', title: 'Discrete Mathematics', units: 3, description: 'Sets, logic, relations, functions, and graph theory.', semester: '1st Semester', prerequisites: 'MTH 101', objectives: ['Understand set theory', 'Learn logic and proofs', 'Apply graph algorithms'], assessment: 'Exam: 70%, Tests: 30%' },
      { code: 'CSC 211', title: 'Introduction to Web Development', units: 2, description: 'HTML, CSS, JavaScript, and basic web design principles.', semester: '2nd Semester', prerequisites: 'CSC 101', objectives: ['Build responsive websites', 'Learn front-end technologies', 'Create interactive web pages'], assessment: 'Exam: 40%, Project: 40%, Tests: 20%' },
      { code: 'MTH 201', title: 'Mathematical Methods I', units: 3, description: 'Differential equations and vector analysis.', semester: '1st Semester', prerequisites: 'MTH 102', objectives: ['Solve differential equations', 'Apply vector calculus', 'Model real-world problems'], assessment: 'Exam: 70%, Tests: 30%' },
      { code: 'MTH 203', title: 'Linear Algebra I', units: 3, description: 'Vector spaces, matrices, determinants, and eigenvalues.', semester: '1st Semester', prerequisites: 'MTH 102', objectives: ['Understand vector spaces', 'Compute eigenvalues', 'Apply matrix transformations'], assessment: 'Exam: 70%, Tests: 30%' },
      { code: 'STA 201', title: 'Probability I', units: 3, description: 'Basic probability theory and distributions.', semester: '1st Semester', prerequisites: 'MTH 101', objectives: ['Learn probability rules', 'Study distributions', 'Apply statistical methods'], assessment: 'Exam: 70%, Tests: 30%' },
      { code: 'STA 203', title: 'Statistics for Physical Sciences', units: 3, description: 'Statistical methods and data analysis.', semester: '2nd Semester', prerequisites: 'STA 201', objectives: ['Analyze data sets', 'Perform hypothesis testing', 'Use statistical software'], assessment: 'Exam: 60%, Practicals: 20%, Tests: 20%' },
      { code: 'GST 201', title: 'Logic and Philosophy', units: 2, description: 'Critical thinking and philosophical reasoning.', semester: '1st Semester', prerequisites: 'None', objectives: ['Develop critical thinking', 'Study logical arguments', 'Understand philosophical concepts'], assessment: 'Exam: 70%, Tests: 30%' },
      { code: 'GST 203', title: 'Introduction to Entrepreneurship', units: 2, description: 'Business planning and innovation.', semester: '2nd Semester', prerequisites: 'GST 105', objectives: ['Create business models', 'Learn innovation strategies', 'Develop startup ideas'], assessment: 'Exam: 50%, Project: 30%, Tests: 20%' },
    ],
    '300': [
      { code: 'CSC 301', title: 'Computer Architecture', units: 3, description: 'Organization and architecture of computer systems.', semester: '1st Semester', prerequisites: 'CSC 205', objectives: ['Understand CPU design', 'Learn memory hierarchy', 'Study instruction sets'], assessment: 'Exam: 60%, Assignments: 20%, Tests: 20%' },
      { code: 'CSC 303', title: 'Database Management Systems', units: 3, description: 'Database design, SQL, normalization, and administration.', semester: '1st Semester', prerequisites: 'CSC 203', objectives: ['Design relational databases', 'Write complex SQL queries', 'Implement database systems'], assessment: 'Exam: 50%, Project: 30%, Tests: 20%' },
      { code: 'CSC 305', title: 'Algorithm Design and Analysis', units: 3, description: 'Algorithm complexity, sorting, searching, and optimization techniques.', semester: '1st Semester', prerequisites: 'CSC 203, CSC 209', objectives: ['Analyze algorithm complexity', 'Design efficient algorithms', 'Master sorting and searching'], assessment: 'Exam: 60%, Assignments: 20%, Tests: 20%' },
      { code: 'CSC 307', title: 'Software Engineering', units: 3, description: 'Software development lifecycle, methodologies, and project management.', semester: '2nd Semester', prerequisites: 'CSC 207', objectives: ['Learn SDLC phases', 'Apply Agile methodologies', 'Manage software projects'], assessment: 'Exam: 40%, Project: 40%, Tests: 20%' },
      { code: 'CSC 309', title: 'Artificial Intelligence', units: 3, description: 'AI concepts, machine learning, and expert systems.', semester: '2nd Semester', prerequisites: 'CSC 305', objectives: ['Understand AI fundamentals', 'Learn search algorithms', 'Apply ML techniques'], assessment: 'Exam: 50%, Project: 30%, Tests: 20%' },
      { code: 'CSC 311', title: 'Systems Programming', units: 3, description: 'Low-level programming, system calls, and kernel interaction.', semester: '1st Semester', prerequisites: 'CSC 207', objectives: ['Learn system-level coding', 'Use system calls', 'Understand kernel operations'], assessment: 'Exam: 50%, Practicals: 30%, Tests: 20%' },
      { code: 'CSC 313', title: 'Computer Graphics', units: 3, description: '2D/3D graphics, transformations, and rendering techniques.', semester: '2nd Semester', prerequisites: 'MTH 203', objectives: ['Create 2D/3D graphics', 'Apply transformations', 'Implement rendering'], assessment: 'Exam: 40%, Project: 40%, Tests: 20%' },
      { code: 'CSC 315', title: 'Theory of Computation', units: 3, description: 'Automata theory, formal languages, and computability.', semester: '1st Semester', prerequisites: 'CSC 209', objectives: ['Study automata', 'Learn formal languages', 'Understand computability'], assessment: 'Exam: 70%, Tests: 30%' },
      { code: 'CSC 317', title: 'Object-Oriented Programming', units: 3, description: 'OOP principles using Java and design patterns.', semester: '2nd Semester', prerequisites: 'CSC 207', objectives: ['Master Java programming', 'Apply design patterns', 'Build OOP applications'], assessment: 'Exam: 50%, Practicals: 30%, Tests: 20%' },
      { code: 'CSC 319', title: 'Computer Networks I', units: 3, description: 'Network fundamentals, protocols, and TCP/IP model.', semester: '1st Semester', prerequisites: 'CSC 205', objectives: ['Understand network layers', 'Learn protocols', 'Configure networks'], assessment: 'Exam: 60%, Practicals: 20%, Tests: 20%' },
      { code: 'CSC 321', title: 'Numerical Methods', units: 3, description: 'Numerical solutions for mathematical problems.', semester: '2nd Semester', prerequisites: 'MTH 201, CSC 201', objectives: ['Solve equations numerically', 'Apply approximation methods', 'Implement algorithms'], assessment: 'Exam: 50%, Practicals: 30%, Tests: 20%' },
      { code: 'CSC 399', title: 'Industrial Training (SIWES)', units: 6, description: 'Six-month practical training in industry.', semester: 'Long Vacation', prerequisites: 'Completion of 300 Level', objectives: ['Gain industry experience', 'Apply theoretical knowledge', 'Develop professional skills'], assessment: 'Industry Report: 60%, Logbook: 20%, Presentation: 20%' },
    ],
    '400': [
      { code: 'CSC 401', title: 'Research Methodology', units: 2, description: 'Research methods, proposal writing, and technical documentation.', semester: '1st Semester', prerequisites: 'None', objectives: ['Learn research methods', 'Write proposals', 'Conduct literature reviews'], assessment: 'Exam: 50%, Proposal: 30%, Tests: 20%' },
      { code: 'CSC 403', title: 'Computer Networks II', units: 3, description: 'Advanced networking, routing protocols, and network security.', semester: '1st Semester', prerequisites: 'CSC 319', objectives: ['Master routing protocols', 'Implement network security', 'Design complex networks'], assessment: 'Exam: 50%, Practicals: 30%, Tests: 20%' },
      { code: 'CSC 405', title: 'Compiler Construction', units: 3, description: 'Lexical analysis, parsing, semantic analysis, and code generation.', semester: '1st Semester', prerequisites: 'CSC 315', objectives: ['Build compilers', 'Implement parsers', 'Generate code'], assessment: 'Exam: 50%, Project: 30%, Tests: 20%' },
      { code: 'CSC 407', title: 'Distributed Systems', units: 3, description: 'Principles of distributed computing, cloud computing, and scalability.', semester: '1st Semester', prerequisites: 'CSC 319', objectives: ['Understand distributed systems', 'Learn cloud computing', 'Design scalable systems'], assessment: 'Exam: 50%, Project: 30%, Tests: 20%' },
      { code: 'CSC 409', title: 'Information Security', units: 3, description: 'Cryptography, network security, and cyber defense.', semester: '2nd Semester', prerequisites: 'CSC 319', objectives: ['Learn cryptography', 'Implement security measures', 'Defend against cyber attacks'], assessment: 'Exam: 50%, Practicals: 30%, Tests: 20%' },
      { code: 'CSC 411', title: 'Mobile Application Development', units: 3, description: 'Android and iOS app development fundamentals.', semester: '2nd Semester', prerequisites: 'CSC 317', objectives: ['Build mobile apps', 'Learn Android/iOS', 'Deploy to app stores'], assessment: 'Exam: 40%, Project: 40%, Tests: 20%' },
      { code: 'CSC 413', title: 'Data Mining and Machine Learning', units: 3, description: 'Data analysis, pattern recognition, and ML algorithms.', semester: '1st Semester', prerequisites: 'CSC 309, STA 201', objectives: ['Apply ML algorithms', 'Mine data patterns', 'Build predictive models'], assessment: 'Exam: 50%, Project: 30%, Tests: 20%' },
      { code: 'CSC 415', title: 'Human-Computer Interaction', units: 2, description: 'UI/UX design principles and usability testing.', semester: '2nd Semester', prerequisites: 'CSC 211', objectives: ['Design user interfaces', 'Conduct usability tests', 'Apply UX principles'], assessment: 'Exam: 40%, Project: 40%, Tests: 20%' },
      { code: 'CSC 417', title: 'Cloud Computing', units: 3, description: 'Cloud architecture, services (IaaS, PaaS, SaaS), and deployment.', semester: '1st Semester', prerequisites: 'CSC 407', objectives: ['Understand cloud models', 'Deploy cloud applications', 'Manage cloud resources'], assessment: 'Exam: 50%, Project: 30%, Tests: 20%' },
      { code: 'CSC 419', title: 'Internet of Things (IoT)', units: 2, description: 'IoT architecture, sensors, and embedded systems.', semester: '2nd Semester', prerequisites: 'CSC 319', objectives: ['Build IoT systems', 'Program sensors', 'Connect devices'], assessment: 'Exam: 40%, Project: 40%, Tests: 20%' },
      { code: 'CSC 421', title: 'Digital Image Processing', units: 3, description: 'Image enhancement, restoration, and computer vision.', semester: '2nd Semester', prerequisites: 'CSC 313', objectives: ['Process digital images', 'Apply filters', 'Implement computer vision'], assessment: 'Exam: 50%, Project: 30%, Tests: 20%' },
      { code: 'CSC 423', title: 'E-Commerce and Web Technologies', units: 2, description: 'Online business models, payment systems, and web frameworks.', semester: '1st Semester', prerequisites: 'CSC 211', objectives: ['Build e-commerce sites', 'Integrate payment systems', 'Apply web frameworks'], assessment: 'Exam: 40%, Project: 40%, Tests: 20%' },
      { code: 'CSC 499', title: 'Final Year Project', units: 6, description: 'Independent research and development project with defense.', semester: 'Both Semesters', prerequisites: 'CSC 401, 400 Level', objectives: ['Conduct independent research', 'Develop complete system', 'Defend project'], assessment: 'Project: 60%, Documentation: 20%, Defense: 20%' },
    ],
  };

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
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {course.description}
                </p>

                {/* View Details Button */}
                <button
                  onClick={() => setSelectedCourse(course)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  View Details
                </button>
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

      {/* Course Details Modal */}
      {selectedCourse && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCourse(null)}
        >
          <div
            className="bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-green-600 text-white p-6 rounded-t-lg flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold mb-1">{selectedCourse.code}</h2>
                <h3 className="text-xl">{selectedCourse.title}</h3>
              </div>
              <button
                onClick={() => setSelectedCourse(null)}
                className="text-white hover:bg-green-700 rounded-full p-2 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Basic Info */}
              <div className="flex flex-wrap gap-4">
                <div className="bg-green-50 px-4 py-2 rounded-lg">
                  <span className="text-sm text-gray-600">Credit Units</span>
                  <p className="text-lg font-semibold text-green-700">
                    {selectedCourse.units} Units
                  </p>
                </div>
                <div className="bg-green-50 px-4 py-2 rounded-lg">
                  <span className="text-sm text-gray-600">Semester</span>
                  <p className="text-lg font-semibold text-green-700">
                    {selectedCourse.semester}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Course Description
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {selectedCourse.description}
                </p>
              </div>

              {/* Prerequisites */}
              {selectedCourse.prerequisites && (
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Prerequisites
                  </h4>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                    <p className="text-gray-700">{selectedCourse.prerequisites}</p>
                  </div>
                </div>
              )}

              {/* Course Objectives */}
              {selectedCourse.objectives && selectedCourse.objectives.length > 0 && (
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Learning Objectives
                  </h4>
                  <ul className="space-y-2">
                    {selectedCourse.objectives.map((objective, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Assessment Methods */}
              {selectedCourse.assessment && (
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Assessment Methods
                  </h4>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                    <p className="text-gray-700 font-medium">
                      {selectedCourse.assessment}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="bg-gray-50 px-6 py-4 rounded-b-lg">
              <button
                onClick={() => setSelectedCourse(null)}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}