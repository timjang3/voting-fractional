import * as React from "react";

import { Box, BoxProps } from "../Box";
import * as styles from "./styles.css";

export type TextProps = {
  as?:
    | "code"
    | "div"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "label"
    | "p"
    | "span";
  weight?: BoxProps["fontWeight"];
  children?: React.ReactNode;
  variant?: styles.Variant;
  lineHeight?: BoxProps["lineHeight"];
  size?: styles.Size;
  color?: styles.Color;
} & Omit<BoxProps, "size">;

const Text = React.forwardRef(
  (
    {
      as = "span",
      truncate,
      weight = "inherit",
      children,
      color,
      size = "inherit",
      variant,
      lineHeight,
      className,
      ...props
    }: TextProps,
    ref: React.Ref<HTMLElement>
  ) => {
    return (
      <Box
        {...props}
        as={as}
        className={[
          styles.variants({
            color,
            size,
            variant,
          }),
          className,
        ]}
        fontWeight={weight}
        ref={ref}
        lineHeight={lineHeight}
      >
        {children}
      </Box>
    );
  }
);

export default Text;
