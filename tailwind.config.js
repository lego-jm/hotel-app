/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "default-font-black": "#333",
        "theme-color": "rgba(173,158,135,.97)",
      },
      backgroundColor: { "default-bg": "rgba(173,158,135,.97)" },
    },
  },
  plugins: [],
};
