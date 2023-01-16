/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  // delete all oneoff customizations not padding which will be reused in contact border to inlude in the place itself with [] ie p-[5rem]. Decrease font-size and increase padding and decrease max-width to change text placement
  theme: {
    extend: {
      padding: {
        0.8: "0.18rem",
      },
      fontSize: {
        4.5: "2.4rem",
      },
      maxWidth: {
        xxs: "18rem",
      },
      textOpacity: {
        92: "0.925",
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
