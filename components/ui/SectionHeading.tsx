export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && (
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-[#FF1053]">
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-3 font-serif text-3xl font-medium leading-tight tracking-tight text-[#F0EAE0] lg:text-4xl ${
          align === "center" ? "mx-auto" : ""
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 max-w-xl font-sans leading-relaxed text-[rgba(240,234,224,0.55)] ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
