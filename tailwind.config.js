module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        blue_1: "#2F6CE5",
        blue_2: "#212529",
        pinkL: "#FF5C5C",
        pinkR: "#F0568A",
        close: "#212529",
        searchBg: "#F2F2F2",
        gray_1: "#5C5C5C",
        gray_2: "#8A8A8A",
        gray_3: "#E0E0E0",
        gray_4: "#525252",
        gray_5: "#A9AEB8",
        gray_6: "#BFBFC0",
        optionsBg: "#BFBFC0",
        shareBg: "#EDEEF0",
        green_1: "#02B875",
        red_1: "#E56135",
        input: "#D9D9DB",
      },
      spacing: {
        cover: "72px",
        400: "600px",
        small: "0.4rem",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
          md: "4rem",
          lg: "5rem",
          xl: "6rem",
          "2xl": "10rem",
        },
      },
      width: {
        330: "330px",
        360: "360px",
      },
      height: {
        80: "80px",
        340: "340px",
        370: "370px",
        440: "440px",
        510: "510px",
      },
      flex: {
        0.7: "0.7 1 0%",
      },
      maxHeight: {
        370: "370px",
      },
      minWidth: {
        210: "210px",
        350: "350px",
        620: "620px",
      },
      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(-200px)",
            transform: "translateX(-200px)",
          },
          "100%": {
            "-webkit-transform": "translateX(0px)",
            transform: "translateX(0px)",
          },
        },

        "slide-fwd": {
          "0%": {
            "-webkit-transform": "translateY(-100px)",
            transform: "translateY(-100px)",
          },
          "100%": {
            "-webkit-transform": "translateY(0)",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-out",
        "slide-fwd":
          " slide-fwd 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      },
      transitionProperty: {
        height: "height",
      },
    },
    cursor: {
      "zoom-in": "zoom-in",
      pointer: "pointer",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
