import { radiusVariant, tv } from "@jamsrui/utils";

import type { VariantProps } from "@jamsrui/utils";

export const inputVariants = tv({
  slots: {
    root: "input__root flex flex-col gap-1.5 group",
    label: "input__label",
    description: "input__description",
    errorMessage: "input__error_message",
    input: [
      "input__control grow bg-transparent font-normal",
      "placeholder:text-foreground-secondary read-only:cursor-not-allowed focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
    ],
    wrapper: "input__wrapper",
    content: "input__content grow flex",
    contentWrapper: [
      "input__content_wrapper border flex items-center border-divider",
      "uig-disabled:cursor-not-allowed uig-disabled:opacity-60",
      "not-uig-invalid:uig-focus:border-primary uig-focus:ring-primary",
      "not-uig-invalid:uig-hover:border-divider-dark",
    ],
    startContent: "input__start_content pl-2 text-sm text-foreground-secondary",
    endContent: "input__end_content pr-2 text-sm text-foreground-secondary",
    clearButton: "input__clear_button",
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
        contentWrapper: "border-danger",
        label: "text-danger",
      },
    },
    radius: radiusVariant("contentWrapper"),
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
