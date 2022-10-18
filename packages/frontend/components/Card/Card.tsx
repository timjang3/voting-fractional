import * as React from "react";
import { Box, BoxProps } from "../Box";
import { Text } from "../Text";
import * as styles from "./styles.css";

export type CardProps = {
  selected?: boolean;
  variant?: styles.Variant;
  width?: BoxProps["width"];
  padding?: BoxProps["padding"];
  children?: React.ReactNode;
} & Pick<
  JSX.IntrinsicElements["button"],
  "onClick" | "onMouseEnter" | "onMouseLeave" | "children" | "type" | "tabIndex"
> &
  BoxProps;

const Card = ({
  as = "div",
  children,
  onClick,
  variant = "primary",
  width,
  padding = "4",
  ...props
}: CardProps) => {
  return (
    <Box
      as={as}
      padding={padding}
      onClick={onClick}
      className={styles.variants({
        variant,
        isClickable: !!onClick,
      })}
      width={width}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Card;
