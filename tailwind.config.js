/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        padding: "15rem",
      },
      fontFamily: {
        YekanBakh: ["YekanBakh", "Tahoma"],
      },
      spacing: {
        "54px": "3.375rem",
      },
      colors: {
        purple: "#3C096C",
        gray: "#999999",
      },
      width: {
        logo: "10rem",
      },
    },
    fontSize: {
      title: "3rem",
      caption: "2rem",
      button: "1.625rem",
    },

    plugins: [],
  },
};
