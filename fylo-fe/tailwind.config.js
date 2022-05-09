module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      "dark-blue": "hsl(217, 28%, 15%)",
      "dark-blue-main": "hsl(218, 28%, 13%)",
      "dark-blue-footer": "hsl(216, 53%, 9%)",
      "dark-blue-test": "hsl(219, 30%, 18%)",
      cyan: "hsl(176, 68%, 64%)",
      blue: "hsl(198, 60%, 50%)",
      "light-red": "hsl(0, 100%, 63%)",
      white: "hsl(0, 0%, 100%)",
    },
    fontSize: {
      xxs: ["10px", "12px"],
      xs: ["12px", "18px"],
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["18px", "24px"],
      xl: ["24px", "40px"],
      "2xl": ["40px", "42px"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        lg: "5rem",
      },
    },
  },
  plugins: [],
};
