const colors = {
  white: "#E1E1E6",

  gray: {
    200: "#C4C4CC",
    300: "#8D8D99",
  },

  green: {
    500: "#00292E",
    400: "#28494E",
    200: "#9FF9CC",
  },
  orange: {
    500: "#F48F56",
  },
};

const fontFamily = {
  regular: "Roboto_400Regular",
  bold: "Roboto_700Bold",
  medium: "Roboto_500Medium",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: { colors, fontFamily },
  },
  plugins: [],
};
