/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        background: '#1A1A1A', // Very dark gray, almost black (main background)
        card: '#2D2D2D', // Slightly lighter gray for card background
        cardMuted: '#444444', // Muted gray for card details or section
        primary: '#5A67D8', // Soft, calming purple-blue (main action color)
        accent: '#48BB78', // Soft green (for CTAs and success actions)
        textPrimary: '#E2E8F0', // Light grayish-blue for main text
        textSecondary: '#A0AEC0', // Subtle gray for less important text
        error: '#E53E3E', // Soft red for errors, without being too bright
      },
    },
  },
  plugins: [],
};
