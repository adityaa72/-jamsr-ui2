import { groupDataFocusVisibleClasses, tv } from "@jamsrui/utils";

import type { VariantProps } from "@jamsrui/utils";

export const radioVariant = tv({
  slots: {
    root: [
      "group relative inline-flex gap-2 cursor-pointer items-center justify-start tap-highlight-transparent",
      "ui-disabled:cursor-not-allowed ui-disabled:opacity-60",
    ],
    control: [
      "relative",
      "inline-flex",
      "items-center",
      "justify-center",
      "shrink-0",
      "overflow-hidden",
      "border-solid",
      "border-2",
      "box-border",
      "border-default",
      "rounded-full",
      "transition-all duration-300",
      "uig-hover:border-default-hover",
      "uig-pressed:scale-95",
      // focus ring
      ...groupDataFocusVisibleClasses,
    ],
    indicator: "absolute rounded-full",
    input: "inset-0 absolute opacity-[0.0001]",
    label: "select-none text-foreground",
    content: "flex grow flex-col",
    description: "text-foreground-secondary",
  },
  variants: {
    color: {
      default: {
        indicator: "bg-default-active text-default-foreground",
        control: "uig-selected:border-default-active",
      },
      primary: {
        indicator: "bg-primary text-primary-foreground",
        control: "uig-selected:border-primary",
      },
      secondary: {
        indicator: "bg-secondary text-secondary-foreground",
        control: "uig-selected:border-secondary",
      },
      success: {
        indicator: "bg-success text-success-foreground",
        control: "uig-selected:border-success",
      },
      warning: {
        indicator: "bg-warning text-warning-foreground",
        control: "uig-selected:border-warning",
      },
      danger: {
        indicator: "bg-danger text-danger-foreground",
        control: "uig-selected:border-danger",
      },
    },
    size: {
      sm: {
        control: "size-4",
        indicator: "size-1.5",
        labelWrapper: "ml-1",
        label: "text-sm",
        description: "text-xs",
      },
      md: {
        control: "size-5",
        indicator: "size-2",
        labelWrapper: "ml-2",
        label: "text-base",
        description: "text-sm",
      },
      lg: {
        control: "size-6",
        indicator: "size-2.5",
        labelWrapper: "ml-2",
        label: "text-lg",
        description: "text-base",
      },
    },
  },
  defaultVariants: {
    color: "default",
    size: "md",
  },
});

export const radioGroupVariant = tv({
  slots: {
    root: "relative flex flex-col gap-2",
    label: "text-sm font-normal text-foreground",
    content: "flex flex-col flex-wrap gap-2",
    description: "text-xs text-foreground-secondary",
    errorMessage: "text-xs text-danger",
  },
  variants: {},
});

export type RadioVariantProps = VariantProps<typeof radioVariant>;
export type RadioSlots = keyof ReturnType<typeof radioVariant>;
export type RadioGroupSlots = keyof ReturnType<typeof radioGroupVariant>;
