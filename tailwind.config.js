/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBg: "#333333",
        primaryBlue: "#2F80ED",
        primaryDarkGray : "#4F4F4F",
        primaryGray: "#828282",
        primaryLightGray : "#E0E0E0",
        indicatorOrange : "#F8B76B",
        indicatorPurple : "#8785FF",
        indicatorRed : "#EB5757",
        indicatorYellow : "#F2C94C",
        chatSoftYellow : "#FCEED3",
        chatYellow : "#E5A443",
        chatSoftPurple : "#EEDCFF",
        chatPurple : "#9B51E0",
        chatSoftGreen : "#D2F2EA",
        chatGreen : "#43B78D",
      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
      }
    },
  },
  plugins: [],
}