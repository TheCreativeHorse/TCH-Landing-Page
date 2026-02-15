/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#007BFF",
          navy: "#0A1F44",
          sky: "#00CFFF",
          DEFAULT: "#007BFF",
        },
        secondary: {
          lime: "#A3FF12",
        },
        neutral: {
          dark: "#333333",
          light: "#F5F7FA",
          DEFAULT: "#333333",
        },
        background: {
          navy: "#0A1F44",
          light: "#F5F7FA",
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        'gradient-blue-navy': 'linear-gradient(135deg, #00CFFF 0%, #0A1F44 100%)',
        'gradient-blue-lime': 'linear-gradient(90deg, #007BFF 0%, #A3FF12 100%)',
      }
    },
  },
  plugins: [],
}
