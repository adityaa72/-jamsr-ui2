import { radiusVariant, tv } from "@jamsr-ui/utils";

import type { VariantProps } from "@jamsr-ui/utils";

export const popoverVariants = tv({
  slots: {
    root: "z-popover rounded-2xl bg-content1 p-2 text-sm shadow-md backdrop-blur-3xl focus:outline-none",
    arrow: "fill-content1",
  },
  variants: {
    radius: radiusVariant("base"),
  },
  defaultVariants: {
    radius: "md",
  },
});

export type PopoverVariants = VariantProps<typeof popoverVariants>;
export type PopoverSlots = keyof ReturnType<typeof popoverVariants>;
