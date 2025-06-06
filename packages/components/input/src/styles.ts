import { radiusVariant, tv } from "@jamsrui/utils";

import type { VariantProps } from "@jamsrui/utils";

export const test = "";
export const inputVariants = tv({
  slots: {
    root: "flex flex-col gap-1 group",
    label: "shrink-0 text-sm font-medium text-foreground",
    helperText: "text-xs text-foreground-tertiary",
    errorMessage: "text-xs text-danger",
    input: [
      "grow bg-transparent font-normal",
      "placeholder:text-foreground-secondary read-only:cursor-not-allowed focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
    ],
    wrapper: "",
    content: "grow flex",
    contentWrapper: [
      "border-2 flex items-center border-stroke-primary",
      "uig-disabled:cursor-not-allowed uig-disabled:opacity-60",
      "not-uig-invalid:uig-focus:border-primary uig-focus:ring-primary",
      "not-uig-invalid:uig-hover:border-stroke-secondary",
    ],
    startContent: "pl-2 text-sm text-foreground-secondary",
    endContent: "pr-2 text-sm text-foreground-secondary",
    clearButton: "",
  },
  variants: {
    fullWidth: {
      true: {
        root: "w-full",
      },
    },
    size: {
      sm: {
        input: "px-3 py-1.5 text-sm placeholder:text-sm",
      },
      md: {
        input: "px-3 py-2 text-sm placeholder:text-sm",
      },
      lg: {
        input: "p-3 text-base placeholder:text-base",
      },
    },
    isInvalid: {
      true: {
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
