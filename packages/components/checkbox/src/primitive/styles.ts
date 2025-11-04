import {
  groupDataFocusVisibleClasses,
  radiusVariant,
  tv,
} from "@jamsrui/utils";

import type { VariantProps } from "@jamsrui/utils";


export const checkboxVariants = tv({
  slots: {
    root: [
      "group flex flex-col gap-2",
      "ui-disabled:opacity-60",
      "ui-disabled:cursor-not-allowed",
    ],
    wrapper: "flex gap-2",
    label: [
      "shrink-0 text-sm font-normal leading-none text-foreground uig-interactive:cursor-pointer uig-disabled:cursor-not-allowed",
      "select-none",
    ],
    trigger: [
      ...groupDataFocusVisibleClasses,
      "border-default uig-hover:border-default-hover",
      "relative size-5 appearance-none border uig-checked:border-primary uig-checked:bg-primary uig-interactive:cursor-pointer",
      "uig-disabled:cursor-not-allowed uig-pressed:scale-90 transition-all duration-300",
    ],
    input:
      "absolute opacity-[0.0001] cursor-pointer disabled:cursor-not-allowed inset-0 z-1",
    description: "text-xs text-foreground-secondary",
    content: "flex flex-col justify-center gap-1",
    errorMessage: "",
  },
  variants: {
    size: {
      sm: {
        trigger: "size-4",
      },
      md: {
        trigger: "size-4.5",
      },
      lg: {
        trigger: "size-5.5",
      },
    },
    radius: radiusVariant("trigger"),
  },
  defaultVariants: {
    radius: "md",
    size: "md",
  },
});

export type CheckboxVariantProps = VariantProps<typeof checkboxVariants>;
export type CheckboxSlots = keyof ReturnType<typeof checkboxVariants>;
