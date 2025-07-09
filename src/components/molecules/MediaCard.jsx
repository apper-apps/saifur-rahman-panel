import React from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import Card from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";

const MediaCard = ({ media }) => {
  const formatDate = (dateString) => {
    return format(new Date(dateString), "MMM d, yyyy");
  };

  const getIcon = (type) => {
    switch (type) {
      case "podcast":
        return "Mic";
      case "video":
        return "Video";
      case "interview":
        return "MessageCircle";
      case "speaking":
        return "Users";
      default:
        return "Play";
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "podcast":
        return "bg-purple-500";
      case "video":
        return "bg-red-500";
      case "interview":
        return "bg-blue-500";
      case "speaking":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-6 h-full flex flex-col" hover>
        <div className="flex items-center space-x-3 mb-4">
          <div className={`h-12 w-12 ${getTypeColor(media.type)} rounded-lg flex items-center justify-center`}>
            <ApperIcon 
              name={getIcon(media.type)} 
              size={24} 
              className="text-white" 
            />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-display font-semibold text-surface-900">
              {media.title}
            </h3>
            <p className="text-sm text-surface-500 capitalize">
              {media.type} • {formatDate(media.date)}
            </p>
          </div>
        </div>
        
        <p className="text-surface-600 mb-4 leading-relaxed flex-1">
          {media.description}
        </p>
        
        <div className="pt-4 border-t border-surface-200">
          <a
            href={media.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
          >
            <ApperIcon name="ExternalLink" size={16} className="mr-2" />
            View {media.type === "speaking" ? "Event" : "Content"}
          </a>
        </div>
      </Card>
    </motion.div>
  );
};

export default MediaCard;