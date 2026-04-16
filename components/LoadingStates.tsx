"use client";

import { motion } from 'framer-motion';

// Skeleton component for loading states
export const SkeletonCard = ({ className = "" }: { className?: string }) => (
  <motion.div
    className={`bg-gray-800 rounded-2xl border-2 border-gray-700 overflow-hidden ${className}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
  >
    <div className="h-48 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 animate-pulse"></div>
    <div className="p-6 space-y-4">
      <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
      <div className="h-4 bg-gray-700 rounded w-3/4 animate-pulse"></div>
      <div className="h-3 bg-gray-700 rounded w-1/2 animate-pulse"></div>
      <div className="flex gap-2">
        <div className="h-6 bg-gray-700 rounded-full w-16 animate-pulse"></div>
        <div className="h-6 bg-gray-700 rounded-full w-20 animate-pulse"></div>
      </div>
    </div>
  </motion.div>
);

// Loading spinner component
export const LoadingSpinner = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-12 h-12",
    lg: "w-16 h-16"
  };

  return (
    <div className="flex justify-center items-center">
      <motion.div
        className={`${sizeClasses[size]} border-4 border-cyan-400/30 border-t-cyan-400 rounded-full`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

// Progress bar component
export const ProgressBar = ({ progress = 0 }: { progress?: number }) => (
  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
    <motion.div
      className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    />
  </div>
);

// Page loading component
export const PageLoader = () => (
  <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
    <motion.div
      className="text-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <LoadingSpinner size="lg" />
      <motion.p
        className="text-cyan-400 mt-4 text-lg font-semibold"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Loading amazing content...
      </motion.p>
      <div className="w-64 mx-auto mt-4">
        <ProgressBar progress={75} />
      </div>
    </motion.div>
  </div>
);

// Section loading component
export const SectionLoader = () => (
  <div className="flex justify-center items-center py-12">
    <motion.div
      className="text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <LoadingSpinner size="md" />
      <p className="text-gray-400 mt-2">Loading...</p>
    </motion.div>
  </div>
);

export default {
  SkeletonCard,
  LoadingSpinner,
  ProgressBar,
  PageLoader,
  SectionLoader
};
