"use client";

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import { PERSONAL_INFO, HERO_SOCIAL_LINKS } from '../../lib/constants';
import HeroBackground from '../HeroBackground';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-16">
      {/* 3D Animated Background */}
      <HeroBackground />
      
      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full py-8">
        <div className="text-center">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 md:mb-6"
          >
          <span className="text-cyan-400 text-lg md:text-2xl font-medium tracking-wide">
            Hello, I'm
          </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent mb-3 sm:mb-4 md:mb-6 px-4"
          >
            {PERSONAL_INFO.name}
          </motion.h1>

          {/* Animated Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base sm:text-lg md:text-2xl lg:text-3xl text-gray-300 mb-4 sm:mb-6 md:mb-8 min-h-[2.5rem] sm:min-h-[3rem] md:min-h-[4rem] flex items-center justify-center"
          >
            <TypeAnimation
              sequence={[
                ...PERSONAL_INFO.titles.flatMap(title => [title, 2000])
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-cyan-400"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-12 px-4 leading-relaxed"
          >
            {PERSONAL_INFO.description}
          </motion.p>

          {/* CTA Buttons - Recruiter Focused */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-12 px-4"
          >
            {/* Primary Resume Download Button */}
            <a
              href={PERSONAL_INFO.resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold text-base sm:text-lg md:text-xl rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-green-500/50 hover:shadow-green-500/70 border-2 border-green-400/30"
            >
              <FiDownload className="text-xl sm:text-2xl" />
              <span>Download Resume</span>
            </a>
            
            {/* Secondary Projects Button */}
            <button
              onClick={() => scrollToSection('#projects')}
              className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold text-base sm:text-lg md:text-xl rounded-xl transition-all duration-300 hover:scale-105 shadow-xl shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/70"
            >
              View Projects
            </button>
            
            {/* Contact Button */}
            <button
              onClick={() => scrollToSection('#contact')}
              className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-transparent border-2 border-cyan-500 text-cyan-400 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white hover:border-transparent font-bold text-base sm:text-lg md:text-xl rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex justify-center gap-4 md:gap-6"
          >
            {HERO_SOCIAL_LINKS.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                className="text-gray-400 hover:text-cyan-400 transition-all duration-300 text-xl md:text-2xl p-3 rounded-full hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/50"
                aria-label={social.label}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-cyan-400 text-3xl cursor-pointer"
              onClick={() => scrollToSection('#about')}
            >
              ↓
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
