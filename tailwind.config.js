/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 6s linear infinite",
        "spin-slower": "spin 30s linear infinite",
      },
      fontFamily: {
        text: ["Spectral", "serif"],
        title: ['"Yanone Kaffeesatz"', "serif"],
        text2: ["Oswald", "serif"],
      },
      scale: {
        400: "4",
      },
    },
  },
  plugins: [],
};
