/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        violet: "#5964E0",
        lightViolet: "#939BF4",
        darkBlue: "#19202D",
        midNight: "#121721",
        lightGrey: "#F4F6F8",
        grey: "#9DAEC2",
        darkGrey: "#6E8098",
        overlay: "rgba(157, 174, 194, 0.5)",
        lightVioletbg: " rgba(89, 100, 224, 0.1)",
        lightVioletHover: " rgba(89, 100, 224, 0.35)",
        darkbg: "rgba(255, 255, 255, 0.1)",
        darkHover: "rgba(255, 255, 255, 0.35)",
      },
      width: {
        button: "-webkit-fill-available",
      },
      minHeight: {
        main: "100vh",
      },
      screens: {
        small: "100px",
        desktop: "1440px",
      },
    },
    flexGrow: {
      1: "1",
      2: " 2",
    },
    fontFamily: {
      kumbr: "'Kumbh Sans', sans-serif",
    },
  },
  plugins: [],
};
