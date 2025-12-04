import { tv, VariantProps } from "@jamsrui/utils";

export const numberFieldVariants = tv({
  slots: {
    root: "number-field number-field__root flex flex-col gap-2 w-full",
    increment:
      "number-field__increment h-full w-12 bg-background-secondary border-l",
    decrement:
      "number-field__decrement h-full w-12 bg-background-secondary border-r",
    input: "number-field__input outline-0 px-2 py-1 grow",
    group: [
      "number-field__group bg-background-secondary flex items-center rounded-md h-9 w-full",
      "overflow-hidden focus-within:outline-2 focus-within:outline-focus",
    ],
  },
  variants: {
    isInvalid: {
      true: {},
    },
  },
});

export type NumberFieldVariants = VariantProps<typeof numberFieldVariants>;
