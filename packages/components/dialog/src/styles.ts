import { radiusVariant, tv } from "@jamsr-ui/utils";

import type { VariantProps } from "@jamsr-ui/utils";

export const test = "";
export const dialogVariants = tv({
  slots: {
    backdrop: "z-backdrop grid place-items-center !overflow-clip",
    header: "p-4 text-base font-bold",
    body: "w-full p-4",
    content:
      "relative z-dialog flex max-h-[calc(100dvh-4rem)] w-full flex-col overflow-y-auto bg-background-secondary shadow-lg",
    footer: "flex w-full items-center justify-end gap-2 p-4",
    closeButton: "absolute right-2 top-2 z-10",
  },
  variants: {
    radius: radiusVariant("content"),
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
        content: "m-0 h-dvh max-w-full !rounded-none bg-background sm:m-0",
      },
    },
    backdrop: {
      transparent: {
        backdrop: "",
      },
      opaque: {
        backdrop: " bg-overlay/50",
      },
      blur: {
        backdrop: "bg-overlay/30 backdrop-blur-md backdrop-saturate-150",
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
        body: "grow overflow-y-auto",
      },
      outside: {},
    },
  },
  defaultVariants: {
    scrollBehavior: "inside",
    isBordered: false,
    size: "lg",
    backdrop: "opaque",
    radius: "md",
  },
});

export type DialogVariants = VariantProps<typeof dialogVariants>;
export type DialogSlots = keyof ReturnType<typeof dialogVariants>;
