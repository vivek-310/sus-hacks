module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff" },
        gray: {
          100: "#f3f3f3",
          400: "#d4a7bf",
          500: "#96839b",
          900: "#140c1f",
          "100_01": "#f5fbf2",
          "500_b2": "#a38ea8b2",
        },
        black: { 900: "#000000", "900_7f": "#0000007f" },
        red: { A700_a0: "#ed0000a0" },
        purple: { 500: "#ad1aaf" },
      },
      boxShadow: {},
      backgroundImage: {
        gradient: "linear-gradient(135deg, #ffffff,#ffffff)",
        gradient1: "linear-gradient(129deg, #cb218e,#6617cb)",
        gradient2: "linear-gradient(135deg,)",
        gradient3: "linear-gradient(129deg,)",
      },
      fontFamily: {
        lato: "Lato",
        oxanium: "Oxanium",
        worksans: "Work Sans",
        roboto: "Roboto",
        scheherazade: "Scheherazade",
        sansserifcollection: "Sans Serif Collection",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
