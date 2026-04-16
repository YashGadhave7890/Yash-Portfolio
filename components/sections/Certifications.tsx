"use client";

import { motion } from 'framer-motion';
import { FiAward, FiDownload, FiExternalLink } from 'react-icons/fi';
import { SiCoursera, SiHackerrank, SiLeetcode } from 'react-icons/si';
import SectionWrapper from '../SectionWrapper';
import Image from 'next/image';

const Certifications = () => {
  const certifications = [
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      icon: SiCoursera,
      file: '/Aws.pdf',
      category: 'Cloud Computing',
      color: 'orange',
      date: '2025',
    },
    {
      title: 'Cybersecurity Fundamentals',
      issuer: 'Certificate Landing',
      icon: SiCoursera,
      file: '/CERTIFICATE_LANDING_CYBERSECURITY.pdf',
      category: 'Cybersecurity',
      color: 'red',
      date: '2026',
    },
    {
      title: 'Foundation of Cybersecurity ',
      issuer: 'Google',
      icon: SiCoursera,
      file: '/Coursera(Google).pdf',
      category: 'Cybersecurity',
      color: 'blue',
      date: '2025',
    },
    {
      title: 'E-Business Fundamentals',
      issuer: 'Certificate Program NPTEL',
      icon: SiCoursera,
      file: '/E-Business.pdf',
      category: 'Business',
      color: 'purple',
      date: '2025',
    },
    {
      title: 'Employment Communication',
      issuer: 'Lab Based Course NPTEL',
      icon: SiCoursera,
      file: '/Employment Communication A Lab based course.pdf',
      category: 'Soft Skills',
      color: 'green',
      date: '2025',
    },
    {
      title: 'National Finalist Medal',
      issuer: 'A1 Launchpad Hackathon',
      icon: SiCoursera,
      file: '/NationalFinalCertificate_Medal.pdf',
      category: 'Achievement',
      color: 'yellow',
      date: '2025',
    },
    {
      title: 'Java Programming',
      issuer: 'Certificate Program NPTEL',
      icon: SiCoursera,
      file: '/Programming in Java.pdf',
      category: 'Programming',
      color: 'red',
      date: '2024',
    },
    {
      title: 'SAWIT Certification',
      issuer: 'Learnathon',
      icon: SiCoursera,
      file: '/Sawit.pdf',
      category: 'Learning',
      color: 'cyan',
      date: '2025',
    },
    {
      title: 'TCS ION Certification',
      issuer: 'Tata Consultancy Services',
      icon: SiCoursera,
      file: '/TCS_ION.pdf',
      category: 'Professional Training',
      color: 'blue',
      date: '2023',
    },
    {
      title: 'Web Fundamentals',
      issuer: 'Certificate Program',
      icon: SiCoursera,
      file: '/Web Fundamentals.pdf',
      category: 'Web Development',
      color: 'green',
      date: '2025',
    },
    {
      title: 'Honeywell Certification',
      issuer: 'Honeywell',
      icon: SiCoursera,
      file: '/honeywell-certificate.pdf',
      category: 'Industrial Training',
      color: 'orange',
      date: '2026',
    },
    {
      title: 'Yuva AI Certification',
      issuer: 'AI Training Program',
      icon: SiCoursera,
      file: '/Yuva_ai.pdf',
      category: 'Artificial Intelligence',
      color: 'purple',
      date: '2026',
    },
  ];

  const workshops = [];

  const leetcodeBadges = [];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        gradient: 'from-blue-500/30 to-blue-500/10',
        text: 'text-blue-400',
        border: 'hover:border-blue-400',
        shadow: 'hover:shadow-blue-500/30',
        button: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
        glow: 'shadow-blue-500/20',
      },
      cyan: {
        gradient: 'from-cyan-500/30 to-cyan-500/10',
        text: 'text-cyan-400',
        border: 'hover:border-cyan-400',
        shadow: 'hover:shadow-cyan-500/30',
        button: 'from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700',
        glow: 'shadow-cyan-500/20',
      },
      green: {
        gradient: 'from-green-500/30 to-green-500/10',
        text: 'text-green-400',
        border: 'hover:border-green-400',
        shadow: 'hover:shadow-green-500/30',
        button: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
        glow: 'shadow-green-500/20',
      },
      orange: {
        gradient: 'from-orange-500/30 to-orange-500/10',
        text: 'text-orange-400',
        border: 'hover:border-orange-400',
        shadow: 'hover:shadow-orange-500/30',
        button: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
        glow: 'shadow-orange-500/20',
      },
      purple: {
        gradient: 'from-purple-500/30 to-purple-500/10',
        text: 'text-purple-400',
        border: 'hover:border-purple-400',
        shadow: 'hover:shadow-purple-500/30',
        button: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
        glow: 'shadow-purple-500/20',
      },
      red: {
        gradient: 'from-red-500/30 to-red-500/10',
        text: 'text-red-400',
        border: 'hover:border-red-400',
        shadow: 'hover:shadow-red-500/30',
        button: 'from-red-500 to-red-600 hover:from-red-600 hover:to-red-700',
        glow: 'shadow-red-500/20',
      },
    };
    return colors[color as keyof typeof colors] || colors.cyan;
  };

  const CertificateCard = ({ cert, index }: { cert: any; index: number }) => {
    const colors = getColorClasses(cert.color);

    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        whileHover={{ y: -10, scale: 1.03 }}
        className={`relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-700/50 ${colors.border} transition-all duration-300 hover:shadow-2xl ${colors.shadow} shadow-lg ${colors.glow} group overflow-hidden`}
      >
        {/* Animated background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
        
        {/* Content */}
        <div className="relative z-10">
          {/* Header with Icon and Category */}
          <div className="flex items-start justify-between mb-5">
            <div className={`p-3.5 rounded-xl bg-gradient-to-br ${colors.gradient} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
              <cert.icon className={`${colors.text} text-2xl`} />
            </div>
            <span className={`text-xs font-bold px-3.5 py-2 rounded-full bg-gradient-to-r ${colors.gradient} ${colors.text} border-2 border-current/30 shadow-md`}>
              {cert.category}
            </span>
          </div>

          {/* Content */}
          <div className="space-y-3 mb-6">
            <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300 line-clamp-2 min-h-[3.5rem]">
              {cert.title}
            </h3>
            <div className="flex items-center justify-between text-sm gap-2">
              <span className="text-gray-400 font-medium text-xs line-clamp-1">{cert.issuer}</span>
              <span className={`${colors.text} text-xs font-bold bg-gray-800/50 px-2.5 py-1 rounded-md`}>{cert.date}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <a
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r ${colors.button} text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm`}
            >
              <FiExternalLink className="text-base" />
              <span>View</span>
            </a>
            <a
              href={cert.file}
              download
              className="inline-flex items-center justify-center px-4 py-3 bg-gray-700/70 hover:bg-gray-600 text-gray-300 hover:text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 border-2 border-gray-600 hover:border-gray-500 shadow-md"
            >
              <FiDownload className="text-lg" />
            </a>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <SectionWrapper id="certifications" className="bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900 pointer-events-none"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Certifications & <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mx-auto rounded-full mb-6 shadow-lg shadow-cyan-500/50"></div>
          <p className="text-gray-400 max-w-3xl mx-auto text-base md:text-lg px-4 leading-relaxed">
            A collection of professional certifications, workshops, and competitive programming achievements showcasing continuous learning and technical expertise
          </p>
        </motion.div>


        {/* Professional Certifications */}
        <div className="mb-16 md:mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-10 flex items-center gap-4"
          >
            <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl shadow-lg shadow-cyan-500/20">
              <FiAward className="text-cyan-400 text-3xl" />
            </div>
            <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent">
              Professional Certifications
            </span>
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {certifications.map((cert, index) => (
              <CertificateCard key={index} cert={cert} index={index} />
            ))}
          </div>
        </div>



      </div>
    </SectionWrapper>
  );
};

export default Certifications;
