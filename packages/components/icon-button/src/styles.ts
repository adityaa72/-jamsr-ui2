import {
  allColors,
  allVariants,
  colorVariants,
  radiusBaseVariant,
  tv,
} from "@jamsrui/utils";

import type { VariantProps } from "@jamsrui/utils";

export const iconButtonVariants = tv({
  base: [
    "icon-button",
    "z-0",
    "cursor-default",
    "shrink-0",
    "group",
    "relative",
    "inline-flex",
    "items-center",
    "justify-center",
    "box-border",
    "appearance-none",
    "outline-none",
    "select-none",
    "whitespace-nowrap",
    "min-w-max",
    "font-medium",
    "tap-highlight-transparent",
    "transition-transform duration-300",
    "focus-visible:ring-2 focus-visible:ring-primary",
    "data-disabled:cursor-not-allowed data-disabled:opacity-60",
    "text-transform-inherit",
  ],
  variants: {
    color: {
      default: "",
      primary: "",
      secondary: "",
      success: "",
      warning: "",
      danger: "",
    },
    variant: {
      solid: "",
      bordered: "border bg-transparent",
      light: "",
      text: "",
      flat: "",
    },
    size: {
      xs: "size-6 rounded",
      sm: "size-8 min-w-8 rounded-lg",
      md: "size-10 min-w-10 rounded-xl",
      lg: "size-12 min-w-12 rounded-2xl",
    },
    disableAnimation: {
      true: "transition-none!",
      false: "data-pressed:scale-98",
    },
    radius: radiusBaseVariant,
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
  },
});

export type IconButtonVariantProps = VariantProps<typeof iconButtonVariants>;
