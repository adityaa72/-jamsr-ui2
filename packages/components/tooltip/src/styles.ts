import { radiusVariant, tv } from "@jamsrui/utils";

import type { VariantProps } from "@jamsrui/utils";

export const tooltipVariants = tv({
  slots: {
    content:
      "bg-surface inline-flex px-3 py-1 text-sm font-medium text-foreground",
    arrow: "fill-background-secondary",
  },
  variants: {
    radius: radiusVariant("content"),
  },
  defaultVariants: {
    radius: "md",
  },
});

export type TooltipVariants = VariantProps<typeof tooltipVariants>;
export type TooltipSlots = keyof ReturnType<typeof tooltipVariants>;
