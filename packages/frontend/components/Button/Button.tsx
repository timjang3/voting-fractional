import * as React from "react";

import { Box } from "../Box";
import { BoxProps } from "../Box/Box";
import { Text } from "../Text";
import { TextProps } from "../Text/Text";
import * as styles from "./styles.css";

type ReactNodeNoStrings = React.ReactElement | boolean | null | undefined;

export type ButtonProps = {
  size?: styles.Size;
  disabled?: boolean;
  variant?: styles.Variant;
  children: React.ReactNode | string;
  color?: styles.Color;
  as?: string;
  href?: string;
  rel?: string;
  target?: string;
} & Pick<
  JSX.IntrinsicElements["button"],
  "onClick" | "onMouseEnter" | "onMouseLeave" | "children" | "type" | "tabIndex"
> &
  Partial<
    Pick<
      BoxProps,
      | "width"
      | "className"
      | "justifyContent"
    >
  >;

const textSize: { [size: string]: TextProps["size"] } = {
  large: "base",
  medium: "small",
  small: "small",
  inline: "inherit",
  extraSmall: "extraSmall",
};

const Button = React.forwardRef(
  (
    {
      children,
      color,
      size = "medium",
      variant = "primary",
      as,
      type = "button",
      className,
      ...boxProps
    }: ButtonProps,
    ref: React.Ref<HTMLButtonElement>
  ) => {
    const baseClassName = styles.variants({
      size,
      variant,
      color: color ?? (variant === "transparent" ? "gray" : "blue"),
      disabled: boxProps.disabled,
    });
    return (
      <Box
        className={className ? [className, baseClassName] : baseClassName}
        ref={ref}
        {...boxProps}
        as={as ?? "button"}
        justifyContent={boxProps.justifyContent ?? "center"}
        width={boxProps.width ?? "max"}
        type={type}
      >
        <Text weight="bold" size={textSize[size]}>
          {children}
        </Text>
      </Box>
    );
  }
);

export default Button;
