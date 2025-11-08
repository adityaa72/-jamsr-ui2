import { textVariants } from "@jamsrui/text";
import { focusVisibleClasses, tv } from "@jamsrui/utils";

import type { VariantProps } from "@jamsrui/utils";


export const linkVariants = tv({
  extend: textVariants,
  base: [
    "cursor-default text-foreground-link hover:text-foreground-link/80",
    focusVisibleClasses,
  ],
  variants: {
    underline: {
      hover: "hover:underline hover:underline-offset-4",
      never: "",
      always:
        "underline underline-offset-4 transition-all hover:underline-offset-2",
    },
  },
  defaultVariants: {
    underline: "hover",
  },
});

export type LinkVariants = VariantProps<typeof linkVariants>;
