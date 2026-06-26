import Link from "next/link";
import { BOOKING_CTA } from "@/lib/nav";

export default function MobileStickyBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-center border-t border-[rgba(255,16,83,0.15)] bg-[rgba(13,12,11,0.95)] px-4 backdrop-blur-lg lg:hidden"
      style={{ height: "var(--mobile-cta-height)" }}
    >
      <Link href={BOOKING_CTA.href} className="btn-primary w-full">
        <span>{BOOKING_CTA.label}</span>
      </Link>
    </div>
  );
}
