import React from "react";
import { motion } from "framer-motion";

const Loading = ({ type = "default", rows = 3, className = "" }) => {
  const shimmer = {
    initial: { opacity: 0.3 },
    animate: { opacity: 1 },
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  if (type === "hero") {
    return (
      <div className={`animate-pulse ${className}`}>
        <div className="bg-gradient-to-r from-surface-100 to-surface-200 h-96 rounded-lg mb-8"></div>
        <div className="space-y-4">
          <div className="h-8 bg-gradient-to-r from-surface-100 to-surface-200 rounded w-3/4"></div>
          <div className="h-6 bg-gradient-to-r from-surface-100 to-surface-200 rounded w-1/2"></div>
          <div className="h-12 bg-gradient-to-r from-surface-100 to-surface-200 rounded w-1/4"></div>
        </div>
      </div>
    );
  }

  if (type === "card") {
    return (
      <div className={`animate-pulse ${className}`}>
        <div className="bg-white rounded-lg shadow-md p-6 border border-surface-200">
          <div className="h-6 bg-gradient-to-r from-surface-100 to-surface-200 rounded w-3/4 mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gradient-to-r from-surface-100 to-surface-200 rounded"></div>
            <div className="h-4 bg-gradient-to-r from-surface-100 to-surface-200 rounded w-5/6"></div>
            <div className="h-4 bg-gradient-to-r from-surface-100 to-surface-200 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "list") {
    return (
      <div className={`space-y-4 ${className}`}>
        {Array.from({ length: rows }).map((_, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm border border-surface-200"
            variants={shimmer}
            initial="initial"
            animate="animate"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="h-12 w-12 bg-gradient-to-r from-surface-100 to-surface-200 rounded-full flex-shrink-0"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gradient-to-r from-surface-100 to-surface-200 rounded w-3/4"></div>
              <div className="h-3 bg-gradient-to-r from-surface-100 to-surface-200 rounded w-1/2"></div>
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className={`animate-pulse space-y-4 ${className}`}
      variants={shimmer}
      initial="initial"
      animate="animate"
    >
      {Array.from({ length: rows }).map((_, index) => (
        <div key={index} className="space-y-2">
          <div className="h-4 bg-gradient-to-r from-surface-100 to-surface-200 rounded"></div>
          <div className="h-4 bg-gradient-to-r from-surface-100 to-surface-200 rounded w-5/6"></div>
          <div className="h-4 bg-gradient-to-r from-surface-100 to-surface-200 rounded w-4/6"></div>
        </div>
      ))}
    </motion.div>
  );
};

export default Loading;