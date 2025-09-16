import { radiusVariant, tv } from "@jamsrui/utils";

import type { VariantProps } from "@jamsrui/utils";

export const test = "";
export const accordionVariants = tv({
  slots: {
    root: "flex flex-col",
    item: "bg-surface ui-disabled:opacity-80 ui-disabled:cursor-not-allowed",
    header: "",
    trigger: [
      "flex w-full items-center relative gap-3 py-4 px-4",
      "focus-visible:outline-2 focus-visible:outline-primary focus-visible:z-10",
    ],
    panel: "text-base overflow-hidden",
    content: "py-2 px-4",
  },
  variants: {
    variant: {
      light: "",
      splitted: {
        root: "flex flex-col gap-4",
      },
    },
    radius: radiusVariant(["item", "trigger", "content"]),
  },
  defaultVariants: {
    variant: "light",
    radius: "md",
  },
});

export type AccordionVariants = VariantProps<typeof accordionVariants>;
export type AccordionSlots = keyof ReturnType<typeof accordionVariants>;
