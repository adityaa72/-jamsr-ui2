import { tv } from "@jamsr-ui/utils";

import type { VariantProps } from "@jamsr-ui/utils";

export const test = "";
export const copyToClipboardVariants = tv({
  slots: {
    root: "relative z-1 inline-flex cursor-copy items-center gap-0.5 hover:opacity-80",
    button: "cursor-copy aria-hidden:hidden",
    icon: "size-4",
  },
});

export type CopyToClipboardVariantProps = VariantProps<
  typeof copyToClipboardVariants
>;
export type CopyToClipboardSlots = keyof ReturnType<
  typeof copyToClipboardVariants
>;
