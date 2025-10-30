import { radiusVariant, tv } from "@jamsrui/utils";

import type { VariantProps } from "@jamsrui/utils";


export const drawerVariants = tv({
  slots: {
    backdrop: "z-backdrop !overflow-hidden",
    popover: "z-dialog",
    content:
      "absolute flex w-full flex-col overflow-y-auto bg-surface shadow-sm",
    header: "p-4",
    footer: "flex justify-end gap-2 p-4",
    body: "grow p-4",
    closeButton: "absolute right-4 top-4",
  },
  variants: {
    anchor: {
      left: {
        content: "left-0 top-0 h-dvh",
      },
      right: {
        content: "right-0 top-0 h-dvh",
      },
      top: {
        content: "left-0 top-0",
      },
      bottom: {
        content: "bottom-0 left-0",
      },
    },
    size: {
      xs: {
        content: "max-w-xs",
      },
      sm: {
        content: "max-w-sm",
      },
      md: {
        content: "max-w-md",
      },
      lg: {
        content: "max-w-lg",
      },
      xl: {
        content: "max-w-xl",
      },
      "2xl": {
        content: "max-w-2xl",
      },
      "3xl": {
        content: "max-w-3xl",
      },
      "4xl": {
        content: "max-w-4xl",
      },
      "5xl": {
        content: "max-w-5xl",
      },
      full: {
        content: "m-0 h-dvh max-w-full !rounded-none sm:m-0",
      },
    },
    isBordered: {
      true: {
        header: "border-b border-divider",
        footer: "border-t border-storke-primary",
      },
    },
    scrollBehavior: {
      inside: {
        body: "overflow-y-auto",
      },
      outside: {},
    },
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
    radius: radiusVariant("content"),
  },
  compoundVariants: [
    {
      anchor: ["top", "bottom"],
      className: {
        content: "w-full !max-w-full",
      },
    },
  ],
  defaultVariants: {
    scrollBehavior: "inside",
    size: "lg",
    isBordered: false,
    backdrop: "opaque",
    anchor: "right",
    radius: "none",
  },
});

export type DrawerVariants = VariantProps<typeof drawerVariants>;
export type DrawerSlots = keyof ReturnType<typeof drawerVariants>;
