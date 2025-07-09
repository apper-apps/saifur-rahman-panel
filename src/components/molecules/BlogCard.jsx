import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import Card from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";

const BlogCard = ({ post }) => {
  const formatDate = (dateString) => {
    return format(new Date(dateString), "MMM d, yyyy");
  };

  const generateSlug = (title) => {
    return title.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden h-full flex flex-col" hover>
        <div className="p-6 flex-1">
          <div className="flex items-center space-x-2 mb-3">
            <span className="inline-block px-3 py-1 text-xs font-medium text-primary-600 bg-primary-50 rounded-full">
              {post.category}
            </span>
            <span className="text-sm text-surface-500">{formatDate(post.publishDate)}</span>
          </div>
          
          <Link to={`/resources/${generateSlug(post.title)}`} className="block group">
            <h3 className="text-xl font-display font-semibold text-surface-900 mb-2 group-hover:text-primary-600 transition-colors">
              {post.title}
            </h3>
          </Link>
          
          <p className="text-surface-600 mb-4 leading-relaxed">
            {post.excerpt}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block px-2 py-1 text-xs text-surface-600 bg-surface-100 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className="p-6 pt-0">
          <Link 
            to={`/resources/${generateSlug(post.title)}`}
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
          >
            Read More
            <ApperIcon name="ArrowRight" size={16} className="ml-1" />
          </Link>
        </div>
      </Card>
    </motion.div>
  );
};

export default BlogCard;