/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'loop-scroll': 'loop-scroll 10s linear infinite',
      },
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateY(90%)' },
          to: { transform: 'translateY(-150%)' },
        }
      }                    
    },
  },
  plugins: [],
  prefix: 'tw-',
}

