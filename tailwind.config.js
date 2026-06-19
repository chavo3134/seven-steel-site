/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        steel: {
          950: "#05070b",
          900: "#070b12",
          850: "#0b111d",
          800: "#101827",
          700: "#172336",
          500: "#718096",
          300: "#c9d4e5"
        },
        electric: {
          500: "#00a8ff",
          400: "#26c6ff",
          300: "#68e1ff"
        }
      },
      fontFamily: {
        sans: ["Inter", "Segoe UI", "Arial", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(0, 168, 255, 0.28)",
        panel: "0 24px 80px rgba(0, 0, 0, 0.34)"
      }
    }
  },
  plugins: []
};
