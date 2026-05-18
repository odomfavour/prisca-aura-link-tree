/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "abt-pattern":
          "linear-gradient(45deg, #000000c9, #000000c7), url('/aura-bg-1.jpeg')",
      },
      fontFamily: {
        jose: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
