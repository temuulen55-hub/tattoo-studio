"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cal, { getCalApi } from "@calcom/embed-react";

// Define session types to manage duration
const SESSION_TYPES = [
  {
    id: "small",
    label: "Жижиг шивээс (1-2 цаг)",
    link: "https://cal.com/temuulen-e-sg6b0n/жижиг-шивээс",
  },
  {
    id: "medium",
    label: "Дунд хэмжээний (3-4 цаг)",
    link: "https://cal.com/temuulen-e-sg6b0n/дунд-хэмжээнии-шивээс",
  },
  {
    id: "full",
    label: "Бүтэн өдөр (5+ цаг)",
    link: "https://cal.com/temuulen-e-sg6b0n/дүүргэлт",
  },
];

export default function BookingPage() {
  const router = useRouter();
  const [selectedSession, setSelectedSession] = useState(SESSION_TYPES[0].link);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#3A2E2A" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });

      cal("on", {
        action: "bookingSuccessful",
        callback: () => {
          router.push("/zahialga/amjilttai");
        },
      });
    })();
  }, [router]);

  return (
    <div className="min-h-screen bg-champagne px-4 py-12 md:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="font-serif text-4xl font-medium text-charcoal md:text-5xl">
            Цаг захиалах
          </h1>
          <p className="mx-auto mt-4 max-w-xl font-sans text-sm text-charcoal/80">
            Та хийлгэх гэж буй шивээснийхээ хэмжээнд тохируулан цагаа сонгоно
            уу.
          </p>
        </div>

        {/* Step 1: Session Selector */}
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {SESSION_TYPES.map((session) => (
            <button
              key={session.id}
              onClick={() => setSelectedSession(session.link)}
              className={`rounded-full px-6 py-2 font-sans text-sm font-medium transition-all ${
                selectedSession === session.link
                  ? "bg-espresso text-champagne"
                  : "border border-charcoal/20 bg-white text-charcoal hover:border-charcoal"
              }`}
            >
              {session.label}
            </button>
          ))}
        </div>

        {/* Step 2: Dynamic Cal.com Embed */}
        <div className="min-h-[600px] w-full overflow-hidden rounded-2xl bg-ivory shadow-card">
          <Cal
            key={selectedSession} // Key forces re-render when link changes
            calLink={selectedSession}
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ layout: "month_view" }}
          />
        </div>
      </div>
    </div>
  );
}
