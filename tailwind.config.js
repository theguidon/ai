import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Chakra Petch", ...defaultTheme.fontFamily.sans],
        redaction: ["Redaction", ...defaultTheme.fontFamily.mono],
        "redaction-10": ['"Redaction 10"', ...defaultTheme.fontFamily.mono],
        "redaction-20": ['"Redaction 20"', ...defaultTheme.fontFamily.mono],
        "redaction-35": ['"Redaction 35"', ...defaultTheme.fontFamily.mono],
        "redaction-50": ['"Redaction 50"', ...defaultTheme.fontFamily.mono],
        "redaction-70": ['"Redaction 70"', ...defaultTheme.fontFamily.mono],
        "redaction-100": ['"Redaction 100"', ...defaultTheme.fontFamily.mono],
      },
    },
    colors: {
      black: "#0d0b10",
      "dark-green": "#0c4346",
      "light-green": "#85e0a3",
      "light-red": "#e46351",
      "dark-red": "#4d0505",
      white: "#ffffff",
      "t-dark-green": "#111f15",
      pink: "#ffd8d3",
      "dark-pink": "#ff9283",
    },
  },
  plugins: [],
};
