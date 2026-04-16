"use client";

import { motion } from 'framer-motion';
import {
  SiPython,
  SiJavascript,
  SiPhp,
  SiMysql,
  SiGithub,
} from 'react-icons/si';
import { FiServer, FiDatabase, FiTool, FiCode, FiCloud } from 'react-icons/fi';
import SectionWrapper from '../SectionWrapper';
import { SKILLS_CATEGORIES } from '../../lib/constants';

const Skills = () => {
  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: any } = {
      FiCode,
      FiTool,
      FiDatabase,
      FiServer,
      FiCloud,
      SiPython,
      SiJavascript,
      SiPhp,
      SiMysql,
      SiGithub,
    };
    return iconMap[iconName] || FiTool;
  };

  const skillCategories = SKILLS_CATEGORIES.map(category => ({
    ...category,
    icon: getIconComponent(category.icon),
    skills: category.skills.map(skill => ({
      ...skill,
      icon: skill.icon ? getIconComponent(skill.icon) : undefined,
      proficiency: skill.proficiency || 85
    }))
  }));

  const getColorClass = (color: string) => {
    const colors: { [key: string]: string } = {
      cyan: 'from-cyan-500 to-cyan-400',
      blue: 'from-blue-500 to-blue-400',
      purple: 'from-purple-500 to-purple-400',
      green: 'from-green-500 to-green-400',
    };
    return colors[color] || 'from-cyan-500 to-cyan-400';
  };

  return (
    <SectionWrapper id="skills" className="bg-gray-800">
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
            Technical <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-4 md:p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300 group hover:shadow-xl hover:shadow-cyan-500/20"
            >
              {/* Category Header */}
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className={`p-2 md:p-3 bg-gradient-to-br ${getColorClass(category.color)} rounded-lg group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300`}>
                  <category.icon className="text-white text-xl md:text-2xl" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills List with Progress Bars */}
              <div className="space-y-3 md:space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 flex-1 min-w-0">
                        {skill.icon && <skill.icon className="text-cyan-400 text-lg md:text-xl flex-shrink-0" />}
                        <span className="text-gray-300 font-semibold text-sm md:text-base truncate">{skill.name}</span>
                      </div>
                      <span className="text-cyan-400 font-bold text-sm md:text-base flex-shrink-0">
                        {skill.proficiency || 85}%
                      </span>
                    </div>
                    <div className="relative w-full h-2 md:h-3 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency || 85}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: catIndex * 0.1 + skillIndex * 0.05 + 0.2 }}
                        className={`h-full bg-gradient-to-r ${getColorClass(category.color)} rounded-full relative overflow-hidden`}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
