'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const [currentImage, setCurrentImage] = useState(0);
  
  // Placeholder images - replace with actual ABSU CSC images
  const images = [
    '/images/slideshow1.jpg',
    'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full">
      {/* Hero Section with Slideshow */}
      <div className="relative h-[500px] w-full overflow-hidden">
        {/* Slideshow Images */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`ABSU CSC ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
        ))}

        {/* Centered Heading with Framer Motion Fade-in */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-bold text-white text-center px-4"
          >
            About ABSU CSC
          </motion.h1>
        </div>
      </div>

      {/* About Content Section */}
      <div className="w-full bg-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-gray-950">
              Welcome to the Department of Computer Science
            </h2>
            
            <div className="text-gray-950 leading-relaxed">
              <img 
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600" 
                alt="Computer Science Students"
                className="float-right ml-6 mb-4 w-80 h-64 object-cover rounded-lg shadow-lg"
              />
              
              <p className="mb-4">
                The Department of Computer Science at Abia State University (ABSU) stands as a beacon of technological excellence and innovation in the region. Established with the vision of producing world-class computer scientists and IT professionals, our department has consistently delivered quality education that meets both national and international standards.
              </p>
              <p className="mb-4">
                Our curriculum is designed to provide students with a solid foundation in computer science theory while emphasizing practical, hands-on experience with cutting-edge technologies. We offer comprehensive programs that cover areas such as software engineering, artificial intelligence, data science, cybersecurity, and web development, ensuring our graduates are well-equipped to tackle the challenges of the digital age.
              </p>
              <p className="mb-4">
                With state-of-the-art computer laboratories, dedicated faculty members who are experts in their fields, and a commitment to research and innovation, the ABSU Computer Science Department creates an environment where students can thrive academically and professionally. Our graduates have gone on to excel in various tech companies, startups, and research institutions both within Nigeria and internationally.
              </p>
              <p>
                We pride ourselves on fostering a collaborative learning environment that encourages creativity, critical thinking, and problem-solving skills. Whether you're a prospective student, current student, or simply interested in learning more about our programs, we invite you to explore what makes the ABSU Computer Science Department a premier destination for technology education.
              </p>
            </div>

            {/* History Section with Wrapped Image */}
            <h2 className="text-3xl font-bold mb-6 mt-12 text-gray-950">
              History of the Department of Computer Science
            </h2>
            
            <div className="text-gray-950 leading-relaxed">
              <img 
                src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600" 
                alt="ABSU Computer Science Department Building"
                className="float-right ml-6 mb-4 w-80 h-64 object-cover rounded-lg shadow-lg"
              />
              
              <p className="mb-4">
                The Department of Computer Science at Abia State University was established in 1995, marking a significant milestone in the university's commitment to technological advancement and digital literacy in the region. The department began with a modest cohort of 25 pioneering students and three dedicated faculty members who shared a vision of creating a center of excellence for computing education in southeastern Nigeria.
              </p>
              
              <p className="mb-4">
                In its early years, the department faced numerous challenges, including limited computing resources and infrastructure. However, through strategic partnerships with technology companies and government support, the department gradually expanded its facilities. By the early 2000s, the department had established its first fully-equipped computer laboratory with internet connectivity, opening new horizons for research and practical learning.
              </p>
              
              <p className="mb-4">
                The department achieved a major breakthrough in 2008 when it received full accreditation from the National Universities Commission (NUC), validating its academic programs and teaching standards. This recognition attracted more students and qualified faculty members, leading to exponential growth in enrollment and research output. The department introduced specialized tracks in software engineering, network security, and database management, responding to the evolving needs of the technology industry.
              </p>
              
              <p className="mb-4">
                Over the past decade, the ABSU Computer Science Department has transformed into one of the leading computer science programs in Nigerian universities. The department now boasts state-of-the-art laboratories, a dedicated faculty of over 20 Ph.D. holders, and partnerships with major tech companies for internships and research collaborations. Our alumni have gone on to work with prestigious organizations including Microsoft, Google, and various Nigerian fintech companies, testament to the quality of education provided.
              </p>
              
              <p>
                Today, the department continues to evolve, incorporating emerging technologies such as artificial intelligence, machine learning, blockchain, and cloud computing into its curriculum. With a student population exceeding 500 and a strong commitment to research innovation, the Department of Computer Science at ABSU remains dedicated to shaping the next generation of technology leaders who will drive Nigeria's digital transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}