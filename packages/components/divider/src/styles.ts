import { tv } from "@jamsrui/utils";

import type { VariantProps } from "@jamsrui/utils";

export const test = "";
export const dividerVariants = tv({
  slots: {
    root: "flex items-center gap-2",
    divider: "",
  },
  variants: {
    orientation: {
      vertical: {
        root: "flex-col",
        divider: "h-full w-px",
      },
      horizontal: {
        divider: "h-px w-full",
      },
    },
    variant: {
      light: { divider: "bg-stroke-secondary" },
      dark: { divider: "bg-stroke-secondary" },
      default: { divider: "bg-stroke-primary" },
      gradient: {
        divider: "from-transparent via-[#989AA6]/[0.5] to-transparent",
      },
    },
  },
  compoundVariants: [
    {
      orientation: "horizontal",
      variant: "gradient",
      className: {
        divider: "bg-gradient-to-r",
      },
    },
    {
      orientation: "vertical",
      variant: "gradient",
      className: {
        divider: "bg-gradient-to-b",
      },
    },
  ],
  defaultVariants: {
    variant: "default",
    orientation: "horizontal",
    color: "default",
  },
});

export type DividerVariants = VariantProps<typeof dividerVariants>;
export type DividerSlots = keyof ReturnType<typeof dividerVariants>;
