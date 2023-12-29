/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "default-font-black": "#333",
        "theme-color": "rgba(173,158,135,.97)",
        "footer-color": "#111",
        "footer-font-color": "#a7a7a7",
      },
    },
  },
  plugins: [],
};
