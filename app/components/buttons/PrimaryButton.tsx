import React from "react";
import { Spinner } from "../Spinner";

interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg" | "xl";
  icon?: React.ReactNode;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  disabled,
  loading,
  variant = "primary",
  size = "md",
  icon,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center rounded-md font-semibold focus:outline-none focus:ring-2 transition duration-200 ease-in-out capitalize";

  const sizeStyles: Record<string, string> = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-5 py-2.5",
    xl: "text-xl px-6 py-3",
  };

  const variants: Record<string, string> = {
    primary:
      "bg-primary text-white hover:bg-primary/90 focus:ring-primary/50 disabled:bg-muted",
    secondary:
      "bg-secondary text-muted hover:bg-gray-100 focus:ring-muted/50 disabled:bg-muted/20",
    outline:
      "border border-primary text-primary hover:bg-primary/10 focus:ring-primary/50 disabled:border-muted disabled:text-muted",
  };

  //   const variants: Record<string, string> = {
  //     primary:
  //       "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-400 disabled:bg-gray-400",
  //     secondary:
  //       "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400 disabled:bg-gray-100",
  //     outline:
  //       "border border-indigo-600 text-indigo-600 hover:bg-indigo-50 focus:ring-indigo-300 disabled:border-gray-300 disabled:text-gray-300",
  //   };

  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={`${baseStyles} ${sizeStyles[size]} ${variants[variant]} ${props.className}`}
    >
      {loading && <Spinner className="mr-2 h-4 w-4" />}
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};
