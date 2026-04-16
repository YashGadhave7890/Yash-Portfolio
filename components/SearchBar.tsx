"use client";

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiX } from 'react-icons/fi';
import { PROJECTS, SKILLS_CATEGORIES } from '../lib/constants';

interface SearchBarProps {
  onProjectSelect?: (project: any) => void;
  onSkillSelect?: (skill: any) => void;
}

export default function SearchBar({ onProjectSelect, onSkillSelect }: SearchBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Combine all searchable items
  const allItems = useMemo(() => {
    const items: Array<{ type: 'project' | 'skill'; data: any; keywords: string[] }> = [];
    
    // Add projects
    PROJECTS.forEach(project => {
      items.push({
        type: 'project',
        data: project,
        keywords: [
          project.title.toLowerCase(),
          project.subtitle.toLowerCase(),
          project.description.toLowerCase(),
          ...project.technologies.map(tech => tech.toLowerCase()),
          ...project.features.map(feature => feature.toLowerCase())
        ]
      });
    });

    // Add skills
    SKILLS_CATEGORIES.forEach(category => {
      category.skills.forEach(skill => {
        items.push({
          type: 'skill',
          data: { ...skill, category: category.title },
          keywords: [skill.name.toLowerCase(), category.title.toLowerCase()]
        });
      });
    });

    return items;
  }, []);

  // Filter items based on search term
  const filteredItems = useMemo(() => {
    if (!searchTerm.trim()) return [];
    
    return allItems.filter(item =>
      item.keywords.some(keyword => keyword.includes(searchTerm.toLowerCase()))
    ).slice(0, 8); // Limit to 8 results
  }, [searchTerm, allItems]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => (prev + 1) % filteredItems.length);
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => prev === 0 ? filteredItems.length - 1 : prev - 1);
          break;
        case 'Enter':
          e.preventDefault();
          if (filteredItems[selectedIndex]) {
            handleItemClick(filteredItems[selectedIndex]);
          }
          break;
        case 'Escape':
          setIsOpen(false);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex]);

  const handleItemClick = (item: typeof filteredItems[0]) => {
    if (item.type === 'project' && onProjectSelect) {
      onProjectSelect(item.data);
    } else if (item.type === 'skill' && onSkillSelect) {
      onSkillSelect(item.data);
    }
    setIsOpen(false);
    setSearchTerm('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setSelectedIndex(0);
  };

  return (
    <div className="relative">
      {/* Search Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg"
        aria-label="Search"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FiSearch className="w-5 h-5 text-gray-600 dark:text-gray-400" />
      </motion.button>

      {/* Search Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 right-0 w-80 bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50"
          >
            {/* Search Input */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleInputChange}
                  placeholder="Search projects or skills..."
                  className="w-full pl-10 pr-10 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  autoFocus
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <FiX className="w-3 h-3 text-gray-400" />
                  </button>
                )}
              </div>
            </div>

            {/* Search Results */}
            <div className="max-h-96 overflow-y-auto">
              {filteredItems.length === 0 ? (
                <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                  <FiSearch className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p>No results found</p>
                  <p className="text-sm mt-1">Try searching for projects or skills</p>
                </div>
              ) : (
                <div className="py-2">
                  {filteredItems.map((item, index) => (
                    <motion.button
                      key={`${item.type}-${item.data.name || item.data.title}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleItemClick(item)}
                      className={`w-full px-4 py-3 flex items-start gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
                        index === selectedIndex ? 'bg-gray-100 dark:bg-gray-800' : ''
                      }`}
                    >
                      <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                        item.type === 'project' 
                          ? 'bg-cyan-500' 
                          : 'bg-purple-500'
                      }`} />
                      <div className="flex-1 text-left">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full font-medium">
                            {item.type === 'project' ? 'Project' : 'Skill'}
                          </span>
                          {item.type === 'skill' && (
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {item.data.category}
                            </span>
                          )}
                        </div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                          {item.type === 'project' ? item.data.title : item.data.name}
                        </h4>
                        {item.type === 'project' && (
                          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mt-1">
                            {item.data.description}
                          </p>
                        )}
                        {item.type === 'project' && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {item.data.technologies.slice(0, 3).map((tech: string, i: number) => (
                              <span
                                key={i}
                                className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-3 border-t border-gray-200 dark:border-gray-700 text-xs text-gray-500 dark:text-gray-400">
              <div className="flex items-center justify-between">
                <span>
                  {filteredItems.length} result{filteredItems.length !== 1 ? 's' : ''}
                </span>
                <div className="flex items-center gap-2">
                  <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs">ESC</kbd>
                  <span>to close</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click outside to close */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
