"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiFileText, FiMail, FiCheck } from 'react-icons/fi';

const ResumeDownload = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    
    // Simulate download process
    setTimeout(() => {
      // Try to download the PDF resume file, with fallback
      const a = document.createElement('a');
      a.href = '/resume.pdf'; // Try different possible PDF file names
      a.download = 'Yash_Gadhave_Resume.pdf';
      a.target = '_blank'; // Open in new tab if download fails
      
      // Add error handling
      fetch('/resume.pdf')
        .then(response => {
          if (response.ok) {
            // File exists, download it
            a.href = '/resume.pdf';
            a.download = 'Yash_Gadhave_Resume.pdf';
            a.click();
          } else {
            // File doesn't exist, try alternative or show message
            alert('Resume PDF will be available soon. Please contact me directly at yashgadhave248@gmail.com');
          }
        })
        .catch(() => {
          // Network error, show message
          alert('Resume PDF will be available soon. Please contact me directly at yashgadhave248@gmail.com');
        });
      
      document.body.appendChild(a);
      document.body.removeChild(a);
      
      setIsDownloading(false);
      setDownloadComplete(true);
      
      setTimeout(() => setDownloadComplete(false), 3000);
    }, 2000);
  };

  const handleEmailResume = () => {
    const subject = 'Resume Request - Yash Gadhave';
    const body = `Dear Hiring Manager,

I am interested in exploring opportunities with your organization. Please find my resume attached for your review.

Best regards,
Yash Gadhave
IT Engineering Student
Email: yashgadhave248@gmail.com
Phone: +91 9021819895
GitHub: github.com/YashGadhave7890`;

    // Open Gmail compose window
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=yashgadhave248@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <motion.button
        onClick={handleDownload}
        disabled={isDownloading}
        className={`relative inline-flex items-center gap-3 px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
          isDownloading
            ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
            : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105'
        }`}
        whileHover={!isDownloading ? { scale: 1.05 } : {}}
        whileTap={!isDownloading ? { scale: 0.95 } : {}}
      >
        <motion.div
          animate={isDownloading ? { rotate: 360 } : { rotate: 0 }}
          transition={{ duration: 1, repeat: isDownloading ? Infinity : 0, ease: "linear" }}
        >
          {downloadComplete ? (
            <FiCheck className="text-lg text-green-400" />
          ) : (
            <FiDownload className="text-lg" />
          )}
        </motion.div>
        
        <span>
          {isDownloading ? 'Downloading...' : downloadComplete ? 'Downloaded!' : 'Download Resume'}
        </span>

        {/* Progress bar for download */}
        {isDownloading && (
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-cyan-400 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2 }}
          />
        )}
      </motion.button>

      <motion.button
        onClick={handleEmailResume}
        className="inline-flex items-center gap-3 px-6 py-3 bg-gray-800 text-cyan-400 font-semibold rounded-lg border-2 border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:scale-105"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FiMail className="text-lg" />
        <span>Email Resume</span>
      </motion.button>

      <motion.button
        onClick={() => window.open('https://github.com/YashGadhave7890', '_blank')}
        className="inline-flex items-center gap-3 px-6 py-3 bg-gray-800 text-cyan-400 font-semibold rounded-lg border-2 border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:scale-105"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FiFileText className="text-lg" />
        <span>View GitHub</span>
      </motion.button>
    </div>
  );
};

export default ResumeDownload;
