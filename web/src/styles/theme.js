export const LightTheme = {
  font: {
    family: {
      header: "'Playfair Display', serif",
      body: "'Poppins', sans-serif"
    },
    weight: {
      bold: "700",
      bolditalic: "700i",
      regular: "400",
      regularitalic: "400i",
      semibold: "600"
    }
  },
  color: {
    bg: "hsla(0, 0%, 100% ,1)", // Beyaz
    bg_low: "hsla(0, 0%, 100%, 0.8)", // Beyaz 0.8
    five: "hsla(195,100%,6%,1)",
    four: "hsla(205,100%,17%,1)",
    three: "hsla(195,100%,33%,1)",
    two: "hsla(195,100%,44%,1)",
    white: "hsla(0, 0%, 100% ,1)",
    type: "hsla(0,0%,43%,1)" // koyu Gri
  },
  boxshadow: "0px 10px 30px rgba(0, 52, 89, 0.1), inset 2px 2px 7px rgba(0, 52, 89, 0.02)",
  boxshadowhover: "0px 14px 33px rgba(0, 52, 89, 0.15), inset 2px 2px 7px rgba(0, 52, 89, 0.05)",
  buttonshadow: "0px 4px 10px rgba(0, 0, 0, 0.07), 2px 2px 5px rgba(0, 0, 0, 0.05)",
  radius: "10px"
};

export const DarkTheme = {
  font: {
    family: {
      header: "'Playfair Display', serif",
      body: "'Poppins', sans-serif"
    }
  },
  color: {
    bg: "hsla(238, 100%, 5%,1)", // koyu lacivert
    bg_low: "hsla(238, 100%, 5%, 0.8)", // Beyaz 0.8
    main: "hsla(0,0%, 100%,1)", // Beyaz
    type: "hsla(0,0%,90%,1)", // Acik Gri
    accent: "hsla(54,100%,50%,1)", // Sari
    accent2: "hsla(187,100%,50%,1)" // acik mavi
  },
  component: {
    bg: "hsla(0,0%,100%,1)", // beyaz
    type: "hsla(0,0%,0%,1)" // siyah
  },
  boxshadow: "0px 1px 30px hsla(0,0%,100%,0.2)",
  shadow_lvl1: "0px 1px 3px hsla(0,0%,0%,0.2)",
  shadow_small:
    "0px 2px 1px -1px hsla(0,0%,100%,0.2), 0px 1px 1px 0px hsla(0,0%,100%,0.14), 0px 1px 3px 0px hsla(0,0%,100%,0.12)",
  radius: "16px"
};
