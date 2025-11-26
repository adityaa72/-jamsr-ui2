import { radiusVariant, tv } from "@jamsrui/utils";

import type { VariantProps } from "@jamsrui/utils";

export const inputVariants = tv({
  slots: {
    root: [
      "input-group flex group",
      "border flex items-center border-divider",
      "focus-within:border-focus",
      "uig-disabled:cursor-not-allowed uig-disabled:opacity-60",
      "not-uig-invalid:uig-focus:border-primary uig-focus:ring-primary",
      "not-uig-invalid:uig-hover:border-divider-dark",
    ],
    input: [
      "input__control grow bg-transparent font-normal",
      "placeholder:text-foreground-secondary read-only:cursor-not-allowed focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
    ],
    prefix: "input__prefix pl-3 text-sm text-foreground-secondary select-none",
    suffix: "input__suffix pr-3 text-sm text-foreground-secondary select-none",
  },
  variants: {
    fullWidth: {
      true: {
        root: "w-full",
      },
    },
    size: {
      sm: {
        root: "input--sm",
        input: "px-3 py-1.5 text-sm placeholder:text-sm",
      },
      md: {
        root: "input--md",
        input: "px-3 py-2 text-sm placeholder:text-sm",
      },
      lg: {
        root: "input--lg",
        input: "px-3 py-2 text-base placeholder:text-base",
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
    fullWidth: false,
    isInvalid: false,
    radius: "md",
    size: "md",
  },
});

export type InputVariantProps = VariantProps<typeof inputVariants>;
export type InputSlots = keyof ReturnType<typeof inputVariants>;
