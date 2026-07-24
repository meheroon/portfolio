"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/data";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 h-[70px] z-[1000] transition-all duration-300 border-b border-border ${
        scrolled
          ? "bg-[rgba(10,10,26,0.95)] shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-[rgba(10,10,26,0.85)] backdrop-blur-xl"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-[-0.3px]">
          Meherun Nessa Ferdausi
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`px-4 py-2 rounded-lg text-[0.9rem] font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? "text-text-primary bg-card-bg"
                    : "text-text-secondary hover:text-text-primary hover:bg-card-bg"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer"
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <X size={24} className="text-text-primary" />
          ) : (
            <>
              <span className="w-6 h-0.5 bg-text-primary rounded transition-all" />
              <span className="w-6 h-0.5 bg-text-primary rounded transition-all" />
              <span className="w-6 h-0.5 bg-text-primary rounded transition-all" />
            </>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-[70px] left-0 right-0 bottom-0 bg-[rgba(10,10,26,0.98)] flex flex-col justify-center gap-2 p-6 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-2xl py-3 px-6 w-full text-center rounded-lg font-medium transition-all ${
              pathname === link.href
                ? "text-text-primary bg-card-bg"
                : "text-text-secondary hover:text-text-primary hover:bg-card-bg"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
