import React from "react";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  variant?: keyof typeof variants;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  icon?: React.ReactNode;
  outline?: boolean;
  rounded?: boolean;
}

const sizeStyles: Record<string, string> = {
  xs: "text-xs px-3 py-1",
  sm: "text-sm px-3 py-1.5",
  md: "text-base px-4 py-2",
  lg: "text-lg px-5 py-2.5",
  xl: "text-xl px-6 py-3",
};

const baseStyles =
  "inline-flex items-center font-semibold focus:outline-none focus:ring-2 transition duration-200 ease-in-out capitalize";

const solidVariants: Record<string, string> = {
  default:
    "bg-gray-300 text-black hover:bg-gray-400 focus:ring-gray-200 disabled:bg-gray-100",
  primary:
    "bg-primary text-white hover:bg-primary/90 focus:ring-primary/50 disabled:bg-muted",
  secondary:
    "bg-secondary text-muted hover:bg-gray-100 focus:ring-muted/50 disabled:bg-muted/20",
  success:
    "bg-green-500 text-white hover:bg-green-600 focus:ring-green-400 disabled:bg-green-200",
  danger:
    "bg-red-500 text-white hover:bg-red-600 focus:ring-red-400 disabled:bg-red-200",
  warning:
    "bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-400 disabled:bg-yellow-200",
  info: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400 disabled:bg-blue-200",
  dark: "bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-600 disabled:bg-gray-500",
};

const outlineVariants: Record<string, string> = {
  default:
    "border border-gray-300 text-black hover:bg-gray-100 focus:ring-gray-200",
  primary:
    "border border-primary text-primary hover:bg-primary/10 focus:ring-primary/50",
  secondary:
    "border border-secondary text-muted hover:bg-gray-100 focus:ring-muted/50",
  success:
    "border border-green-500 text-green-600 hover:bg-green-50 focus:ring-green-400",
  danger:
    "border border-red-500 text-red-600 hover:bg-red-50 focus:ring-red-400",
  warning:
    "border border-yellow-500 text-yellow-600 hover:bg-yellow-50 focus:ring-yellow-400",
  info: "border border-blue-500 text-blue-600 hover:bg-blue-50 focus:ring-blue-400",
  dark: "border border-gray-800 text-gray-800 hover:bg-gray-100 focus:ring-gray-600",
};

export const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  loading,
  variant = "primary",
  size = "md",
  icon,
  outline = false,
  rounded = false,
  ...props
}) => {
  const variantClasses = outline
    ? outlineVariants[variant]
    : solidVariants[variant];

  const roundedClass = rounded ? "rounded-full" : "rounded-md";

  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={`${baseStyles} ${sizeStyles[size]} ${variantClasses} ${roundedClass} ${props.className}`}
    >
      {loading && <Loader2 className="animate-spin mr-2" size={16} />}
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};
