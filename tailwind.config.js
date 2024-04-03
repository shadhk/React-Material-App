module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray: { 100: "#d9d9d6", 900: "#2b2b2b" },
        gray: { 50: "#fbfbf9", 200: "#f1f1ee", 300: "#e5e5e1", 600: "#77776e" },
        white: { A700: "#ffffff", A700_e5: "#ffffffe5" },
        deep_purple: { 50: "#ece6fa", 500: "#6c3cd7" },
      },
      boxShadow: { xs: "1.33px 2.67px 13px 0px #00000019", sm: "0px 1px 12px 0px #00000026" },
      fontFamily: { inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
