import { focusVisibleClasses, radiusBaseVariant, tv } from "@jamsrui/utils";

import type { VariantProps } from "@jamsrui/utils";

export const inputVariants = tv({
  base: [
    "input border border-divider focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-foreground-secondary bg-transparent font-normal",
    "focus:border-focus",
  ],
  variants: {
    size: {
      sm: "input--sm px-3 py-1.5 text-sm placeholder:text-sm",
      md: "input--md px-3 py-2 text-sm placeholder:text-sm",
      lg: "input--lg px-3 py-2 text-base placeholder:text-base",
    },
    radius: radiusBaseVariant,
  },
  defaultVariants: {
    radius: "md",
    size: "md",
  },
});

export const inputGroupVariants = tv({
  base: "input-group__input w-full px-3 py-2 text-sm placeholder:text-sm focus:outline-none",
});

export type InputVariantProps = VariantProps<typeof inputVariants>;
