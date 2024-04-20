/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primaryfont: ['"Test_Founders_Grotesk_X_Condensed"'],
        primaryfont: ["/fonts/Inter/Test_Founders_Grotesk_X_Condensed"],
        secondaryfont: "/fonts/Inter/Neue_Montreal",
        // Add more custom font families as needed
      },
      backgroundImage: {
        "play-eye-bg": "url('src/assets/PlayEyes background.jpg')",
      },
      opacity: {
        1: "0.1",
        2: "0.2",
        5: "0.5",
      },

      colors: {
        background: "#f1f1f1",
        charcoal: "#212121",
        marquee: "rgba(0, 77, 67, 1)",
        customGreen: "#CDEA68", // Replace with your custom color value
      },
    },
  },
  plugins: [],
};
