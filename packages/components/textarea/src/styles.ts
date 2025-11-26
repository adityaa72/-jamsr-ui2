import { radiusBaseVariant, tv } from "@jamsrui/utils";

import type { VariantProps } from "@jamsrui/utils";

export const textareaVariants = tv({
  base: [
    "textarea focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-foreground-secondary bg-transparent font-normal",
  ],
  variants: {
    variant: {
      bordered:
        "border border-divider hover:border-divider-light focus:border-focus",
      solid: "bg-surface hover:bg-surface/90",
    },
    size: {
      sm: "textarea--sm px-3 py-1.5 text-sm placeholder:text-sm",
      md: "textarea--md px-3 py-2 text-sm placeholder:text-sm",
      lg: "textarea--lg px-3 py-2 text-base placeholder:text-base",
    },
    radius: radiusBaseVariant,
    isInvalid: {
      true: "border-danger!",
    },
  },
  defaultVariants: {
    radius: "md",
    size: "md",
    variant: "bordered",
  },
});

export const textareaGroupVariants = tv({
  base: "textarea-group__textarea w-full px-3 py-2 text-sm placeholder:text-sm focus:outline-none",
  variants: {
    variant: {
      bordered: "border border-divider focus:border-focus",
      solid: "bg-surface hover:bg-surface/90",
    },
  },
});

export type TextareaVariantProps = VariantProps<typeof textareaVariants>;
