import { radiusVariant, tv } from "@jamsrui/utils";

import type { VariantProps } from "@jamsrui/utils";

export const popoverVariants = tv({
  slots: {
    content: "popover popover__content z-popover",
    dialog:
      "popover__dialog bg-surface max-w-64 p-2 text-sm shadow-md backdrop-blur-3xl focus:outline-none origin-[top_center]",
    arrow: "popover__arrow fill-background-secondary",
    backdrop: "popover__backdrop z-backdrop",
  },
  variants: {
    radius: radiusVariant("dialog", "popover"),
    backdrop: {
      transparent: {
        backdrop: "popover--backdrop-transparent",
      },
      opaque: {
        backdrop: "popover--backdrop-opaque bg-black/50",
      },
      blur: {
        backdrop:
          "popover--backdrop-blur bg-black/30 backdrop-blur-md backdrop-saturate-150",
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
