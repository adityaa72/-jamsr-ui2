import {
  allColors,
  allVariants,
  colorVariants,
  radiusBaseVariant,
  tv,
} from "@jamsrui/utils";

import type { VariantProps } from "@jamsrui/utils";


export const buttonVariant = tv({
  base: [
    "relative inline-flex py-2 px-4 rounded-full justify-center items-center gap-2 shrink-0",
    "data-loading:cursor-progress",
    "disabled:cursor-not-allowed disabled:opacity-70",
    "focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2",
  ],
  variants: {
    color: {
      default: "shadow-default",
      primary: "shadow-primary",
      secondary: "shadow-primary",
      success: "shadow-primary",
      warning: "shadow-primary",
      danger: "shadow-primary",
    },
    variant: {
      solid: "",
      bordered: "border-2",
      light: "",
      text: "",
      flat: "",
    },
    isFullWidth: {
      true: "w-full",
    },
    size: {
      xs: "px-2 py-1 text-xs",
      sm: "min-w-16 gap-1 px-3 py-1.5 text-xs",
      md: "min-w-20 gap-2 px-4 py-2 text-sm",
      lg: "min-w-40 gap-2 px-6 py-2.5 text-base font-medium",
    },
    radius: radiusBaseVariant,
    disableAnimation: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    ...allVariants.flatMap((variant) =>
      allColors.map((color) => ({
        variant,
        color,
        className: colorVariants[variant][color],
      }))
    ),
  ],
  defaultVariants: {
    variant: "solid",
    color: "default",
    size: "md",
    radius: "md",
    disableAnimation: false,
    isFullWidth: false,
  },
});

export type ButtonVariantProps = VariantProps<typeof buttonVariant>;
