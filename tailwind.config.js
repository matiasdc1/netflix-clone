module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        grow: 'grow .5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        shrink: 'shrink .5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both',
        nav_fade_in: 'nav_fade_in 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
        nav_fade_out: 'nav_fade_out 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
      },
      keyframes: {
        grow: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1) translate(0, -4rem)' },
        },
        shrink: {
          '0%': { transform: 'scale(1) translate(0, -4rem)' },
          '100%': { transform: 'scale(0)' },
        },
        nav_fade_in: {
          '0%': { backgroundColor: 'rgba(18,18,18,0)' },
          '100%': { backgroundColor: 'rgba(18,18,18,1)' },
        },
        nav_fade_out: {
          '0%': { backgroundColor: 'rgba(18,18,18,1)' },
          '100%': { backgroundColor: 'rgba(18,18,18,0)' },
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide'), require('tailwindcss-textshadow')],
}
