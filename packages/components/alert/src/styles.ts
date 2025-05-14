import { tv } from "@jamsr-ui/utils";

import type { VariantProps } from "@jamsr-ui/utils";

export const test = "";
export const alertVariants = tv({
  slots: {
    root: "",
    title: "",
    description: "",
    content: "",
  },
  variants: {},
  defaultVariants: {},
});

export type AlertVariants = VariantProps<typeof alertVariants>;
export type AlertSlots = keyof ReturnType<typeof alertVariants>;
