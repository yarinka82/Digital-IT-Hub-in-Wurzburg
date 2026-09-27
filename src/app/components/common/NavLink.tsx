"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export default function NavLink({
  href,
  children,
  className = "",
}: NavLinkProps) {
  const pathname = usePathname();

  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={twMerge(
        "relative block font-semibold text-lg transition-colors duration-100",
        "after:absolute after:-bottom-0.75 after:h-1 after:left-0 after:w-full md:after:h-1 after:origin-left after:scale-x-0 after:transition-transform after:duration-300",
        isActive
          ? "text-blue-400 hover:text-blue-600 after:scale-x-100 after:bg-blue-600"
          : "text-white hover:text-blue-400 hover:after:scale-x-100 after:bg-blue-400",
        className,
      )}
    >
      {children}
    </Link>
  );
}
