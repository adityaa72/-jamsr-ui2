import { textVariants } from "@jamsr-ui/text";
import { focusVisibleClasses, tv } from "@jamsr-ui/utils";

import type { VariantProps } from "@jamsr-ui/utils";

export const test = "";
export const linkVariants = tv({
  extend: textVariants,
  base: [
    "cursor-pointer select-none text-foreground-link hover:text-foreground-link/80",
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
