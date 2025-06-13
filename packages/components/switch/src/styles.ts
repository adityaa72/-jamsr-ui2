import { focusVisibleClasses, tv } from "@jamsrui/utils";

import type { VariantProps } from "@jamsrui/utils";

export const test = "";
export const switchVariants = tv({
  slots: {
    root: "group flex flex-col gap-2",
    track: [
      ...focusVisibleClasses,
      "flex cursor-pointer shrink-0 items-center rounded-full bg-background-tertiary p-1",
      "uig-disabled:cursor-not-allowed uig-disabled:opacity-60",
      "cursor-default ui-interactive:cursor-pointer ui-interactive:hover:opacity-95",
      "justify-start uig-checked:justify-end",
    ],
    thumb: "size-8 rounded-full bg-white shadow-md",
    label: "text-sm uig-interactive:cursor-pointer",
    description: "text-xs text-foreground-500",
    content: "grid grow gap-1",
    wrapper: "flex items-center justify-between gap-2",
    errorMessage: "text-danger text-xs",
  },
  variants: {
    isInvalid: {
      true: {},
    },
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
        thumb: "size-3",
      },
      sm: {
        track: "h-6 w-10",
        thumb: "size-4",
      },
      md: {
        track: "mr-2 h-7 w-12",
        thumb: "size-5",
      },
      lg: {
        track: "mr-2 h-8 w-14",
        thumb: "size-6",
      },
    },
    labelPlacement: {
      start: {
        wrapper: "flex-row",
      },
      end: {
        wrapper: "flex-row-reverse",
      },
      top: {
        wrapper: "flex-col",
      },
      bottom: {
        wrapper: "flex-col-reverse",
      },
    },
  },
  defaultVariants: {
    size: "md",
    color: "success",
    labelPlacement: "start",
  },
});

export type SwitchVariants = VariantProps<typeof switchVariants>;
export type SwitchSlots = keyof ReturnType<typeof switchVariants>;
