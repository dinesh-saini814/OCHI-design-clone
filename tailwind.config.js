/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
        textGreen: "#CDEA68",
        card: "#004D43",
      },
    },
  },
  plugins: [],
};
