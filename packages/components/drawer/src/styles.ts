import { tv } from "@jamsr-ui/utils";

import type { VariantProps } from "@jamsr-ui/utils";

export const test = "";
export const drawerVariants = tv({
  slots: {
    backdrop: "z-backdrop !overflow-x-hidden",
    root: "absolute z-dialog flex w-full flex-col overflow-y-auto bg-content1 shadow-sm",
    header: "p-4",
    footer: "flex justify-end gap-2 p-4",
    body: "grow p-4",
    content: "grow p-4",
    closeButton: "absolute right-2 top-2",
  },
  variants: {
    anchor: {
      left: {
        root: "left-0 top-0 h-dvh",
      },
      right: {
        root: "right-0 top-0 h-dvh",
      },
      top: {
        root: "left-0 top-0",
      },
      bottom: {
        root: "bottom-0 left-0",
      },
    },
    size: {
      xs: {
        root: "max-w-xs",
      },
      sm: {
        root: "max-w-sm",
      },
      md: {
        root: "max-w-md",
      },
      lg: {
        root: "max-w-lg",
      },
      xl: {
        root: "max-w-xl",
      },
      "2xl": {
        root: "max-w-2xl",
      },
      "3xl": {
        root: "max-w-3xl",
      },
      "4xl": {
        root: "max-w-4xl",
      },
      "5xl": {
        root: "max-w-5xl",
      },
      full: {
        root: "m-0 h-dvh max-w-full !rounded-none sm:m-0",
      },
    },
    isBordered: {
      true: {
        header: "border-b border-divider-light",
        footer: "border-t border-divider-light",
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
        backdrop: "bg-overlay/50",
      },
      blur: {
        backdrop: "bg-overlay/30 backdrop-blur-md backdrop-saturate-150",
      },
    },
  },
  compoundVariants: [
    {
      anchor: ["top", "bottom"],
      className: {
        root: "w-full !max-w-full",
      },
    },
  ],
  defaultVariants: {
    scrollBehavior: "inside",
    size: "lg",
    isBordered: false,
    backdrop: "opaque",
    anchor: "right",
  },
});

export type DrawerVariants = VariantProps<typeof drawerVariants>;
export type DrawerSlots = keyof ReturnType<typeof drawerVariants>;
