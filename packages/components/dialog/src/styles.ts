import { radiusVariant, tv } from "@jamsrui/utils";

import type { VariantProps } from "@jamsrui/utils";

export const test = "";
export const dialogVariants = tv({
  slots: {
    backdrop: "z-backdrop grid place-items-center",
    header: "p-4 text-base font-bold",
    body: "w-full p-4",
    popover:
      "z-dialog absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    content:
      "relative  flex max-h-[calc(100dvh-4rem)] w-full flex-col overflow-y-auto bg-background-secondary shadow-lg",
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
        backdrop: "bg-black/50",
      },
      blur: {
        backdrop: "bg-black/30 backdrop-blur-md backdrop-saturate-150",
      },
    },
    isBordered: {
      true: {
        header: "border-b border-stroke-primary",
        footer: "border-t border-stroke-primary",
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
