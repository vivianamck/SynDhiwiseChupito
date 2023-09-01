module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#f6f7fc",
          100: "#f8f5f5",
          200: "#e8e8e8",
          400: "#cac1c1",
          500: "#acacac",
          600: "#848383",
          800: "#4c4848",
          "50_01": "#fafbfd",
          "600_f8": "#858484f8",
          "100_01": "#f7f5f5",
        },
        blue_gray: {
          100: "#d9d9d9",
          600: "#545f70",
          900: "#2e2e2e",
          "100_01": "#cbcaca",
        },
        indigo: { 50: "#e2e8ee" },
        black: { 900: "#000000", "900_3f": "#0000003f" },
        orange: { 300: "#e9b741" },
        light_green: { 900: "#247117" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { inter: "Inter", sourcesanspro: "Source Sans Pro" },
      boxShadow: { bs: "0px 4px  4px 0px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
