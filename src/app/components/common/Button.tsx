import type { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  color?: "transparent" | "fill";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  type = "button",
  className,
  color = "transparent",
  ...props
}: ButtonProps) {
  const baseStyles =
    "p-0 rounded-lg font-medium text-sm transition-all duration-200 active:scale-95 cursor-pointer";

  const colorVariants = {
    transparent:
      "text-white hover:text-blue-400 active:text-blue-400",
    fill: "bg-blue-400 text-black hover:bg-blue-600 shadow-md shadow-blue-400/10 hover:shadow-lg",
  };

  return (
    <button
      type={type}
      className={twMerge(baseStyles, colorVariants[color], className)}
      {...props}
    >
      {children}
    </button>
  );
}
