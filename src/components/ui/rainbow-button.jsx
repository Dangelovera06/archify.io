import React from "react";
import { cn } from "@/lib/utils";

export function RainbowButton({
  children,
  className,
  ...props
}) {
  return (
    <button
      className={cn(
        "group relative inline-flex h-11 cursor-pointer items-center justify-center rounded-xl border-0 px-8 py-2 font-bold text-black transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 disabled:pointer-events-none disabled:opacity-50",

        // Glowing yellow background with gradient
        "bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-500",
        
        // Yellow glow effect
        "shadow-[0_0_20px_rgba(250,204,21,0.5),0_0_40px_rgba(250,204,21,0.3),0_0_60px_rgba(250,204,21,0.2)]",
        
        // Reflection effect on top
        "after:absolute after:inset-0 after:rounded-xl after:bg-gradient-to-b after:from-white/40 after:via-transparent after:to-transparent after:pointer-events-none",

        className,
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}

