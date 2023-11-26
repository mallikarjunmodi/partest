/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Merge and resolve any conflicting color definitions
        gray: {
          "100": "#fcfcfc",
          "200": "#fafafa",
        },
        mediumaquamarine: "#1ab58f",
        gainsboro: "#d9d9d9",
        white: "#fff",
        indianred: "#da5555",
        mediumslateblue: "#285bf4",
        darkslategray: {
          "100": "#125873",
          "200": "#393939",
          "300": "#263540",
        },
        whitesmoke: {
          "100": "#f7f7f7",
          "200": "#f2f7f9",
        },
        red: "#f21b1b",
        mediumseagreen: "#6aca79",
        black: "#000",
        darkgray: "#969594",
        gold: "#fbc60c",
      },
      fontFamily: {
        // Merge font families
        inter: "Inter",
        manrope: "Manrope",
      },
      borderRadius: {
        // Keep existing borderRadius settings
        "3xs": "10px",
      },
      fontSize: {
        // Merge and resolve any fontSize conflicts
        xs: "12px",
        xl: "20px",
        base: "16px",
        "17xl": "36px",
        inherit: "inherit",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
