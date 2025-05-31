import { tv } from "@jamsr-ui/utils";

import type { VariantProps } from "@jamsr-ui/utils";

export const test = "";
export const drawerVariants = tv({
  slots: {
    backdrop: "z-backdrop !overflow-x-hidden",
    content:
      "absolute z-dialog flex w-full flex-col overflow-y-auto bg-background-secondary shadow-sm",
    header: "p-4",
    footer: "flex justify-end gap-2 p-4",
    body: "grow p-4",
    closeButton: "absolute right-2 top-2",
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
  },
});

export type DrawerVariants = VariantProps<typeof drawerVariants>;
export type DrawerSlots = keyof ReturnType<typeof drawerVariants>;
