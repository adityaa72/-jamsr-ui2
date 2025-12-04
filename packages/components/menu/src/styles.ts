"use client";

import { radiusVariant, tv } from "@jamsrui/utils";

import type { VariantProps } from "@jamsrui/utils";

export const menuVariants = tv({
  slots: {
    arrow: "fill-background-secondary",
    backdrop: "z-backdrop",
    container: "min-w-[150px] z-popover outline-none outline-0",
    content: [
      "relative z-popover box-border inline-flex w-full flex-col justify-center bg-surface p-1 text-sm shadow-md outline-none",
      "shadow-lg border-[0.5px] border-divider-dark origin-(--transform-origin)",
    ],
    menuItem: [
      "relative box-border flex size-full select-none items-center gap-2 px-2 py-1.5 text-left outline-none data-disabled:cursor-not-allowed data-disabled:opacity-60",
      "data-active:bg-surface-secondary",
    ],
    menuGroup: [""],
    menuGroupLabel: "pl-2 text-foreground-secondary py-1",
    submenuIndicator: "ml-auto size-4",
    menuItemIndicator: "size-4",
  },
  variants: {
    radius: radiusVariant(["content", "menuItem"]),
    backdrop: {
      transparent: {
        backdrop: "",
      },
      opaque: {
        backdrop: "bg-black/50",
      },
      blur: {
        backdrop: "bg-black/30 backdrop-blur-md backdrop-saturate-150",
      },
    },
    color: {
      default: {
        menuItem: "ui-hover:bg-surface-secondary ui-hover:text-foreground",
      },
      primary: {
        menuItem: "ui-hover:bg-primary ui-hover:text-primary-foreground",
      },
      secondary: {
        menuItem: "ui-hover:bg-secondary ui-hover:text-secondary-foreground",
      },
      success: {
        menuItem: "ui-hover:bg-success ui-hover:text-success-foreground",
      },
      warning: {
        menuItem: "ui-hover:bg-warning ui-hover:text-warning-foreground",
      },
      danger: {
        menuItem: "ui-hover:bg-danger ui-hover:text-danger-foreground",
      },
    },
  },
  defaultVariants: {
    backdrop: "transparent",
    radius: "md",
    color: "default",
  },
});

export type MenuVariantProps = VariantProps<typeof menuVariants>;
export type MenuSlots = keyof ReturnType<typeof menuVariants>;
