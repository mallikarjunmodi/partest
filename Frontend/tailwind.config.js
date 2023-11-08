module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gainsboro: "#d9d9d9",
        mediumaquamarine: "#1ab58f",
        whitesmoke: {
          "100": "#f7f7f7",
          "200": "#f2f7f9",
        },
        gold: "#fbc60c",
        darkslategray: {
          "100": "#125873",
          "200": "#393939",
          "300": "#263540",
        },
        gray: {
          "100": "#fcfcfc",
          "200": "#fafafa",
        },
        red: "#f21b1b",
        mediumseagreen: "#6aca79",
        darkgray: "#969594",
      },
      fontFamily: {
        inter: "Inter",
        manrope: "Manrope",
      },
    },
    fontSize: {
      xs: "12px",
      xl: "20px",
      base: "16px",
      "17xl": "36px",
      inherit: "inherit",
    },

  },
  corePlugins: {
    preflight: false,
  },
};
