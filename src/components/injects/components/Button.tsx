import { cn } from "./../lib/utils";
import React from "react";

type ButtonVariant = "default" | "secondary" | "danger" | "outline";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  icon?: React.ElementType;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  icon: Icon,
  children,
  className,
  ...props
}) => {
  const baseClasses =
    "rounded-md px-4 py-2 flex items-center justify-center gap-2 font-medium transition-colors";

  const variantClasses: Record<ButtonVariant, string> = {
    default: "bg-green-600 text-white hover:bg-green-700",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    danger: "bg-red-600 text-white hover:bg-red-700",
    outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",
  };

  return (
    <button
      className={cn(baseClasses, variantClasses[variant], className)}
      {...props}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </button>
  );
};

export default Button;
