module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#E3F2FF',
          100: '#C5E4FF',
          200: '#9CD8FE',
          300: '#7BC4FD',
          400: '#63B3ED',
          500: '#4299E1',
          600: '#3182CE',
          700: '#2B6CB0',
          800: '#2C5282',
          900: '#2A4365',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}