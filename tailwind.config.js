/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBlue: "oklch(82.8% 0.189 84.429)",
        midBlue: "oklch(76.9% 0.188 70.08)",
        deepBlue: "oklch(64.6% 0.222 41.116)",
      },
    },
  },
  plugins: [require("daisyui")],
};
