/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B0F17',
        secondary: '#121826',
        panel: '#121826',
        steel: '#1C2432',
        accent: '#00C8FF',
        'accent-soft': '#3DE7FF',
        action: '#22C55E',
        'action-strong': '#16A34A',
      },
      boxShadow: {
        soft: '0 20px 50px rgba(0, 0, 0, 0.4)',
        glow: '0 0 30px rgba(0, 200, 255, 0.12)',
      },
      borderRadius: {
        xl: '1.25rem',
      },
      fontFamily: {
        body: ['var(--font-body)', 'sans-serif'],
        display: ['var(--font-display)', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 900ms ease-out both',
        'fade-in': 'fadeIn 900ms ease-out both',
      },
    },
  },
  plugins: [],
}
