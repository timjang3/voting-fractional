import chroma from "chroma-js";

export const rgba = (color, alpha = 1) =>
  `rgba(${chroma(color).rgb()},${alpha})`;
