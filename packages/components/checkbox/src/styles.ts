import {
  groupDataFocusVisibleClasses,
  radiusVariant,
  tv,
} from "@jamsrui/utils";

import type { VariantProps } from "@jamsrui/utils";

export const checkboxVariants = tv({
  slots: {
    root: [
      "checkbox group flex gap-2 items-start",
      "data-disabled:opacity-60 data-disabled:cursor-not-allowed",
    ],
    control: [
      "checkbox__control",
      ...groupDataFocusVisibleClasses,
      "shrink-0 border-default uig-hover:border-default-hover",
      "relative appearance-none border uig-checked:border-primary uig-checked:bg-primary",
      "uig-disabled:cursor-not-allowed uig-pressed:scale-90 transition-all duration-300",
    ],
    input:
      "checkbox__input absolute opacity-[0.0001] cursor-default disabled:cursor-not-allowed inset-0 z-1",
    content: "checkbox__content flex flex-col justify-center gap-1",
  },
  variants: {
    size: {
      sm: {
        root: "checkbox--sm",
        control: "size-4",
      },
      md: {
        root: "checkbox--md",
        control: "size-4.5",
      },
      lg: {
        root: "checkbox--lg",
        control: "size-5",
      },
    },
    radius: radiusVariant("control"),
  },
  defaultVariants: {
    radius: "md",
    size: "md",
  },
});

export type CheckboxVariantProps = VariantProps<typeof checkboxVariants>;
export type CheckboxSlots = keyof ReturnType<typeof checkboxVariants>;
