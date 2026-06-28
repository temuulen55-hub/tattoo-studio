import Link from "next/link";

export default function HomePage() {
  return (
    <section className="relative mx-auto flex min-h-[72vh] flex-col items-center justify-center overflow-hidden px-5 py-24 text-center lg:px-8 lg:py-36">
      {/* Ambient neon glow blobs — atmospheric, not overwhelming */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Top-left warm neon bloom */}
        <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-[#FF1053] opacity-[0.06] blur-[120px]" />
        {/* Bottom-right subtle warmth */}
        <div className="absolute -bottom-24 -right-24 h-[400px] w-[400px] rounded-full bg-[#C9A66B] opacity-[0.04] blur-[100px]" />
        {/* Center vignette — pulls focus inward */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(13,12,11,0.4)] via-transparent to-[rgba(13,12,11,0.6)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Eyebrow — neon pink, tight tracking */}
        <p className="animate-fade-up font-sans text-xs font-medium uppercase tracking-[0.25em] text-[#FF1053]">
          Улаанбаатар · Монгол улс
        </p>

        {/* Headline — Playfair, massive, warm ivory */}
        <h1
          className="animate-fade-up mt-5 max-w-3xl font-serif text-5xl font-medium leading-[1.1] tracking-tight text-[#F0EAE0] lg:text-7xl"
          style={{ animationDelay: "80ms" }}
        >
          Шивээс бол
          {/* The word "урлаг" gets the neon treatment — one risk, justified */}{" "}
          <span className="text-[#FF1053] [text-shadow:0_0_40px_rgba(255,16,83,0.35)]">
            урлаг
          </span>
        </h1>

        <p
          className="animate-fade-up mx-auto mt-6 max-w-xl font-sans text-base leading-relaxed text-[rgba(240,234,224,0.6)] lg:text-lg"
          style={{ animationDelay: "160ms" }}
        >
          Temka Tattoo – нарийн мэдрэмж болон минималист хэв маягаар таны хүссэн
          шивээсийг амилуулна. Мэргэжлийн студи, найрсаг артист.
        </p>

        <div
          className="animate-fade-up mt-10 flex flex-wrap items-center justify-center gap-4"
          style={{ animationDelay: "240ms" }}
        >
          <Link href="/zahialga" className="btn-primary">
            <span>Цаг захиалах</span>
          </Link>
          <Link href="/buteeluud" className="btn-secondary">
            Галерей үзэх
          </Link>
        </div>

        {/* Scrolling indicator — minimal, atmospheric */}
        <div
          className="animate-fade-up mt-20 flex flex-col items-center gap-2 opacity-40"
          style={{ animationDelay: "400ms" }}
          aria-hidden="true"
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[rgba(240,234,224,0.6)]">
            Scroll
          </span>
          <div className="h-8 w-px bg-gradient-to-b from-[rgba(240,234,224,0.4)] to-transparent" />
        </div>
      </div>
    </section>
  );
}
