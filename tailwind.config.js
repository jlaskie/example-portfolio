/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      maxWidth: {
        xxs: "18rem",
      },
      gradientColorStops: (theme) => ({
        aqua: "rgba(118, 237, 237, 0.9)",
        lavender: "rgba(81, 0, 252, 0.9)",
        ...theme("colors"),
      }),
    },
    plugins: [],
  },
};
