import React from "react";
import { motion } from "framer-motion";
import Card from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-6 h-full" hover>
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <ApperIcon name="Quote" size={24} className="text-primary-500" />
          </div>
          <div className="flex-1">
            <blockquote className="text-surface-700 italic mb-4 leading-relaxed">
              "{testimonial.content}"
            </blockquote>
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">
                  {testimonial.author.split(" ").map(name => name[0]).join("")}
                </span>
              </div>
              <div>
                <p className="font-medium text-surface-900">{testimonial.author}</p>
                <p className="text-sm text-surface-600">{testimonial.profession}</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;