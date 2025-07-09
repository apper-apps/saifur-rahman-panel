import React from "react";
import Label from "@/components/atoms/Label";
import Input from "@/components/atoms/Input";
import { cn } from "@/utils/cn";

const FormField = ({ 
  label, 
  name, 
  type = "text", 
  required = false, 
  error = null,
  className = "",
  ...props 
}) => {
  return (
    <div className={cn("space-y-1", className)}>
      <Label htmlFor={name} required={required}>
        {label}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        error={!!error}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600 mt-1">{error}</p>
      )}
    </div>
  );
};

export default FormField;