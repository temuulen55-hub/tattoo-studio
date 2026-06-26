"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { PRIMARY_NAV, BOOKING_CTA, SITE_CONFIG } from "@/lib/nav";
import MobileNav from "./MobileNav";

export default function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "border-b border-[rgba(255,16,83,0.12)] bg-[rgba(13,12,11,0.88)] shadow-[0_4px_24px_rgba(0,0,0,0.5)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
        style={{ height: "var(--header-height)" }}
      >
        <div className="mx-auto flex h-full max-w-content items-center justify-between px-5 lg:px-8">
          {/* Logo — neon glow on hover */}
          <Link
            href="/"
            className="group font-serif text-2xl font-medium tracking-tight text-[#F0EAE0] transition-all duration-300"
          >
            <span className="transition-all duration-300 group-hover:text-[#FF1053] group-hover:[text-shadow:0_0_20px_rgba(255,16,83,0.5)]">
              {SITE_CONFIG.name}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label="Үндсэн цэс"
          >
            {PRIMARY_NAV.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link ${
                    isActive ? "!text-[#FF1053] after:!w-full" : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            {/* Primary CTA */}
            <Link
              href={BOOKING_CTA.href}
              className="btn-primary hidden lg:inline-flex"
            >
              <span>{BOOKING_CTA.label}</span>
            </Link>

            {/* Hamburger */}
            <button
              type="button"
              aria-label={isMobileNavOpen ? "Цэсийг хаах" : "Цэсийг нээх"}
              aria-expanded={isMobileNavOpen}
              onClick={() => setIsMobileNavOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(240,234,224,0.1)] text-[rgba(240,234,224,0.7)] transition-all duration-300 hover:border-[#FF1053] hover:text-[#FF1053] lg:hidden"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                aria-hidden="true"
              >
                {isMobileNavOpen ? (
                  <path
                    d="M4 4L18 18M18 4L4 18"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M3 6H19M3 11H19M3 16H19"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
      />
    </>
  );
}
