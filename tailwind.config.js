/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // These read the CSS variables defined in src/index.css (.light/.dark/.red).
      colors: {
        background: "rgba(var(--background))",
        border: "rgba(var(--border))",
        card: "rgba(var(--card))",
        "copy-primary": "rgba(var(--copy-primary))",
        "copy-secondary": "rgba(var(--copy-secondary))",
        cta: "rgba(var(--cta))",
        "cta-active": "rgba(var(--cta-active))",
        "cta-text": "rgba(var(--cta-text))",
      },
      fontFamily: {
        // Bundled via @fontsource-variable/source-serif-4 (see src/index.css).
        serif: ['"Source Serif 4 Variable"', "Georgia", "serif"],
      },
    },
  },
  plugins: [],
}
