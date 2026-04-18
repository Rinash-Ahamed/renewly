/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          50:  '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        renewly: {
          green:      '#16a34a',
          'green-light': '#22c55e',
          'green-pale': '#f0fdf4',
          'green-soft': '#dcfce7',
          dark:       '#0f1f0f',
          charcoal:   '#1e3a1e',
          stone:      '#64748b',
          muted:      '#94a3b8',
          border:     '#e2e8f0',
          surface:    '#f8fffe',
        }
      },
      fontFamily: {
        display: ['Clash Display', 'DM Sans', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'card':     '0 2px 12px 0 rgba(22,163,74,0.08), 0 1px 4px 0 rgba(0,0,0,0.04)',
        'card-hover': '0 8px 32px 0 rgba(22,163,74,0.18), 0 2px 8px 0 rgba(0,0,0,0.06)',
        'nav':      '0 -2px 20px 0 rgba(0,0,0,0.08)',
        'header':   '0 2px 20px 0 rgba(0,0,0,0.06)',
        'modal':    '0 24px 80px 0 rgba(0,0,0,0.18)',
        'btn':      '0 4px 16px 0 rgba(22,163,74,0.35)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      animation: {
        'fade-up':   'fadeUp 0.5s ease both',
        'fade-in':   'fadeIn 0.3s ease both',
        'slide-up':  'slideUp 0.4s cubic-bezier(0.34,1.56,0.64,1) both',
        'scale-in':  'scaleIn 0.3s cubic-bezier(0.34,1.56,0.64,1) both',
        'pulse-green': 'pulseGreen 2s cubic-bezier(0.4,0,0.6,1) infinite',
      },
      keyframes: {
        fadeUp:   { from: { opacity: 0, transform: 'translateY(16px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        fadeIn:   { from: { opacity: 0 }, to: { opacity: 1 } },
        slideUp:  { from: { opacity: 0, transform: 'translateY(32px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        scaleIn:  { from: { opacity: 0, transform: 'scale(0.92)' }, to: { opacity: 1, transform: 'scale(1)' } },
        pulseGreen: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.6 } },
      }
    },
  },
  plugins: [],
}
