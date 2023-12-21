/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      "light-bg": "#F4F7FD",
      "dark-bg": "#20212C",
      purple: "#635FC7",
      "purple-hover": "#A8A4FF",
      red: "#EA5555",
      "red-hover": "#FF9898",
      "dark-gray": "#2B2C37",
      "lines-dark": "#3E3F4E",
      "lines-light": "#E4EBFA",
      "medium-gray": "#828FA3",
    },
    fontSize: {
      xs: "0.75rem", //12px heading(s)
      sm: "0.8125", //13px
      base: "0.937rem", //15px heading(m)
      lg: "1.125rem", //18px heading (l)
      xl: "1.5rem", //24px  heading(xl)
    },
    extend: {
      lineHeight: {
        "leading-3": "0.937rem", //12px
        "leading-4": "1.187rem", //15px
        "leading-5": "1.437rem", // 19px
        "leading-6": "1.875rem", // 30px
      },
      width: {
        inherit: "inherit",
      },
    },
  },
  plugins: [],
};
