import { radiusVariant, tv } from "@jamsrui/utils";

import type { VariantProps } from "@jamsrui/utils";

export const test = "";
export const menuVariants = tv({
  slots: {
    arrow: "fill-background-secondary",
    backdrop: "z-backdrop",
    root: "min-w-[150px] z-popover",
    content:
      "relative z-popover box-border inline-flex  w-full flex-col justify-center bg-background-secondary p-1 text-sm shadow-md outline-none",
    menuItem: [
      "relative box-border flex size-full cursor-pointer select-none items-center gap-2 px-2 py-1.5 text-left outline-none ui-disabled:cursor-not-allowed ui-disabled:opacity-60",
      "ui-active:bg-background-tertiary",
    ],
    menuItemInner: "grow",
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
        menuItem: "ui-hover:bg-background-tertiary ui-hover:text-foreground",
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
    backdrop: "opaque",
    radius: "md",
    color: "default",
  },
});

export type MenuVariantProps = VariantProps<typeof menuVariants>;
export type MenuSlots = keyof ReturnType<typeof menuVariants>;
