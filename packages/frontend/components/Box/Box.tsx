import clsx, { ClassValue } from "clsx";
import Link from "next/link";
import * as React from "react";

import { Atoms, atoms, sprinkles } from "../../styles";
import * as resetStyles from "../../styles/reset.css";

type HTMLProperties = Omit<
  React.AllHTMLAttributes<HTMLElement>,
  "as" | "className" | "color" | "height" | "width"
>;

type Props<T> = Atoms &
  T & {
    as?: React.ElementType;
    className?: ClassValue;
  };

const Box = React.forwardRef<HTMLElement, any>(
  <T extends HTMLProperties>(
    { as = "div", className, href, ...props }: Props<T>,
    ref
  ) => {
    const atomProps: Record<string, unknown> = {};
    const nativeProps: Record<string, unknown> = {};

    for (const key in props) {
      if (sprinkles.properties.has(key as keyof Omit<Atoms, "reset">)) {
        atomProps[key] = props[key as keyof typeof props];
      } else {
        nativeProps[key] = props[key as keyof typeof props];
      }
    }

    const atomicClasses = [
      resetStyles.base,
      resetStyles.element[
        typeof as === "string" ? (as as resetStyles.Element) : "div"
      ],
      atoms({
        ...atomProps,
      }),
    ];

    const innerElement = React.createElement(as, {
      className: clsx(atomicClasses, className),
      ...nativeProps,
      ref,
    });
    return as === "a" && href ? (
      <Link href={href}>{innerElement}</Link>
    ) : (
      innerElement
    );
  }
);

export type BoxProps = Parameters<typeof Box>[0];

export default Box;
