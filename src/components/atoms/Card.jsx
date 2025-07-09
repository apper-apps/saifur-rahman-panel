import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

const Card = React.forwardRef(({ 
  children, 
  className = "",
  hover = false,
  ...props 
}, ref) => {
  const baseStyles = "bg-white rounded-lg shadow-md border border-surface-200 transition-shadow duration-200";
  const hoverStyles = hover ? "hover:shadow-lg" : "";
  
  return (
    <motion.div
      ref={ref}
      whileHover={hover ? { y: -2 } : {}}
      className={cn(baseStyles, hoverStyles, className)}
      {...props}
    >
      {children}
    </motion.div>
  );
});

Card.displayName = "Card";

export default Card;