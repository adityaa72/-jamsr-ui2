import { tv } from "@jamsrui/utils";

import type { VariantProps } from "@jamsrui/utils";


export const circularProgressVariants = tv({
  slots: {
    root: "",
    track: "stroke-background-secondary",
    progress: "stroke-success",
    label: "fill-foreground text-xs",
  },
  variants: {
    isIntermediate: {
      true: {
        root: "animate-spin",
      },
    },
    color: {
      current: {
        progress: "stroke-current",
      },
      default: {
        progress: "stroke-background-tertiary",
      },
      primary: {
        progress: "stroke-primary",
      },
      danger: {
        progress: "stroke-danger",
      },
      success: {
        progress: "stroke-success",
      },
      secondary: {
        progress: "stroke-secondary",
      },
      warning: {
        progress: "stroke-warning",
      },
    },
  },
  defaultVariants: {
    color: "primary",
    isIntermediate: true,
  },
});

export type CircularProgressVariants = VariantProps<
  typeof circularProgressVariants
>;
export type CircularProgressSlots = keyof ReturnType<
  typeof circularProgressVariants
>;
