"use client";

import { motion } from 'framer-motion';
import { FiBookOpen, FiCalendar, FiAward } from 'react-icons/fi';
import SectionWrapper from '../SectionWrapper';

const Education = () => {
  const education = [
    {
      institution: 'College of Engineering, Pune',
      degree: 'Bachelor of Engineering in Information Technology',
      period: '2023 - 2027 (4 Years)',
      location: 'Kopargaon, Maharashtra, India',
      cgpa: '8.66',
      status: 'Currently Pursuing',
      achievements: [
        'Maintained CGPA of 8.66, demonstrating consistent academic excellence',
        'Solved 500+ coding problems across LeetCode, HackerRank, and CodeChef platforms',
        'Completed 4+ full-stack projects implementing React, Node.js, and IoT technologies',
        'Participated in national hackathons and technical coding competitions',
        'Active contributor to open-source projects and technical learning communities',
        'Currently in 3rd year with strong foundation in Information Technology concepts',
      ],
      technologies: ['Data Structures', 'Algorithms', 'Database Systems', 'Web Development', 'AI/ML','Java','Python'],
      color: 'cyan',
    },
    {
      institution: 'Higher Secondary School',
      degree: '12th Grade - Science Stream (Maharashtra Board)',
      period: '2021 - 2023 (2 Years)',
      location: 'Rahata,Maharashtra, India',
      percentage: '71.27%',
      achievements: [
        'Completed science foundation with focus on Physics, Chemistry, and Mathematics',
        'Achieved 71.27% in Maharashtra Board examinations with distinction in Mathematics',
        'Developed analytical and problem-solving skills through rigorous curriculum',
        'Early exposure to programming through computer science curriculum and self-learning',
      ],
      technologies: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science'],
      color: 'blue',
    },
    {
      institution: 'High School',
      degree: '10th Grade (Maharashtra Board)',
      period: '2011 - 2021 (10 Years)',
      location: 'Rahata,Maharashtra, India',
      percentage: '88.20%',
      achievements: [
        'Achieved 88.20% in Maharashtra Board SSC examinations',
        'Strong foundation in core subjects including Mathematics and Science',
        'Developed interest in technology and programming during high school',
        'Participated in science exhibitions and technical competitions',
      ],
      technologies: ['Mathematics', 'Science', 'Social Studies', 'English', 'Computer Basics'],
      color: 'purple',
    },
  ];

  return (
    <SectionWrapper id="education" className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-400 rounded-full opacity-30"></div>

          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-8 md:mb-12 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto'
              }`}
            >
              {/* Timeline Dot */}
              <div className="hidden md:block absolute top-8 left-1/2 md:left-auto ${index % 2 === 0 ? 'md:-right-3' : 'md:-left-3'} transform md:transform-none w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full border-4 border-gray-800 z-10 shadow-lg shadow-cyan-500/50 animate-pulse"></div>

              {/* Content Card */}
              <div
                className={`bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 md:p-8 border-l-[6px] ${
                  edu.color === 'cyan' ? 'border-cyan-400' : 'border-blue-400'
                } hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-[1.02] group border-2 border-gray-700 hover:border-cyan-400/50`}
              >
                {/* Institution & Degree */}
                <div className="mb-4 md:mb-5">
                  <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">{edu.degree}</h3>
                  <div className="flex items-center gap-2.5 text-cyan-400 font-bold text-base md:text-lg mb-2">
                    <FiBookOpen className="text-lg md:text-xl" />
                    <span>{edu.institution}</span>
                  </div>
                  {edu.cgpa && (
                    <div className="flex items-center gap-2.5 text-green-400 font-bold text-base md:text-lg">
                      <FiAward className="text-lg md:text-xl" />
                      <span>CGPA: {edu.cgpa}</span>
                      {edu.status && <span className="text-cyan-400 ml-2">({edu.status})</span>}
                    </div>
                  )}
                  {edu.percentage && (
                    <div className="flex items-center gap-2.5 text-green-400 font-bold text-base md:text-lg">
                      <FiAward className="text-lg md:text-xl" />
                      <span>Percentage: {edu.percentage}</span>
                    </div>
                  )}
                </div>

                {/* Period & Location */}
                <div className="flex flex-wrap gap-3 md:gap-5 mb-4 md:mb-5 text-gray-400 text-base md:text-lg font-medium">
                  <div className="flex items-center gap-2">
                    <FiCalendar className="text-base md:text-lg" />
                    <span>{edu.period}</span>
                  </div>
                  <span className="hidden sm:inline text-cyan-400">•</span>
                  <span>{edu.location}</span>
                </div>

                {/* Achievements */}
                <div className="mb-4 md:mb-5">
                  <h4 className="text-white font-bold text-sm md:text-base mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-5 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></span>
                    Key Achievements
                  </h4>
                  <ul className="space-y-2.5 md:space-y-3">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-300 text-base md:text-lg flex items-start leading-relaxed">
                        <span className="text-cyan-400 text-lg font-bold mr-2 md:mr-2.5 mt-0.5">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 md:gap-2.5">
                  {edu.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-2 md:py-2.5 bg-gradient-to-r from-gray-800 to-gray-900 text-cyan-400 text-sm md:text-base font-semibold rounded-lg border-2 border-gray-700 hover:border-cyan-400/70 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Education;
