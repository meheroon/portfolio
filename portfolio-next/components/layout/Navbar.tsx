"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/data";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";

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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href === pathname) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 h-[70px] z-[1000] transition-all duration-300 border-b border-border ${
          scrolled
            ? "bg-[rgba(255,255,255,0.95)] dark:bg-[rgba(10,10,26,0.95)] shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
            : "bg-[rgba(255,255,255,0.85)] dark:bg-[rgba(10,10,26,0.85)] backdrop-blur-xl"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
          <Link href="/" className="text-lg font-bold tracking-[-0.3px] z-10 text-text-primary">
            Meherun Nessa Ferdausi
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            <ul className="flex items-center gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
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
            <ThemeToggle />
          </div>

          {/* Mobile Right */}
          <div className="md:hidden flex items-center gap-2 z-[1001]">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer"
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
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-[999] transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-[70px] left-0 right-0 bottom-0 z-[1000] flex flex-col bg-[rgba(255,255,255,0.98)] dark:bg-[rgba(10,10,26,0.98)] backdrop-blur-xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col justify-center items-center flex-1 gap-2 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`w-full text-center py-4 px-6 rounded-xl text-xl font-medium transition-all duration-200 ${
                pathname === link.href
                  ? "text-text-primary bg-card-bg"
                  : "text-text-secondary active:bg-card-bg"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
