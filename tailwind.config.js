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
          dark: "#1F2937",
          light: "#F9FAFB",
          DEFAULT: "#333333",
        },
        background: {
          navy: "#0A1F44",
          light: "#F9FAFB",
        },
        gradient: {
          purple: "#8B5CF6",
          pink: "#EC4899",
          orange: "#F97316",
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        'gradient-blue-navy': 'linear-gradient(135deg, #00CFFF 0%, #0A1F44 100%)',
        'gradient-blue-lime': 'linear-gradient(90deg, #007BFF 0%, #A3FF12 100%)',
      },
      keyframes: {
        'bar-grow': {
          '0%': { transform: 'scaleY(0.2)', transformOrigin: 'bottom' },
          '50%': { transform: 'scaleY(1)', transformOrigin: 'bottom' },
          '100%': { transform: 'scaleY(0.2)', transformOrigin: 'bottom' },
        }
      },
      animation: {
        'bar-1': 'bar-grow 1.2s ease-in-out infinite',
        'bar-2': 'bar-grow 1.2s ease-in-out infinite 0.2s',
        'bar-3': 'bar-grow 1.2s ease-in-out infinite 0.4s',
      }
    },
  },
  plugins: [],
}
