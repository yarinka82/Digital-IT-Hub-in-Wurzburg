"use client";

import Logo from "@/app/components/Logo";
import Container from "../app/components/common/Container";
import Navigation from "@/app/components/Navigation";
import { useEffect, useState } from "react";
import Button from "@/app/components/common/Button";
import Icon from "@/app/components/common/Icon";
import { twMerge } from "tailwind-merge";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const baseNavStyle =
    "md:static md:block md:translate-x-0 md:opacity-100 md:p-0 md:w-auto";

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleBreakPointClose = (e: MediaQueryListEvent) => {
      if (e.matches) setIsOpen(false);
    };

    const handleCloseEscape = (e: KeyboardEvent) => {
      if (!mediaQuery.matches && e.key === "Escape") setIsOpen(false);
    };

    mediaQuery.addEventListener("change", handleBreakPointClose);
    if (isOpen) window.addEventListener("keydown", handleCloseEscape);

    document.body.style.overflowY = isOpen ? "hidden" : "";
    return () => {
      mediaQuery.removeEventListener("change", handleBreakPointClose);
      document.body.style.overflowY = "";
      window.removeEventListener("keydown", handleCloseEscape);
    };
  }, [isOpen]);

  return (
    <header className="py-4 relative border-b border-[#1a1a1a]">
      <Container className="flex items-center justify-between">
        <Logo />
        <Navigation
          isOpen={isOpen}
          className={twMerge(
            isOpen
              ? "fixed top-20 right-0 w-full p-10 bg-(--color-background) translate-x-0 opacity-100 transition-translate duration-500 "
              : "fixed top-20 right-0 p-10 translate-x-full opacity-0 transition-translate duration-500",
            baseNavStyle,
          )}
        />
        <Button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <Icon
            iconName={isOpen ? "icon-close" : "burger-icon"}
            className="stroke-white hover:stroke-blue-400"
            width={32}
            height={32}
          />
        </Button>
      </Container>
    </header>
  );
}
