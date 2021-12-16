const gray = {
  900: "#222222", // Main Text
  800: "#313131", 
  700: "#37414A",
  650: "#898989",
  600: "#7D879C", 
  550: "#e5e5e5",
  500: "#C9C9C9", //Border Color
  400: "#F6F7FB", 
  350: "#a0a0a0",
  300: "#E3E9EF",
  200: "#F3F5F9", 
  100: "#F6F9FC",
  white: "#FFFFFF",
};

const textColor = {
  primary: gray[900],
  secondary: gray[800],
  hint: gray[600],
  muted: gray[600],
  disabled: gray[400],
  link: "#0095ed",
};

const bodyColor = {
  text: textColor.primary,
  default: gray[100],
  paper: gray["white"],
};

const primaryColor = {
  
  pink: "#EF3B62",
  green: "#19A057",  
  blue: "#0095ee",

  main: "#E95106",

  second: "#37414A",

  middle: "#F4C521",  
  dark: "#E70012",
  light: "#FF6C00",

  text: "#ffffff",  

  yellow: "#ffff00",
  navy: "#056bb8"
};

const gradientColor = {
  100: 'linear-gradient(90deg, #ED378E 0%, #FA6268 100%)',
  200: 'linear-gradient(90deg, #06DC74 0%, #6CD625 100%)',
  300: 'linear-gradient(90deg, #FA6268 0%, #F4C521 100%)',
  400: 'linear-gradient(90deg, #725DDF 0%, #84B5D3 100%)',
  text: "#ffffff"
};

const secondaryColor = {
  light: "rgba(15, 52, 96, 0.2)",
  main: "#0F3460",
  second: "#FF6C00",
  dark: "#303A47",
  text: "#ffffff",
  900: "#041533",
  100: "#F3F6F9",
};

const warningColor = {
  main: "#F4C521",
  text: textColor.primary,
};
const errorColor = {
  main: "#E70012",
  light: "#FFE1E6",
  text: textColor.primary,
};
const successColor = {
  main: "rgba(51, 208, 103, 1)",
  light: "rgba(51, 208, 103, 0.15)",
  text: textColor.primary,
};
const defaultColor = {
  light: textColor.secondary,
  main: textColor.primary,
  dark: textColor.primary,
  text: textColor.primary,
};

export const colors = {
  default: defaultColor,
  primary: primaryColor,
  gradient: gradientColor,
  secondary: secondaryColor,
  warn: warningColor,
  error: errorColor,
  success: successColor,
  text: textColor,
  body: bodyColor,
  gray,
};
