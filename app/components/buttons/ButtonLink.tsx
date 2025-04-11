import React from "react";
import clsx from "clsx";

type ButtonLinkProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "danger" | "default";
  className?: string;
};

const variantClasses = {
  primary: "text-[#7c4dff] hover:underline",
  danger: "text-red-500 hover:underline",
  default: "text-gray-700 hover:underline",
};

const ButtonLink: React.FC<ButtonLinkProps> = ({
  children,
  onClick,
  variant = "default",
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "bg-transparent p-0 border-none",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </button>
  );
};

export default ButtonLink;
