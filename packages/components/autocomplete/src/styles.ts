import { radiusVariant, tv } from "@jamsr-ui/utils";

import type { VariantProps } from "@jamsr-ui/utils";

export const test = "";
export const autocompleteVariants = tv({
  slots: {
    root: ["group relative flex w-full flex-col text-sm"],
    popover:
      "z-popover flex flex-col overflow-hidden rounded-2xl bg-surface shadow-md backdrop-blur-3xl focus:outline-none",
    content: "flex flex-col gap-px overflow-y-auto p-2",
    emptyContent: "text-foreground-500",
    item: [
      "relative flex w-full cursor-pointer select-none items-center gap-2 rounded-xl p-2 text-sm",
      "ui-hover:bg-surface-secondary",
      "ui-active:bg-surface-secondary",
      "ui-selected:bg-surface-secondary/50",
      "ui-disabled:cursor-not-allowed ui-disabled:opacity-60",
    ],
  },
  variants: {
    radius: radiusVariant(["popover", "item"]),
  },
  defaultVariants: {
    radius: "md",
  },
});

export type AutocompleteSlots = keyof ReturnType<typeof autocompleteVariants>;
export type AutocompleteVariantProps = VariantProps<
  typeof autocompleteVariants
>;
