"use client";

"use client";

import { useState, useEffect } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setProgress(scrollPercent);
      setShow(scrollTop > 400);
      setIsAtBottom(scrollTop + window.innerHeight >= docHeight - 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
  };

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-[1001] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-accent to-accent-secondary transition-[width] duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Navigation Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-3 z-[999]">
        {/* Scroll to Top */}
        <button
          onClick={scrollToTop}
          className={`w-11 h-11 flex items-center justify-center bg-gradient-to-br from-accent to-[#5a52d5] text-white rounded-full shadow-lg transition-all duration-300 cursor-pointer border-none ${
            show
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-4 pointer-events-none"
          } hover:-translate-y-0.5 hover:shadow-[0_8px_30px_var(--accent-glow)]`}
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </button>

        {/* Scroll to Bottom */}
        <button
          onClick={scrollToBottom}
          className={`w-11 h-11 flex items-center justify-center bg-card-bg border border-border text-text-secondary rounded-full shadow-lg transition-all duration-300 cursor-pointer ${
            !isAtBottom
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-4 pointer-events-none"
          } hover:border-accent hover:text-text-primary hover:bg-card-hover`}
          aria-label="Scroll to bottom"
        >
          <ArrowDown size={18} />
        </button>
      </div>
    </>
  );
}
