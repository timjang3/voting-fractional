import { style as resetStyles } from "@vanilla-extract/css";

import "focus-visible";
import { colors, lineHeights, opacity } from "./vars.css";

/**
 * Selector for `focus-visible` package
 * https://github.com/WICG/focus-visible
 * Remove once better browser support
 * https://caniuse.com/css-focus-visible
 */
const hideFocusRingsDataAttribute =
  "[data-js-focus-visible] &:focus:not([data-focus-visible-added])";

export const base = resetStyles({
  // Prevent padding and border from affecting element width
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",

  // Remove margin and padding in all browsers
  margin: 0,
  padding: 0,

  // Allow adding border to element by just adding borderWidth
  borderColor: colors.gray10,
  borderStyle: "solid",
  borderWidth: 0,

  color: colors.current,
  fontSize: "100%",
  // fontFamily: fonts.graphik, // add font
  verticalAlign: "baseline",
  selectors: {
    [`${hideFocusRingsDataAttribute}`]: {
      outline: "none",
    },
  },
});

// HTML5 display-role reset for older browsers
const block = resetStyles({
  display: "block",
});

const body = resetStyles({
  lineHeight: lineHeights.none,
});

const list = resetStyles({
  listStyle: "none",
});

const quote = resetStyles({
  quotes: "none",
  selectors: {
    "&:before, &:after": {
      content: "''",
    },
  },
});

const table = resetStyles({
  borderCollapse: "collapse",
  borderSpacing: 0,
});

export const noOutline = resetStyles({
  outline: "none",

  selectors: {
    "&:focus": {
      outline: "none",
    },
  },
});

export const noSelect = resetStyles({
  WebkitTouchCallout: "none",
  WebkitUserSelect: "none",
  MozUserSelect: "none",
  userSelect: "none",
});

const appearance = resetStyles({
  appearance: "none",
});

const field = resetStyles([
  block,
  appearance,
  resetStyles({
    outline: "none",
    "::placeholder": {
      color: colors.gray50,
      opacity: opacity["100"],
    },
  }),
]);

// Custom reset rules
const mark = resetStyles({
  backgroundColor: colors.transparent,
  color: colors.inherit,
});

const select = resetStyles([
  field,
  resetStyles({
    selectors: {
      "&::-ms-expand": {
        display: "none",
      },
    },
  }),
]);

const input = resetStyles([
  field,
  resetStyles({
    selectors: {
      // Hide browser increment/decrement buttons
      "&::-webkit-outer-spin-button": {
        WebkitAppearance: "none",
      },
      "&::-webkit-inner-spin-button": {
        WebkitAppearance: "none",
      },
      // Hide browser clear input button
      "&::-ms-clear": {
        display: "none",
      },
      "&::-webkit-search-cancel-button": {
        WebkitAppearance: "none",
      },
    },
  }),
]);

const button = resetStyles({
  background: "none",
  outline: "none",
  WebkitAppearance: "none",
});

const a = resetStyles({
  textDecoration: "none",
  color: colors.inherit,
  // @ts-ignore
  WebkitAppearance: "none !important",
});

export const element = {
  article: block,
  aside: block,
  details: block,
  div: block,
  figcaption: block,
  figure: block,
  footer: block,
  header: block,
  hgroup: block,
  menu: block,
  nav: block,
  section: block,
  ul: list,
  ol: list,
  blockquote: quote,
  q: quote,
  body,
  a,
  table,
  mark,
  select,
  button,
  textarea: field,
  input,
};

export type Element = keyof typeof element;
