import { ReactNode } from "react";

interface IsProps {
  className?: string;
  children?: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  disabled?: boolean;
  onClick?: () => any;
}

export default function Button({
  className = "",
  children,
  variant = "primary",
  disabled = false,
  onClick,
  ...props
}: IsProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const baseClass = "py-2 px-4 rounded font-bold cursor-pointer transition";
  const disabledClass = "opacity-50 cursor-not-allowed";

  const variantClasses = {
    primary: "bg-blue-500 hover:bg-blue-700 text-white",
    secondary: "bg-gray-500 hover:bg-gray-700 text-white",
    outline:
      "border border-gray-500 text-gray-500 hover:text-white hover:bg-gray-500"
  };

  return (
    <button
      className={`${baseClass} ${variantClasses[variant]} ${className} ${
        disabled ? disabledClass : ""
      }`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
