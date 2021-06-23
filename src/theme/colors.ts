import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#E16428",
  primaryBright: "#E16428",
  primaryDark: "#E16428",
  secondary: "#F6E9E9",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "363333",
  background: "#F6E9E9",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#F6E9E9",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#272121",
  textDisabled: "#BDC2C4",
  textSubtle: "#363333",
  borderColor: "#E9EAEB",
  card: "#F6E9E9",
  gradients: {  
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#272121",
  backgroundDisabled: "#3c3742",
  contrast: "#F6E9E9",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#F5CB5C",
  tertiary: "#353547",
  text: "#E16428",
  textDisabled: "#666171",
  textSubtle: "#F6E9E9",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};