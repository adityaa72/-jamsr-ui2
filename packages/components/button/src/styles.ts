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
    "button relative inline-flex py-2 px-4 rounded-full justify-center items-center gap-2 shrink-0",
    "disabled:cursor-not-allowed disabled:opacity-70",
    "focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2",
  ],
  variants: {
    color: {
      default: "button--default",
      primary: "button--primary",
      secondary: "button--secondary",
      success: "button--success",
      warning: "button--warning",
      danger: "button--danger",
    },
    variant: {
      solid: "button--solid ring-1 ring-inset",
      bordered: "button--bordered border",
      light: "button--light",
      text: "button--text",
      flat: "button--flat",
    },
    isFullWidth: {
      true: "w-full",
    },
    size: {
      xs: "button--xs px-2 py-1 text-xs",
      sm: "button--sm min-w-16 gap-1 px-3 py-1.5 text-xs",
      md: "button--md min-w-20 gap-2 px-4 py-1.5 text-sm",
      lg: "button--lg min-w-30 gap-2 px-5 py-1.5 text-base",
    },
    radius: radiusBaseVariant,
    disableAnimation: {
      true: "",
      false: "transition-[scale] duration-300 data-pressed:scale-98",
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
