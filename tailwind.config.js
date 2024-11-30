/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          sm: '100%',
          md: '768px',
          lg: '1024px',
          xl: '1200px',
        },
      },
    },
  },
  plugins: [],
}

