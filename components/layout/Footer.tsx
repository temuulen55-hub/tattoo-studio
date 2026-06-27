import Link from "next/link";
import { PRIMARY_NAV, SITE_CONFIG } from "@/lib/nav";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[rgba(240,234,224,0.07)] bg-[#161412] pb-24 pt-14 lg:pb-14">
      <div className="mx-auto max-w-content px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <p className="font-serif text-2xl font-medium text-[#F0EAE0]">
              {SITE_CONFIG.name}
            </p>
            {/* Neon pink rule under brand name */}
            <div className="mt-2 h-px w-10 bg-[#FF1053] opacity-60" />
            <p className="mt-4 max-w-sm font-sans text-sm leading-relaxed text-[rgba(240,234,224,0.5)]">
              Улаанбаатар хот дахь мэргэжлийн шивээсний студи. Хувь хүний
              онцлогт тохирсон өвөрмөц урлаг.
            </p>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.instagram.com/temulenni/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(240,234,224,0.1)] text-[rgba(240,234,224,0.5)] transition-all duration-300 hover:border-[#FF1053] hover:text-[#FF1053] hover:shadow-[0_0_12px_rgba(255,16,83,0.25)]"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4.2"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <circle cx="17.4" cy="6.6" r="1" fill="currentColor" />
                </svg>
              </a>
              <a
                href="tel:+97689169169"
                aria-label="Утасаар холбогдох"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(240,234,224,0.1)] text-[rgba(240,234,224,0.5)] transition-all duration-300 hover:border-[#FF1053] hover:text-[#FF1053] hover:shadow-[0_0_12px_rgba(255,16,83,0.25)]"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 4h3.2l1.4 4.6-2.1 1.7a12 12 0 0 0 6.2 6.2l1.7-2.1L19 16v3.2c0 .9-.7 1.6-1.6 1.5C9.6 20 4 14.4 3.5 6.6 3.4 5.7 4.1 5 5 5Z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[rgba(240,234,224,0.3)]">
              Цэс
            </p>
            <ul className="mt-4 space-y-2.5">
              {PRIMARY_NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="nav-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio info */}
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[rgba(240,234,224,0.3)]">
              Байршил
            </p>
            <p className="mt-4 font-sans text-sm text-[rgba(240,234,224,0.6)]">
              {SITE_CONFIG.address}
            </p>
            <p className="mt-2 font-sans text-sm text-[rgba(240,234,224,0.6)]">
              {SITE_CONFIG.hours}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[rgba(240,234,224,0.07)] pt-6 font-sans text-xs text-[rgba(240,234,224,0.3)] lg:flex-row lg:items-center lg:justify-between">
          <p>© {year} Temka Tattoo. Бүх эрх хуулиар хамгаалагдсан.</p>
          <Link
            href="https://temuulenenkhbold.netlify.app/"
            className="hover:text-[#FF1053] transition-colors duration-300"
          >
            Вэбсайтыг бүтээсэн Э. Тэмүүлэн
          </Link>
        </div>
      </div>
    </footer>
  );
}
