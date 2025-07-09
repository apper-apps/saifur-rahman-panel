import React from "react";
import { cn } from "@/utils/cn";

const Label = React.forwardRef(({ 
  className = "", 
  htmlFor,
  children,
  required = false,
  ...props 
}, ref) => {
  return (
    <label
      ref={ref}
      htmlFor={htmlFor}
      className={cn("block text-sm font-medium text-surface-700 mb-1", className)}
      {...props}
    >
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
});

Label.displayName = "Label";

export default Label;