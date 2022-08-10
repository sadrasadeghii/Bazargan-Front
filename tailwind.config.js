/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
<<<<<<< HEAD
      fontFamily: {
        'sans': ['YekanBakh', 'Helvetica', 'Arial', 'sans-serif']
      }
=======
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
>>>>>>> 6d90642f5aed67c7778a935de1314314ed579374
    },
    fontSize: {
      title: "3rem",
      caption: "2rem",
      button: "1.625rem",
    },

    plugins: [],
  },
};
