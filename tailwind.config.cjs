/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: "var(--bg-primary)",
        bgSecundary: "var(--bg-secundary)",
        btnPrimary: "var(--btn-primary)",
        btnPrimaryHover: "var(--btn-primaryHover)",
        btnSecundaryHover: "var(--btn-secundaryHover)",
        cardPrimary: "var(--card-primary)",
        cardSecundary: "var(--card-secundary)",
        textPrimary: "var(--text-primary)",
        textSecundary: "var(--text-secundary)",
        textTertiary: "var(--text-tertiary)",
        cardTertiary: "var(--card-primary)",
        iconPrimary: "var(--icon-primary)",
      }
    },
    boxShadow: {
      modalShadow: "0 4px 32px 0 rgba(0, 0, 0, .8)",
    }
  },
  plugins: [],
}