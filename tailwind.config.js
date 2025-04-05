/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5', // Indigo-600
        accent: '#22C55E', // Green-500
        background: '#F9FAFB', // Gray-50
        card: '#F3F4F6', // Gray-100
        textPrimary: '#111827', // Gray-900
        textSecondary: '#6B7280', // Gray-500
        error: '#EF4444', // Red-500
      },
    },
  },
  plugins: [],
};
