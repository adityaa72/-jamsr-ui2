import { radiusVariant, tv } from "@jamsrui/utils";

import type { VariantProps } from "@jamsrui/utils";

export const test = "";
export const cardVariants = tv({
  slots: {
    root: "relative flex flex-col overflow-hidden transition-colo",
    header: "relative flex items-center gap-2 px-4 pt-4",
    headerContent: "flex flex-col grow gap-1",
    title: "font-medium",
    description: "text-foreground-secondary",
    footer: "flex justify-end gap-2 px-4 pb-4",
    content: "h-full p-4",
  },
  variants: {
    bg: {
      default: {
        root: "bg-surface",
      },
      secondary: {
        root: "bg-surface",
      },
    },
    isBordered: { true: "border border-divider-dark" },
    isElevated: { true: "shadow-sm" },
    radius: radiusVariant("root"),
  },
  defaultVariants: { bg: "default", variant: "solid", radius: "md" },
});

export type CardVariants = VariantProps<typeof cardVariants>;
export type CardSlots = keyof ReturnType<typeof cardVariants>;
