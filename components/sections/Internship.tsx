"use client";

import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiAward, FiExternalLink } from 'react-icons/fi';
import SectionWrapper from '../SectionWrapper';

const Internship = () => {
  const internships = [
    {
      company: 'Infosys Springboard',
      role: 'Virtual Intern 6.0',
      period: '2026 (3 Months)',
      location: 'Virtual/Remote',
      description: 'Completed intensive virtual internship program focusing on real-world project development and professional skill building.',
      achievements: [
        'Developed comprehensive Data Visualization dashboard using React and modern web technologies',
        'Built Natural Disaster Database system for emergency response and disaster management',
        'Collaborated effectively with cross-functional teams in agile development environment',
        'Implemented responsive design principles and data-driven solutions for optimal user experience',
        'Received outstanding performance evaluations and mentor recognition for technical excellence',
      ],
      technologies: ['React', 'Node.js', 'Data Visualization', 'Database Design', 'API Integration', 'Agile Methodology'],
      highlights: [
        'Professional Development',
        'Full-Stack Project Experience',
        'Team Collaboration',
        'Technical Excellence'
      ],
      link: 'https://infyspringboard.onwingspan.com/',
      color: 'purple'
    },
    {
      company: 'A-1 Fence Products Company Pvt. Ltd.',
      role: 'Software Intern',
      period: '2026 (6 Months)',
      location: 'Mumbai, Maharashtra',
      description: 'Currently working as a Software Intern developing enterprise-level solutions and contributing to real-world projects. Gaining hands-on experience in software development lifecycle and professional workplace practices.',
      achievements: [
        'Developing scalable software solutions for enterprise clients',
        'Collaborating with senior developers on code optimization and best practices',
        'Learning modern software development methodologies and industry standards',
        'Contributing to project documentation and quality assurance processes',
        'Working in agile development environment with focus on deliverable-based outcomes',
      ],
      technologies: ['Software Development', 'Enterprise Solutions', 'Agile Methodology', 'Code Optimization', 'Documentation'],
      highlights: [
        'Enterprise Development',
        'Professional Experience',
        'Team Collaboration',
        'Technical Growth'
      ],
      link: 'https://www.a-1fenceproducts.com/',
      color: 'cyan'
    }
  ];

  return (
    <SectionWrapper id="internship" className="bg-gray-900">
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
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Internships</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Internship Details */}
        <div className="space-y-16 md:space-y-24">
          {internships.map((internship, index) => (
            <div key={index} className="relative">
              {/* Vertical Line */}
              <div className={`hidden md:block absolute top-0 bottom-0 ${
                index === 0 ? 'left-1/4' : 'right-1/4'
              } transform -translate-x-1/2 h-full w-1 bg-gradient-to-b ${
                index === 0 ? 'from-purple-400 via-pink-500 to-purple-400' : 'from-cyan-400 via-blue-500 to-cyan-400'
              } rounded-full opacity-30`}></div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative mb-8 md:mb-12 ${
                  index === 0 ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'
                }`}
              >
                {/* Timeline Dot */}
                <div className={`hidden md:block absolute top-8 ${
                  index === 0 ? 'left-1/4 md:left-auto md:-right-3' : 'right-1/4 md:left-auto md:right-3'
                } transform md:transform-none w-6 h-6 bg-gradient-to-br ${
                  index === 0 ? 'from-purple-400 via-pink-500 to-purple-400' : 'from-cyan-400 via-blue-500 to-cyan-400'
                } rounded-full border-4 border-gray-800 z-10 shadow-lg shadow-purple-500/50 animate-pulse`}></div>

                {/* Content Card */}
                <div
                  className={`bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 md:p-10 border-l-[6px] ${
                    internship.color === 'purple' ? 'border-purple-400' : 'border-cyan-400'
                  } hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-[1.02] group border-2 border-gray-700 hover:border-purple-400/50`}
                >
                  {/* Company & Role */}
                  <div className="mb-6 md:mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-3">
                      {internship.company}
                    </h3>
                    <div className="flex items-center gap-3 text-purple-400 font-bold text-lg md:text-xl mb-4">
                      <FiBriefcase className="text-lg md:text-xl" />
                      <span>{internship.role}</span>
                    </div>
                  </div>

                  {/* Period & Location */}
                  <div className="flex flex-wrap gap-3 md:gap-5 mb-4 md:mb-5 text-gray-400 text-base md:text-lg font-medium">
                    <div className="flex items-center gap-2">
                      <FiCalendar className="text-base md:text-lg" />
                      <span>{internship.period}</span>
                    </div>
                    <span className="hidden sm:inline text-purple-400">•</span>
                    <span>{internship.location}</span>
                  </div>

                  {/* Description */}
                  <div className="mb-6 md:mb-8">
                    <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                      {internship.description}
                    </p>
                  </div>

                  {/* Key Achievements */}
                  <div className="mb-6 md:mb-8">
                    <h4 className="text-white font-bold text-sm md:text-base mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-5 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full"></span>
                      Key Achievements
                    </h4>
                    <ul className="space-y-2.5 md:space-y-3">
                      {internship.achievements.map((achievement: any, i: number) => (
                        <li key={i} className="text-gray-300 text-base md:text-lg flex items-start leading-relaxed">
                          <span className="text-purple-400 text-lg font-bold mr-2 md:mr-2.5 mt-0.5">▹</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6 md:mb-8">
                    <h4 className="text-white font-bold text-sm md:text-base mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-5 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full"></span>
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2 md:gap-2.5">
                      {internship.technologies.map((tech: any, i: number) => (
                        <span
                          key={i}
                          className="px-3 py-2 md:py-2.5 bg-gradient-to-r from-gray-800 to-gray-900 text-purple-400 text-sm md:text-base font-semibold rounded-lg border-2 border-gray-700 hover:border-purple-400/70 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="flex items-center justify-between pt-4 border-t-2 border-gray-700">
                    <div className="flex items-center gap-2 text-gray-400 text-sm md:text-base">
                      <FiAward className="text-base md:text-lg" />
                      <span className="font-semibold">Professional Excellence</span>
                    </div>
                    <motion.a
                      href={internship.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
                    >
                      <FiExternalLink className="text-lg" />
                      <span>Learn More</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Internship;
