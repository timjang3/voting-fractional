import { atoms } from "@/styles/atoms";
import { noSelect } from "@/styles/reset.css";
import { colors, space } from "@/styles/vars.css";
import { createVar, style } from "@vanilla-extract/css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

const paddingVar = createVar();

const boxShadowColorVar = createVar();

const primaryColorVar = createVar();

const secondaryColorVar = createVar();

const color = {
  blue: style({
    vars: {
      [primaryColorVar]: colors.blue,
      [secondaryColorVar]: colors.blue10,
    },
  }),
  red: style({
    vars: {
      [primaryColorVar]: colors.red,
      [secondaryColorVar]: colors.red10,
    },
  }),
  gray: style({
    vars: {
      [primaryColorVar]: colors.gray,
      [secondaryColorVar]: colors.gray10,
    },
  }),
  black: style({
    vars: {
      [primaryColorVar]: colors.black,
      [secondaryColorVar]: colors.gray30,
    },
  }),
  gray50: style({
    vars: {
      [primaryColorVar]: colors.gray50,
      [secondaryColorVar]: colors.gray10,
    },
  }),
};

export type Color = keyof typeof color;

const variant = {
  primary: style([
    style({
      color: colors.white,
      backgroundColor: primaryColorVar,
    }),
    style({
      vars: {
        [boxShadowColorVar]: primaryColorVar,
      },
    }),
  ]),
  transparent: style([
    style({
      color: primaryColorVar,
    }),
    style({
      selectors: {
        "&:hover, &:focus": {
          color: colors.black,
          backgroundColor: colors.gray5,
          vars: {
            [boxShadowColorVar]: colors.gray5,
          },
        },
        "&:disabled": {
          backgroundColor: "transparent !important",
        },
      },
    }),
  ]),
};

export type Variant = keyof typeof variant;

const size = {
  small: style([
    style({
      selectors: {
        "&:hover": {
          boxShadow: `0 0 0 0.1rem ${boxShadowColorVar}`,
          outline: "none",
        },
        "&:active": {
          boxShadow: `0 0 0 0.05rem ${boxShadowColorVar}`,
        },
      },
      vars: {
        [paddingVar]: space["2"],
      },
    }),
    atoms({
      display: "flex",
      borderRadius: "small",
      paddingY: "0.5",
      gap: "1",
      height: "6",
    }),
  ]),
  medium: style([
    style({
      selectors: {
        "&:hover": {
          boxShadow: `0 0 0 0.125rem ${boxShadowColorVar}`,
          outline: "none",
        },
        "&:active": {
          boxShadow: `0 0 0 0.05rem ${boxShadowColorVar}`,
        },
      },
      vars: {
        [paddingVar]: space["2.5"],
      },
    }),
    atoms({
      display: "flex",
      borderRadius: "medium",
      paddingY: "0.5",
      gap: "1",
      height: "8",
    }),
  ]),
};

export type Size = keyof typeof size;

export const variants = recipe({
  base: style([
    noSelect,
    style({
      paddingLeft: paddingVar,
      paddingRight: paddingVar,
      alignItems: "center",
      whiteSpace: "nowrap",
      cursor: "pointer",
      selectors: {
        "&:disabled": {
          backgroundColor: colors.gray10,
          color: `${colors.gray50} !important`,
          boxShadow: "none",
          transition: "none",
        },
      },
    }),
    style({
      boxShadow: `0 0 0 0 ${boxShadowColorVar}`,
      transition:
        "background-color .2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    }),
  ]),
  variants: {
    color,
    size,
    variant,
    disabled: {
      true: style({
        cursor: "not-allowed",
        backgroundColor: colors.gray10,
        color: `${colors.gray50} !important`,
        boxShadow: "none",
        transition: "none",
        selectors: {
          "&:hover, &:focus": {
            boxShadow: "none",
            outline: "none",
          },
        },
      }),
    },
  },
});

export type Variants = RecipeVariants<typeof variants>;
