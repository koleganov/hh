/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#0a0a0a',
        'bg-card': '#151515',
        'accent-orange': '#FF6B35',
        'accent-blue': '#4A90E2',
        'text-primary': '#ffffff',
        'text-secondary': 'rgba(255, 255, 255, 0.7)',
        'border': 'rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [],
}

