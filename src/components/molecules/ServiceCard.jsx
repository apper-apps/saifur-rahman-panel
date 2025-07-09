import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Card from "@/components/atoms/Card";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const ServiceCard = ({ service }) => {
  const iconMap = {
    "Individual Therapy": "User",
    "Relationship Coaching": "Heart",
    "Online Consultations": "Video",
    "High-Performance Mental Fitness": "Zap"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-6 h-full flex flex-col" hover>
        <div className="flex items-center space-x-3 mb-4">
          <div className="h-12 w-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
            <ApperIcon 
              name={iconMap[service.title] || "Star"} 
              size={24} 
              className="text-white" 
            />
          </div>
          <h3 className="text-xl font-display font-semibold text-surface-900">
            {service.title}
          </h3>
        </div>
        
        <p className="text-surface-600 mb-4 leading-relaxed flex-1">
          {service.description}
        </p>
        
        <div className="border-t border-surface-200 pt-4 mt-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-surface-500">Duration:</span>
            <span className="text-sm font-medium text-surface-900">{service.duration}</span>
          </div>
          
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-surface-500">Investment:</span>
            <span className="text-sm font-medium text-surface-900">{service.price}</span>
          </div>
          
          <Link to="/book" className="block">
            <Button className="w-full">
              <ApperIcon name="Calendar" size={16} className="mr-2" />
              Book Session
            </Button>
          </Link>
        </div>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;