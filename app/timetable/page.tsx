'use client';

import { useState } from 'react';
import { Calendar, Clock, MapPin, User } from 'lucide-react';

export default function TimetablePage() {
  const [activeLevel, setActiveLevel] = useState<'100' | '200' | '300' | '400'>('100');

  const levels: ('100' | '200' | '300' | '400')[] = ['100', '200', '300', '400'];

  interface ClassSession {
    courseCode: string;
    courseTitle: string;
    time: string;
    venue: string;
    lecturer: string;
  }

  interface DaySchedule {
    [key: string]: ClassSession[];
  }

  interface TimetableData {
    [key: string]: DaySchedule;
  }

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  // Sample timetable data - replace with actual ABSU CSC timetables
  const timetables: TimetableData = {
    '100': {
      Monday: [
        { courseCode: 'CSC 101', courseTitle: 'Intro to Computer Science', time: '8:00 AM - 10:00 AM', venue: 'LT 1', lecturer: 'Dr. Okonkwo' },
        { courseCode: 'MTH 101', courseTitle: 'General Mathematics I', time: '10:00 AM - 12:00 PM', venue: 'LT 2', lecturer: 'Prof. Eze' },
        { courseCode: 'GST 101', courseTitle: 'Use of English', time: '2:00 PM - 4:00 PM', venue: 'LT 3', lecturer: 'Dr. Adeyemi' },
      ],
      Tuesday: [
        { courseCode: 'PHY 101', courseTitle: 'General Physics I', time: '8:00 AM - 10:00 AM', venue: 'Physics Lab', lecturer: 'Dr. Nwosu' },
        { courseCode: 'CSC 103', courseTitle: 'Computer Application Package', time: '12:00 PM - 2:00 PM', venue: 'Computer Lab 1', lecturer: 'Mr. Okoro' },
      ],
      Wednesday: [
        { courseCode: 'CHM 101', courseTitle: 'General Chemistry I', time: '8:00 AM - 10:00 AM', venue: 'Chemistry Lab', lecturer: 'Dr. Ibrahim' },
        { courseCode: 'MTH 101', courseTitle: 'General Mathematics I', time: '10:00 AM - 12:00 PM', venue: 'LT 2', lecturer: 'Prof. Eze' },
        { courseCode: 'GST 103', courseTitle: 'Nigerian Peoples and Culture', time: '2:00 PM - 4:00 PM', venue: 'LT 1', lecturer: 'Dr. Musa' },
      ],
      Thursday: [
        { courseCode: 'PHY 107', courseTitle: 'General Practical Physics I', time: '8:00 AM - 11:00 AM', venue: 'Physics Lab', lecturer: 'Dr. Nwosu' },
        { courseCode: 'CHM 107', courseTitle: 'General Practical Chemistry I', time: '12:00 PM - 3:00 PM', venue: 'Chemistry Lab', lecturer: 'Dr. Ibrahim' },
      ],
      Friday: [
        { courseCode: 'CSC 101', courseTitle: 'Intro to Computer Science', time: '8:00 AM - 10:00 AM', venue: 'LT 1', lecturer: 'Dr. Okonkwo' },
        { courseCode: 'CSC 102', courseTitle: 'Intro to Problem Solving', time: '10:00 AM - 12:00 PM', venue: 'Computer Lab 2', lecturer: 'Mr. Ajayi' },
      ],
    },
    '200': {
      Monday: [
        { courseCode: 'CSC 201', courseTitle: 'Computer Programming I', time: '8:00 AM - 11:00 AM', venue: 'Computer Lab 1', lecturer: 'Dr. Oladele' },
        { courseCode: 'MTH 201', courseTitle: 'Mathematical Methods I', time: '12:00 PM - 2:00 PM', venue: 'LT 2', lecturer: 'Prof. Adeleke' },
      ],
      Tuesday: [
        { courseCode: 'CSC 203', courseTitle: 'Data Structures', time: '8:00 AM - 10:00 AM', venue: 'LT 1', lecturer: 'Dr. Chiamaka' },
        { courseCode: 'STA 201', courseTitle: 'Probability I', time: '10:00 AM - 12:00 PM', venue: 'LT 3', lecturer: 'Dr. Bello' },
        { courseCode: 'CSC 211', courseTitle: 'Intro to Web Development', time: '2:00 PM - 4:00 PM', venue: 'Computer Lab 2', lecturer: 'Mr. Daniel' },
      ],
      Wednesday: [
        { courseCode: 'CSC 209', courseTitle: 'Discrete Mathematics', time: '8:00 AM - 10:00 AM', venue: 'LT 2', lecturer: 'Dr. Okonkwo' },
        { courseCode: 'MTH 203', courseTitle: 'Linear Algebra I', time: '10:00 AM - 12:00 PM', venue: 'LT 1', lecturer: 'Prof. Eze' },
        { courseCode: 'GST 201', courseTitle: 'Logic and Philosophy', time: '2:00 PM - 4:00 PM', venue: 'LT 4', lecturer: 'Dr. Onyeka' },
      ],
      Thursday: [
        { courseCode: 'CSC 207', courseTitle: 'Computer Programming II', time: '8:00 AM - 11:00 AM', venue: 'Computer Lab 1', lecturer: 'Dr. Oladele' },
        { courseCode: 'CSC 205', courseTitle: 'Operating Systems I', time: '12:00 PM - 2:00 PM', venue: 'LT 1', lecturer: 'Dr. Ahmed' },
      ],
      Friday: [
        { courseCode: 'STA 203', courseTitle: 'Statistics for Physical Sciences', time: '8:00 AM - 10:00 AM', venue: 'Computer Lab 3', lecturer: 'Dr. Bello' },
        { courseCode: 'CSC 203', courseTitle: 'Data Structures (Practical)', time: '10:00 AM - 1:00 PM', venue: 'Computer Lab 2', lecturer: 'Dr. Chiamaka' },
      ],
    },
    '300': {
      Monday: [
        { courseCode: 'CSC 301', courseTitle: 'Computer Architecture', time: '8:00 AM - 10:00 AM', venue: 'LT 1', lecturer: 'Dr. Uche' },
        { courseCode: 'CSC 305', courseTitle: 'Algorithm Design and Analysis', time: '10:00 AM - 12:00 PM', venue: 'LT 2', lecturer: 'Prof. Adeleke' },
        { courseCode: 'CSC 311', courseTitle: 'Systems Programming', time: '2:00 PM - 5:00 PM', venue: 'Computer Lab 1', lecturer: 'Dr. Oladele' },
      ],
      Tuesday: [
        { courseCode: 'CSC 303', courseTitle: 'Database Management Systems', time: '8:00 AM - 10:00 AM', venue: 'LT 3', lecturer: 'Dr. Chiamaka' },
        { courseCode: 'CSC 319', courseTitle: 'Computer Networks I', time: '10:00 AM - 12:00 PM', venue: 'Networking Lab', lecturer: 'Dr. Ahmed' },
        { courseCode: 'CSC 315', courseTitle: 'Theory of Computation', time: '2:00 PM - 4:00 PM', venue: 'LT 2', lecturer: 'Dr. Okonkwo' },
      ],
      Wednesday: [
        { courseCode: 'CSC 307', courseTitle: 'Software Engineering', time: '8:00 AM - 10:00 AM', venue: 'LT 1', lecturer: 'Dr. Emeka' },
        { courseCode: 'CSC 321', courseTitle: 'Numerical Methods', time: '10:00 AM - 1:00 PM', venue: 'Computer Lab 2', lecturer: 'Dr. Bello' },
      ],
      Thursday: [
        { courseCode: 'CSC 309', courseTitle: 'Artificial Intelligence', time: '8:00 AM - 11:00 AM', venue: 'Computer Lab 1', lecturer: 'Dr. Uche' },
        { courseCode: 'CSC 313', courseTitle: 'Computer Graphics', time: '12:00 PM - 3:00 PM', venue: 'Computer Lab 3', lecturer: 'Mr. Daniel' },
      ],
      Friday: [
        { courseCode: 'CSC 317', courseTitle: 'Object-Oriented Programming', time: '8:00 AM - 11:00 AM', venue: 'Computer Lab 2', lecturer: 'Dr. Oladele' },
        { courseCode: 'CSC 303', courseTitle: 'Database Management (Practical)', time: '12:00 PM - 3:00 PM', venue: 'Computer Lab 1', lecturer: 'Dr. Chiamaka' },
      ],
    },
    '400': {
      Monday: [
        { courseCode: 'CSC 401', courseTitle: 'Research Methodology', time: '8:00 AM - 10:00 AM', venue: 'LT 1', lecturer: 'Prof. Adeleke' },
        { courseCode: 'CSC 407', courseTitle: 'Distributed Systems', time: '10:00 AM - 12:00 PM', venue: 'LT 2', lecturer: 'Dr. Ahmed' },
        { courseCode: 'CSC 417', courseTitle: 'Cloud Computing', time: '2:00 PM - 5:00 PM', venue: 'Computer Lab 1', lecturer: 'Dr. Uche' },
      ],
      Tuesday: [
        { courseCode: 'CSC 403', courseTitle: 'Computer Networks II', time: '8:00 AM - 11:00 AM', venue: 'Networking Lab', lecturer: 'Dr. Ahmed' },
        { courseCode: 'CSC 413', courseTitle: 'Data Mining and Machine Learning', time: '12:00 PM - 2:00 PM', venue: 'Computer Lab 2', lecturer: 'Dr. Uche' },
      ],
      Wednesday: [
        { courseCode: 'CSC 405', courseTitle: 'Compiler Construction', time: '8:00 AM - 10:00 AM', venue: 'LT 1', lecturer: 'Dr. Okonkwo' },
        { courseCode: 'CSC 409', courseTitle: 'Information Security', time: '10:00 AM - 1:00 PM', venue: 'Computer Lab 1', lecturer: 'Dr. Emeka' },
      ],
      Thursday: [
        { courseCode: 'CSC 411', courseTitle: 'Mobile Application Development', time: '8:00 AM - 11:00 AM', venue: 'Computer Lab 2', lecturer: 'Mr. Daniel' },
        { courseCode: 'CSC 421', courseTitle: 'Digital Image Processing', time: '12:00 PM - 3:00 PM', venue: 'Computer Lab 3', lecturer: 'Dr. Chiamaka' },
      ],
      Friday: [
        { courseCode: 'CSC 415', courseTitle: 'Human-Computer Interaction', time: '8:00 AM - 10:00 AM', venue: 'LT 2', lecturer: 'Dr. Oladele' },
        { courseCode: 'CSC 423', courseTitle: 'E-Commerce and Web Technologies', time: '10:00 AM - 1:00 PM', venue: 'Computer Lab 1', lecturer: 'Mr. Daniel' },
        { courseCode: 'CSC 499', courseTitle: 'Final Year Project (Supervision)', time: '2:00 PM - 4:00 PM', venue: 'Project Room', lecturer: 'Various Supervisors' },
      ],
    },
  };

  const currentTimetable = timetables[activeLevel];

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-green-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-3">
            Class Timetable
          </h1>
          <p className="text-center text-green-100 text-lg">
            View your weekly class schedule
          </p>
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

      {/* Timetable Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {activeLevel} Level Schedule
          </h2>
          <p className="text-gray-600">
            Your weekly class timetable for the current semester
          </p>
        </div>

        {/* Timetable Grid */}
        <div className="space-y-8">
          {days.map((day) => (
            <div key={day} className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Day Header */}
              <div className="bg-green-600 text-white px-6 py-4">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  <h3 className="text-xl font-bold">{day}</h3>
                </div>
              </div>

              {/* Classes for the day */}
              <div className="p-6">
                {currentTimetable[day] && currentTimetable[day].length > 0 ? (
                  <div className="space-y-4">
                    {currentTimetable[day].map((session, idx) => (
                      <div
                        key={idx}
                        className="border-l-4 border-green-500 bg-gray-50 p-4 rounded-r-lg hover:shadow-md transition-shadow"
                      >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                          {/* Course Info */}
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-gray-900">
                              {session.courseCode}
                            </h4>
                            <p className="text-gray-700 font-medium">
                              {session.courseTitle}
                            </p>
                          </div>

                          {/* Session Details */}
                          <div className="flex flex-wrap gap-4 text-sm">
                            <div className="flex items-center text-gray-600">
                              <Clock className="h-4 w-4 mr-1 text-green-600" />
                              <span>{session.time}</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <MapPin className="h-4 w-4 mr-1 text-green-600" />
                              <span>{session.venue}</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <User className="h-4 w-4 mr-1 text-green-600" />
                              <span>{session.lecturer}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-8">
                    No classes scheduled for this day
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Legend/Note */}
        <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
          <h4 className="font-semibold text-gray-900 mb-2">Important Notes:</h4>
          <ul className="text-gray-700 space-y-1 text-sm">
            <li>• Please arrive at least 10 minutes before class starts</li>
            <li>• Bring all required materials and textbooks</li>
            <li>• Check notice boards for any schedule changes</li>
            <li>• Practical sessions require lab coats where applicable</li>
          </ul>
        </div>
      </div>
    </div>
  );
}