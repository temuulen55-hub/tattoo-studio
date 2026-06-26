import type { Config } from "tailwindcss";

// Дизайны систем — Техникийн тодорхойлолтын 5-р хэсэгт заасан өнгө, типографийн tokens.
// Бүх компонент эндээс л өнгө, фонтоо авна — hardcode hex утга component дотор бичихгүй.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Roles are swapped: Backgrounds are now dark, Text and Buttons are now light.
        champagne: "#11100E", // Was #F5EFE6 (Now a very dark, deep charcoal for the main background)
        ivory: "#1A1816", // Was #FAF7F2 (Now a slightly lighter dark for section backgrounds)
        charcoal: "#F5EFE6", // Was #2B2925 (Now uses your old champagne color for text)
        "dusty-rose": "#C9A0A0", // Kept the same for consistency
        espresso: "#FAF7F2", // Was #3A2E2A (Now uses your old ivory color for bright CTA buttons)
        "soft-gold": "#C9A66B", // Kept the same
        "neon-pink": "#FF1053", // Added for subtle hover effects or borders
      },
      fontFamily: {
        // Playfair Display — Кирилл (Cyrillic) дэмжлэгтэй serif, гарчигт
        serif: ["var(--font-display)", "Georgia", "serif"],
        // Inter — Кирилл дэмжлэгтэй sans-serif, body текстэнд
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      borderRadius: {
        pill: "999px",
      },
      boxShadow: {
        // Darkened shadow to blend perfectly into the new dark backgrounds
        card: "0 4px 24px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
