import React from "react";

interface ButtonProps {
  text: string;
  variant: "outlined" | "contained" | "text";
  svg?: React.ReactNode;
  svgPosition?: "start" | "end";
  className?: string;
  onClick?: () => void;
  size?: 'xs' | 'sm' | 'md'
}

const Button: React.FC<ButtonProps> = ({
  text,
  variant,
  svg,
  svgPosition,
  className,
  onClick,
  size,
}) => {
  const containedVariant = "bg-primary"

  const outlinedVariant = "border border-gray-200 text-primary"

  const textVariant = "text-primary"

  const variantStyles =
    variant === "contained" ? containedVariant :
      variant === "outlined" ? outlinedVariant :
        textVariant;

  const sizeClasses =
    size === "xs"
      ? "text-xs px-2 py-1"
      : size === "sm"
        ? "text-sm px-4 py-2"
        : "text-base px-6 py-3";

  const baseClasses = "gap-4 flex items-center rounded-md transition-all duration-200 active:shadow-lg"

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses} ${variantStyles} ${className}`}
    >
      {svgPosition === "start" && svg}
      {text}
      {svgPosition === "end" && svg}
    </button>
  );
};

export default Button;
