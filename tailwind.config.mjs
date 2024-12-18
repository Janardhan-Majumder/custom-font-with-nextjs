/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        questrial: ["var(--questrial)", "sans-serif"],
        syne: ["var(--syne)", "serif"],
        lulo: ["var(--lulo-clean-one-bold)", "serif"],
      },
    },
  },
  plugins: [],
};
