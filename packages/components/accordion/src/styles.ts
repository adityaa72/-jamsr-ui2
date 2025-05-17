import { radiusVariant, tv } from "@jamsr-ui/utils";

import type { VariantProps } from "@jamsr-ui/utils";

export const test = "";
export const accordionVariants = tv({
  slots: {
    root: "flex flex-col",
    item: "bg-content1",
    header: "flex items-center gap-2",
    trigger: "flex w-full items-center gap-3 py-4",
    content: "py-2 text-base",
    contentWrapper: "overflow-hidden",
  },
  variants: {
    variant: {
      light: "",
      splitted: "",
    },
    radius: radiusVariant("root"),
  },
  defaultVariants: {
    variant: "light",
    radius: "md",
  },
});

export type AccordionVariants = VariantProps<typeof accordionVariants>;
export type AccordionSlots = keyof ReturnType<typeof accordionVariants>;
