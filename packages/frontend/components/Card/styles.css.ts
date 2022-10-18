import { atoms } from "@/styles/atoms";
import { colors } from "@/styles/vars.css";
import { style } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

const variant = {
  secondary: atoms({
    borderWidth: "0.5",
    borderColor: "gray10",
    backgroundColor: "white",
  }),
  tertiary: atoms({
    backgroundColor: "gray5",
  }),
  primary: atoms({
    backgroundColor: "white",
  }),
};

export type Variant = keyof typeof variant;

export const hoverStyle = style({
  cursor: "pointer",
  selectors: {
    "&:hover": {
      boxShadow: `0 0 0 0.125rem ${colors.gray10}`,
      borderStyle: "solid",
    },
    "&:active": {
      boxShadow: `0 0 0 0.25rem ${colors.gray10}`,
    },
  },
});
export const variants = recipe({
  base: style([
    atoms({
      borderRadius: "large",
      transitionProperty: "shadow",
      transitionDuration: "200",
      transitionTimingFunction: "inOut",
    }),
  ]),
  compoundVariants: [
    {
      variants: {
        variant: "primary",
        isClickable: true,
      },
      style: style({
        boxShadow: "rgb(0 0 0 / 6%) 0px 0px 1px",
        transitionDuration: "150ms",
        transitionProperty: "background-color",
        selectors: {
          "&:hover": {
            backgroundColor: "rgb(251, 251, 252)",
            boxShadow: "rgb(0 0 0 / 6%) 0px 0px 1px",
          },
        },
      }),
    },
    {
      variants: {
        variant: "secondary",
        isClickable: true,
      },
      style: hoverStyle,
    },
    {
      variants: {
        variant: "tertiary",
        isClickable: true,
      },
      style: hoverStyle,
    },
  ],
  variants: {
    variant,
    isClickable: {
      true: {
        cursor: "pointer",
      },
    },
  },
});

export type Variants = RecipeVariants<typeof variants>;
