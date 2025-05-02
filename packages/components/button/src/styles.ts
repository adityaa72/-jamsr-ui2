import { tv, VariantProps } from "@jamsr-ui/utils";

export const button = tv({
  base: [],
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
      xs: "",
      sm: "",
      md: "",
      lg: "",
    },
    radius: {
      sm: "",
      md: "",
      lg: "",
      xl: "",
      "2xl": "",
      "3xl": "",
      full: "",
      none: "",
    },
    disableAnimation: {
      true: "",
      false: "",
    },
  },
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
