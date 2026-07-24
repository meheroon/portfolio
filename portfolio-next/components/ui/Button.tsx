"use client";

import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 cursor-pointer border-none",
          {
            "bg-gradient-to-br from-accent to-[#5a52d5] text-text-primary shadow-[0_4px_20px_var(--accent-glow)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_var(--accent-glow)]":
              variant === "primary",
            "bg-card-bg text-text-primary border border-border hover:bg-card-hover hover:border-accent":
              variant === "secondary",
            "bg-transparent text-accent border-2 border-accent hover:bg-accent hover:text-text-primary":
              variant === "outline",
          },
          {
            "px-5 py-2.5 text-sm": size === "sm",
            "px-7 py-3.5 text-[0.95rem]": size === "md",
            "px-9 py-4.5 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
