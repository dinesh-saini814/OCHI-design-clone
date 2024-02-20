/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
