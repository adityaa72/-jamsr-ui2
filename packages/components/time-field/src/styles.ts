import { tv } from "@jamsrui/utils";

import type { VariantProps } from "@jamsrui/utils";

export const timeFieldVariants = tv({
  slots: {
    root: "flex gap-1 items-center",
    input:
      "focus:bg-default px-0.5 caret-transparent outline-none rounded text-sm",
    separator: "opacity-50",
  },
  variants: {},
  defaultVariants: {},
});

export type TimeFieldVariants = VariantProps<typeof timeFieldVariants>;
export type TimeFieldSlots = keyof ReturnType<typeof timeFieldVariants>;
