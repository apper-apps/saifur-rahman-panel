import React from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const Empty = ({ 
  title = "No items found", 
  message = "There are no items to display at the moment.", 
  actionLabel = "Get Started",
  onAction = null,
  icon = "FileText",
  className = ""
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className={`flex flex-col items-center justify-center py-16 px-4 text-center ${className}`}
    >
      <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-full p-6 mb-6">
        <ApperIcon 
          name={icon} 
          size={48} 
          className="text-primary-500"
        />
      </div>
      
      <h3 className="text-2xl font-display font-semibold text-surface-900 mb-2">
        {title}
      </h3>
      
      <p className="text-surface-600 mb-8 max-w-md">
        {message}
      </p>
      
      {onAction && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onAction}
          className="btn-primary inline-flex items-center space-x-2"
        >
          <ApperIcon name="Plus" size={16} />
          <span>{actionLabel}</span>
        </motion.button>
      )}
    </motion.div>
  );
};

export default Empty;