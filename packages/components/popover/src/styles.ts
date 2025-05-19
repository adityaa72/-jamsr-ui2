import { radiusVariant, tv } from "@jamsr-ui/utils";

import type { VariantProps } from "@jamsr-ui/utils";

export const popoverVariants = tv({
  slots: {
    root: "",
    arrow: "",
    overlay: "",
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
