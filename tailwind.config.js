module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./component/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        primary: "#010069",
        deepBlue: "#216594",
        orange: "##FF9F00",
        brown: "#AC8540",
        optional: "#233962",
        greenLigth: "#5CC2BA",
        golden: "#DFC07C",
        grey: {
          DEFAULT: "#444444",
          light: "#707070",
          Dark: "#4B4B4B",
          product: "#2F3336",
          social: "#323232",
          placeholder: "#AEADB3"
        },
        purple: {
          DEFAULT: "#60375F",
          light: "#913271",
        },
        white: "#FFF",
        black: "#000",
      },
      colors: {
        primary: "#010069",
        greenLigth: "#5CC2BA",
        golden: "#DFC07C",
        grey: {
          DEFAULT: "#444444",
          light: "#707070",
        },
        redFooter: "#EC1E24"
      },
      width: {
        play: "137px",
        playCBD: "6px",
        text: "800px",
        contentResponsive: "255px",
        contentResponsiveAlt: "265px",
        bigLogo: "313px",
        image: "343px",
        benefits: "140px",
        110: "160px",
        279: "279px"
      },
      height: {
        banner: "475px",
        play: "137px",
        banner2: "360px",
        bigLogo: "313px",
        image: "343px",
        benefits: "140px",
        110: "160px"
      },
      margin: {
        cosmetic: "75px",
        textDescriptions: "72px",
        18: "18px",
        33: "33px",
        117: "117px",
        37: "37px",
      },
      fontSize: {
        text: "22px",
        name: "14px",
        title: "28px",
        subcription: "15px",
        red: "14px",
        textResponsive: "12px",
        subtitle: "18px",
        titlePrimary: "37px",
      },
      borderRadius: {
        border: "40px"
      }


    },
  },
  plugins: [

  ],
}
