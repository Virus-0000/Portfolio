/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#08080a',
          900: '#0b0b0d',
          850: '#101013',
          800: '#151517',
          700: '#1c1c20',
          600: '#26262b',
          500: '#3a3a41',
        },
        bone: {
          100: '#f6f5f2',
          200: '#e9e7e1',
          300: '#c9c7c1',
          400: '#9a9893',
          500: '#77756f',
        },
        brass: {
          200: '#f0dcae',
          300: '#e6c589',
          400: '#d9ab5f',
          500: '#c8964a',
          600: '#a67638',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        clamp: 'clamp(2.5rem, 6vw, 5rem)',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translate3d(0,0,0) rotate(0deg)' },
          '50%': { transform: 'translate3d(0,-18px,0) rotate(1.5deg)' },
        },
        floatSlower: {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-28px,0)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(14px,-12px,0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.55 },
          '50%': { opacity: 1 },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        floatSlow: 'floatSlow 9s ease-in-out infinite',
        floatSlower: 'floatSlower 13s ease-in-out infinite',
        drift: 'drift 11s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3.2s ease-in-out infinite',
        marquee: 'marquee 32s linear infinite',
      },
    },
  },
  plugins: [],
}
