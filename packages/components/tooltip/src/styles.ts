import { radiusVariant, tv } from "@jamsrui/utils";

import type { VariantProps } from "@jamsrui/utils";

export const tooltipVariants = tv({
  slots: {
    root: "bg-background-secondary inline-flex px-3 py-1 text-sm font-medium text-foreground",
    arrow: "",
  },
  variants: {
    radius: radiusVariant("root"),
  },
  defaultVariants: {
    radius: "md",
  },
});

export type TooltipVariants = VariantProps<typeof tooltipVariants>;
export type TooltipSlots = keyof ReturnType<typeof tooltipVariants>;
