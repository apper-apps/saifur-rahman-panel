import React from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const Error = ({ 
  title = "Something went wrong", 
  message = "We're sorry, but something went wrong. Please try again.", 
  onRetry = null,
  className = ""
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className={`flex flex-col items-center justify-center py-12 px-4 text-center ${className}`}
    >
      <div className="bg-red-50 rounded-full p-4 mb-6">
        <ApperIcon 
          name="AlertCircle" 
          size={48} 
          className="text-red-500"
        />
      </div>
      
      <h3 className="text-2xl font-display font-semibold text-surface-900 mb-2">
        {title}
      </h3>
      
      <p className="text-surface-600 mb-8 max-w-md">
        {message}
      </p>
      
      {onRetry && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onRetry}
          className="btn-primary inline-flex items-center space-x-2"
        >
          <ApperIcon name="RefreshCw" size={16} />
          <span>Try Again</span>
        </motion.button>
      )}
    </motion.div>
  );
};

export default Error;