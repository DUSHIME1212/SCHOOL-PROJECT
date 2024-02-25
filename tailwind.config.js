/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gold: {
          "100": "#ffe600",
          "200": "#e6cc00",
          "300": "rgba(230, 204, 0, 0.3)",
          "400": "rgba(230, 204, 0, 0.79)",
          "500": "rgba(255, 230, 0, 0.06)",
          "600": "rgba(230, 204, 0, 0.09)",
          "700": "rgba(255, 230, 0, 0.79)",
        },
        darkslateblue: "#1f2152",
        gray: {
          "100": "rgba(255, 255, 255, 0.05)",
          "200": "rgba(255, 255, 255, 0.1)",
          "300": "rgba(255, 255, 255, 0.2)",
          "400": "rgba(0, 0, 0, 0.2)",
        },
        gainsboro: "#e6e6e6",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        manrope: "Manrope",
        "text-regular-normal": "Roboto",
        michelle: "Michelle",
        beyonders: "Beyonders",
      },
      borderRadius: {
        "smi-6": "12.6px",
        "21xl": "40px",
      },
    },
    fontSize: {
      xs: "12px",
      xl: "20px",
      base: "16px",
      lg: "18px",
      "37xl": "56px",
      "15xl": "34px",
      "26xl": "45px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      "45xl": "64px",
      "19xl": "38px",
      "32xl": "51px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
