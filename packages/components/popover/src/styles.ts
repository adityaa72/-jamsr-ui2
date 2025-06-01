import { radiusVariant, tv } from "@jamsrui/utils";

import type { VariantProps } from "@jamsrui/utils";

export const test = "";
export const popoverVariants = tv({
  slots: {
    root: "z-popover",
    content:
      "bg-background-secondary p-2 text-sm shadow-md backdrop-blur-3xl focus:outline-none",
    arrow: "fill-background-secondary",
    backdrop: "z-backdrop",
  },
  variants: {
    radius: radiusVariant("content"),
    backdrop: {
      transparent: {
        backdrop: "",
      },
      opaque: {
        backdrop: "bg-black/50",
      },
      blur: {
        backdrop: "bg-black/30 backdrop-blur-md backdrop-saturate-150",
      },
    },
  },
  defaultVariants: {
    radius: "md",
    backdrop: "transparent",
  },
});

export type PopoverVariants = VariantProps<typeof popoverVariants>;
export type PopoverSlots = keyof ReturnType<typeof popoverVariants>;
