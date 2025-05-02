import { tv, VariantProps } from "@jamsr-ui/utils";
import { allColors, allVariants, colorVariants } from "./classes";

export const test = "";
export const button = tv({
  base: [
    "inline-flex py-2 px-4 rounded-full",
    "data-[loading]:cursor-progress",
    "disabled:cursor-not-allowed disabled:opacity-90",
    // "focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2",
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
      outlined: "",
      light: "",
      text: "",
      flat: "",
    },
    isFullWidth: {
      true: "w-full",
    },
    size: {
      xs: "px-2 py-1 text-2xs",
      sm: "min-w-16 gap-1 px-3 py-1.5 text-xs",
      md: "min-w-20 gap-2 px-4 py-2 text-sm",
      lg: "min-w-40 gap-2 px-6 py-2.5 text-base font-medium",
    },
    radius: {
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      "3xl": "rounded-3xl",
      full: "rounded-full",
      none: "rounded-none",
    },
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
export type ButtonVariantProps = VariantProps<typeof button>;
