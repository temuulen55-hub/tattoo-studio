"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PRIMARY_NAV, BOOKING_CTA } from "@/lib/nav";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileNav({ isOpen, onClose }: Props) {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-30 bg-[rgba(13,12,11,0.97)] backdrop-blur-xl lg:hidden"
      style={{ top: "var(--header-height)" }}
      role="dialog"
      aria-modal="true"
    >
      <nav
        className="flex h-full flex-col px-6 py-8"
        aria-label="Гар утасны цэс"
      >
        {PRIMARY_NAV.map((item, i) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              style={{ animationDelay: `${i * 50}ms` }}
              className={`animate-fade-up border-b py-4 font-serif text-2xl tracking-tight transition-colors duration-300
                ${
                  isActive
                    ? "border-[rgba(255,16,83,0.3)] text-[#FF1053] [text-shadow:0_0_16px_rgba(255,16,83,0.4)]"
                    : "border-[rgba(240,234,224,0.08)] text-[rgba(240,234,224,0.7)] hover:text-[#F0EAE0]"
                }`}
            >
              {item.label}
            </Link>
          );
        })}

        <Link
          href={BOOKING_CTA.href}
          onClick={onClose}
          className="btn-primary mt-8 w-full"
        >
          <span>{BOOKING_CTA.label}</span>
        </Link>
      </nav>
    </div>
  );
}
