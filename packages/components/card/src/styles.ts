import { radiusVariant, tv } from "@jamsrui/utils";

import type { VariantProps } from "@jamsrui/utils";

export const cardVariants = tv({
  slots: {
    root: "card card__root relative flex flex-col overflow-hidden transition-colors",
    header: "card__header relative flex flex-col gap-1 px-4 pt-4",
    title: "card__title font-medium",
    description: "card__description text-foreground-secondary",
    footer: "card__footer flex justify-end gap-2 px-4 pb-4",
    content: "card__content h-full p-4",
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
    radius: radiusVariant("root", "card"),
  },
  defaultVariants: { bg: "default", variant: "solid", radius: "md" },
});

export type CardVariants = VariantProps<typeof cardVariants>;
export type CardSlots = keyof ReturnType<typeof cardVariants>;
