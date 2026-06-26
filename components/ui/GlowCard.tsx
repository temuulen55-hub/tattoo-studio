"use client";

import { type ReactNode } from "react";

export default function GlowCard({ children }: { children: ReactNode }) {
  return (
    <div
      className="flex flex-col rounded-2xl border border-[rgba(240,234,224,0.07)] bg-[#161412] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(255,16,83,0.2)]"
      style={{ willChange: "transform" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 8px 32px rgba(0,0,0,0.7), 0 0 20px rgba(255,16,83,0.1)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "";
      }}
    >
      {children}
    </div>
  );
}
