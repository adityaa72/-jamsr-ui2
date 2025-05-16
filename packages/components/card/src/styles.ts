import { tv } from "@jamsr-ui/utils";

import type { VariantProps } from "@jamsr-ui/utils";

export const test = "";
export const cardVariants = tv({
  slots: {
    root: "bg-background-secondary",
    header: "flex items-center gap-2",
    headerContent: "flex flex-col grow",
    title: "",
    description: "",
    footer: "",
    content: "",
  },
  variants: {},
  defaultVariants: {},
});

export type CardVariants = VariantProps<typeof cardVariants>;
export type CardSlots = keyof ReturnType<typeof cardVariants>;
