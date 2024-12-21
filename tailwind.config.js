/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        btn: "#2bb19c", // Custom background color for buttons
        heading: "#000000", // Black for headings
        paragraph: "#242827", // Custom color for paragraphs
      },
      fontFamily: {
        primary: ["nexa", "sans-serif"], // Custom font for headings
        secondary: ["inter", "sans-serif"], // Custom font for paragraphs
      },
    },
  },
  plugins: [],
};
