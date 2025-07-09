import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

const Button = React.forwardRef(({ 
  children, 
  variant = "primary", 
  size = "md", 
  disabled = false,
  className = "",
  asChild = false,
  ...props 
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500",
    secondary: "bg-white hover:bg-surface-50 text-primary-600 border border-primary-600 focus:ring-primary-500",
    outline: "bg-transparent hover:bg-primary-50 text-primary-600 border border-primary-600 focus:ring-primary-500",
    ghost: "bg-transparent hover:bg-surface-100 text-surface-700 focus:ring-surface-500",
    danger: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-500",
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  
  const Component = asChild ? motion.div : motion.button;
  
  return (
    <Component
      ref={ref}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </Component>
  );
});

Button.displayName = "Button";

export default Button;