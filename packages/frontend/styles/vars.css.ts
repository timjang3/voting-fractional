import { rgba } from "./utils";

const shadedColors = {
  blue: "#056DFF",
  cyan: "#05A1FC",
  red: "#FF2C55",
  yellow: "#FCA41D",
  green: "#34C759",
  purple: "#5C59EB",
  orange: "#FC8D58",
  pink: "#FE7CBB",
  gray: "#515871",
};

Object.keys(shadedColors).forEach((color) => {
  [5, 10, 30].forEach((opacity) => {
    // @ts-ignore
    shadedColors[`${color}${opacity}`] = rgba(
      // @ts-ignore
      shadedColors[color],
      opacity / 100
    );
  });
});

const baseColors = {
  black: "#000000",
  white: "#FFFFFF",
  gray50: "#A8ACB8", // TODO: consider using hsl converter rgba(shadedColors.gray, .5),
  transparent: "transparent",
  inherit: "inherit",
  current: "currentColor",
};

type DoubleProp<T> = {
  [P in keyof T & string as `${P}10` | `${P}30` | `${P}5` | P]: T[P];
};
type ShadedColorsObject = DoubleProp<typeof shadedColors>;
type ColorObject = ShadedColorsObject & typeof baseColors;
export type Colors = keyof ColorObject;
export type ShadedColors = keyof typeof shadedColors;

export const colors = {
  ...shadedColors,
  ...baseColors,
} as ColorObject;

export const lineHeights = {
  normal: "normal",
  none: "1",
  "1.25": "1.25", // tight
  "1.375": "1.375", // snug
  "1.5": "1.5", // normal
  "1.625": "1.625", // relaxed
  "2": "2", // loose
};

export const borderWidths = {
  "0": "0px",
  px: "1px",
  "0.375": "0.09375rem",
  "0.5": "0.125rem",
  "0.75": "0.1875rem",
  "1": "0.25rem",
  "2": "0.5rem",
};

export const radii = {
  none: "0",
  small: ".25rem",
  medium: ".5rem",
  large: "1rem",
  extraLarge: "1.5rem",
  full: "9999px",
};

export const timing = {
  inOut: "cubic-bezier(0.4, 0, 0.2, 1)",
};

export const space = {
  "0": "0",
  px: "1px",
  "0.5": "0.125rem",
  "0.75": "0.1875rem",
  "1": "0.25rem",
  "1.5": "0.375rem",
  "2": "0.5rem",
  "2.5": "0.625rem",
  "3": "0.75rem",
  "3.5": "0.875rem",
  "4": "1rem",
  "5": "1.25rem",
  "6": "1.5rem",
  "7": "1.75rem",
  "8": "2rem",
  "9": "2.25rem",
  "10": "2.5rem",
  "11": "2.75rem",
  "12": "3rem",
  "14": "3.5rem",
  "16": "4rem",
  "18": "4.5rem",
  "20": "5rem",
  "24": "6rem",
  "28": "7rem",
  "32": "8rem",
  "36": "9rem",
  "40": "10rem",
  "44": "11rem",
  "48": "12rem",
  "52": "13rem",
  "56": "14rem",
  "60": "15rem",
  "64": "16rem",
  "68": "17rem",
  "72": "18rem",
  "80": "20rem",
  "96": "24rem",
  "98": "26rem",
  auto: "auto",
  full: "100%",
  fit: "fit-content",
  max: "max-content",
  min: "min-content",
  viewHeight: "100vh",
  viewWidth: "100vw",
  none: "0",
};

export const fontSizes = {
  huge: "1.875rem",
  extraLarge: "1.5rem",
  large: "1.125rem",
  base: "1rem",
  small: "0.875rem",
  extraSmall: "0.75rem",
  tiny: "0.625rem",
  inherit: "inherit",
};

export const opacity = {
  "0": "0",
  "50": "0.5",
  "100": "1",
};
