import { radiusVariant, tv } from "@jamsr-ui/utils";

import type { VariantProps } from "@jamsr-ui/utils";

export const test = "";
export const accordionVariants = tv({
  slots: {
    root: "flex flex-col",
    item: "bg-content1 ui-disabled:opacity-80 ui-disabled:cursor-not-allowed",
    header: "flex items-center gap-2",
    trigger: [
      "flex w-full items-center relative gap-3 py-4 px-4",
      "focus-visible:outline-2 focus-visible:outline-primary focus-visible:z-10",
    ],
    content: "py-2 text-base px-4",
    contentWrapper: "overflow-hidden",
    indicator:
      "rotate-0 transition-transform duration-500 data-[open=true]:-rotate-180",
    headingContent: "text-left grow",
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
