module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,d}"],
  theme: {
    extend: {
      height: {
        120: "30.5rem",
        128: "31rem",
        129: "32.7rem",
      },
      colors: {
        brown: {
          50: "#fdf8f6",
          100: "#f2e8e5",
          200: "#eaddd7",
          300: "#e0cec7",
          400: "#d2bab0",
          500: "#bfa094",
          600: "#a18072",
          700: "#977669",
          800: "#846358",
          900: "#43302b",
        },
        pomegranate: {
          DEFAULT: "#F24E1E",
          50: "#FCD7CC",
          100: "#FBC7B8",
          200: "#F9A992",
          300: "#F68B6B",
          400: "#F46C45",
          500: "#F24E1E",
          600: "#CC370C",
          700: "#972909",
          800: "#621B06",
          900: "#2D0C03",
        },
        heather: {
          DEFAULT: "#B3BDD0",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#E5E9EF",
          400: "#CCD3E0",
          500: "#B3BDD0",
          600: "#909FBB",
          700: "#6E81A5",
          800: "#546587",
          900: "#3E4B64",
        },
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};