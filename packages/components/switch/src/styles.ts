import { groupDataFocusVisibleClasses, tv } from "@jamsrui/utils";

import type { VariantProps } from "@jamsrui/utils";

export const switchVariants = tv({
  slots: {
    root: "group flex gap-2",
    track: [
      ...groupDataFocusVisibleClasses,
      "flex relative cursor-default shrink-0 items-center rounded-full bg-surface-secondary p-1",
      "uig-disabled:cursor-not-allowed uig-disabled:opacity-60",
      "ui-interactive:hover:opacity-95",
      "justify-start uig-checked:justify-end",
    ],
    thumb:
      "size-8 rounded-full bg-white shadow-md flex justify-center items-center",
    content: "grid grow gap-1",
    input:
      "opacity-[0.0001] absolute inset-0 cursor-default disabled:cursor-not-allowed z-1",
  },
  variants: {
    color: {
      default: {
        track: "uig-checked:bg-default",
      },
      primary: {
        track: "uig-checked:bg-primary",
      },
      secondary: {
        track: "uig-checked:bg-secondary",
      },
      success: {
        track: "uig-checked:bg-success",
      },
      warning: {
        track: "uig-checked:bg-warning",
      },
      danger: {
        track: "uig-checked:bg-danger",
      },
    },
    size: {
      xs: {
        track: "h-4 w-7 px-0.5",
        thumb: "size-3 uig-pressed:w-3.5",
      },
      sm: {
        track: "h-5 w-9",
        thumb: "size-3.5 uig-pressed:w-4",
      },
      md: {
        track: "h-6 w-10",
        thumb: "size-4 uig-pressed:w-5",
      },
      lg: {
        track: "h-7 w-12",
        thumb: "size-5 uig-pressed:w-6",
      },
    },
    isInvalid: {
      true: {},
    },
  },
  defaultVariants: {
    size: "md",
    color: "success",
  },
});

export type SwitchVariants = VariantProps<typeof switchVariants>;
export type SwitchSlots = keyof ReturnType<typeof switchVariants>;
