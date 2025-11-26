import { radiusVariant, tv } from "@jamsrui/utils";

import type { VariantProps } from "@jamsrui/utils";

export const inputGroupVariants = tv({
  slots: {
    root: [
      "input-group flex items-center group overflow-hidden",
      "uig-disabled:cursor-not-allowed uig-disabled:opacity-60",
      "not-uig-invalid:uig-focus:border-primary uig-focus:ring-primary",
      "not-uig-invalid:uig-hover:border-divider-dark",
    ],
    prefix: "input__prefix pl-3 text-sm text-foreground-secondary select-none",
    suffix: "input__suffix pr-3 text-sm text-foreground-secondary select-none",
  },
  variants: {
    variant: {
      bordered: {
        root: "border border-divider focus-within:border-focus",
      },
      solid: {
        root: "bg-surface hover:bg-surface/90",
      },
    },
    isInvalid: {
      true: {
        root: "input--invalid",
        input: "border-danger",
      },
    },
    radius: radiusVariant("root"),
  },
  defaultVariants: {
    isInvalid: false,
    radius: "md",
    variant: "bordered",
  },
});

export type InputGroupVariantProps = VariantProps<typeof inputGroupVariants>;
export type InputGroupSlots = keyof ReturnType<typeof inputGroupVariants>;
