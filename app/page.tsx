import Link from "next/link";

export default function HomePage() {
  return (
    <section className="relative mx-auto flex min-h-[60vh] flex-col items-center justify-center overflow-hidden px-5 py-20 text-center lg:px-8 lg:py-32">
      {/* Background Overlay to ensure text readability */}
      {/* Note: With our new dark theme, bg-champagne is now your dark background color! */}
      <div className="absolute inset-0 bg-champagne/80" />

      {/* Content Container (added relative z-10 to stay above the overlay) */}
      <div className="relative z-10">
        <h1 className="font-serif text-4xl leading-tight text-charcoal lg:text-6xl">
          Шивээс бол урлаг
        </h1>
        <p className="mx-auto mt-5 max-w-xl font-sans text-base text-charcoal/70 lg:text-lg">
          Doxy Tattoo – Улаанбаатар хот дахь мэргэжлийн шивээсний студи. Нарийн
          зураас болон минималист хэв маягаар таны хүсэл мөрөөдлийг амилуулна.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href="/zahialga" className="btn-primary">
            Цаг захиалах
          </Link>
          <Link href="/buteeluud" className="btn-secondary">
            Галерей үзэх
          </Link>
        </div>
      </div>
    </section>
  );
}
