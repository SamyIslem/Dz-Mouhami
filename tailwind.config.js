/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00264D",
        secondary: "#FFD700",
        label: "#F2F2F2",
        secondaryButton: "#03A9F4",
        bgCard: "#1B426A",
        searchLabel: "#94BBE3",
        background: "#001F3F",
        textCard:"#0051A6",
      },
    },
  },
  plugins: [],
};
