/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#f1f1f1",
        charcoal: "#212121", // Replace with your custom color value
      },
    },
  },
  plugins: [],
};
