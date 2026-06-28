import type { Config } from "tailwindcss";

// Temka Tattoo — "Premium Neon Noir" Design System
// Palette: void black backgrounds, ivory text, neon pink accent, soft gold highlight
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Backgrounds — void black layering system
        champagne: "#0D0C0B", // Page background (deepest void)
        ivory: "#161412", // Section/card surface (one step lighter)

        // Text — high-contrast ivories
        charcoal: "#F0EAE0", // Primary text (warm off-white)

        // Accents
        "dusty-rose": "#FF1053", // Neon pink — THE signature accent
        espresso: "#F0EAE0", // CTA button fill (matches text for reversed buttons)
        "soft-gold": "#C9A66B", // Gold — kept for stars, category labels
        "neon-pink": "#FF1053", // Alias for explicit neon references

        // Surfaces & borders
        "surface-1": "#1E1B18", // Hover card surface
        "surface-2": "#2A2520", // Border color
      },
      fontFamily: {
        serif: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      borderRadius: {
        pill: "999px",
      },
      boxShadow: {
        // Neon pink glow — the signature element
        "neon-sm": "0 0 12px rgba(255, 16, 83, 0.25)",
        "neon-md": "0 0 24px rgba(255, 16, 83, 0.35)",
        "neon-lg": "0 0 40px rgba(255, 16, 83, 0.45)",
        // Card elevation for dark mode
        card: "0 4px 24px rgba(0, 0, 0, 0.6), 0 1px 0 rgba(255,255,255,0.04) inset",
        "card-hover":
          "0 8px 40px rgba(0, 0, 0, 0.8), 0 0 24px rgba(255, 16, 83, 0.2)",
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 12px rgba(255, 16, 83, 0.2)" },
          "50%": { boxShadow: "0 0 28px rgba(255, 16, 83, 0.5)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
      },
      backgroundImage: {
        "neon-gradient": "linear-gradient(135deg, #FF1053 0%, #C9166A 100%)",
        "surface-gradient": "linear-gradient(180deg, #1E1B18 0%, #161412 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
