import { atoms } from "@/styles/atoms";
import { colors } from "@/styles/vars.css";
import { style, styleVariants } from "@vanilla-extract/css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

const size = styleVariants({
  tiny: { fontSize: "0.625rem", lineHeight: "0.75rem" },
  extraSmall: { fontSize: "0.75rem", lineHeight: "1rem" },
  small: { fontSize: "0.875rem", lineHeight: "1.25rem" },
  base: { fontSize: "1rem", lineHeight: "1.5rem" },
  large: { fontSize: "1.125rem", lineHeight: "1.75rem" },
  extraLarge: { fontSize: "1.5rem", lineHeight: "2rem" },
  huge: { fontSize: "1.875rem", lineHeight: "2.25rem" },
  inherit: { fontSize: "inherit", lineHeight: "inherit" },
});

export type Size = keyof typeof size;

const color = {
  gray: style({
    color: colors.gray,
  }),
  gray50: style({
    color: colors.gray50,
  }),
  blue: style({
    color: colors.blue,
  }),
  red: style({
    color: colors.red,
  }),
  black: style({
    color: colors.black,
  }),
  white: style({
    color: colors.white,
  }),
  inherit: style({
    color: "inherit",
  }),
};

export type Color = keyof typeof color;

const variant = styleVariants({
  primary: {
    color: colors.black,
  },
  secondary: {
    color: colors.gray,
  },
  tertiary: {
    color: colors.gray50,
  },
});

export type Variant = keyof typeof variant;

export const variants = recipe({
  base: atoms({
    fontFamily: "sans"
  }),
  variants: {
    size,
    color,
    variant,
  },
});

export type Variants = RecipeVariants<typeof variants>;
