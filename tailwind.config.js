/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#F5F4F0",
        canvasSoft: "#EBE9E2",
        ink: "#1A1A1A",
        inkSoft: "#6E6E68",
        cobalt: "#2451FF",
        lime: "#D6FF3F",
        line: "#DCD9CF",
      },
      fontFamily: {
        display: ["'Bricolage Grotesque'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
    },
  },
  plugins: [],
};
