import React from "react";
import { twMerge } from "tailwind-merge";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={twMerge(
        "max-w-[1280] mx-auto px-4 md:px-6 lg:px-12",
        className,
      )}
    >
      {children}
    </div>
  );
}
