import React from "react";
import { cn } from "@/utils/cn";

const Input = React.forwardRef(({ 
  type = "text", 
  className = "", 
  error = false,
  ...props 
}, ref) => {
  const baseStyles = "block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-0 transition-colors duration-200";
  
  const variants = {
    default: "border-surface-300 focus:ring-primary-500 focus:border-primary-500",
    error: "border-red-300 focus:ring-red-500 focus:border-red-500",
  };
  
  return (
    <input
      ref={ref}
      type={type}
      className={cn(baseStyles, error ? variants.error : variants.default, className)}
      {...props}
    />
  );
});

Input.displayName = "Input";

export default Input;