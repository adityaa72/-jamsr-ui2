import { radiusVariant, tv } from "@jamsrui/utils";

import type { VariantProps } from "@jamsrui/utils";

export const dialogVariants = tv({
  slots: {
    backdrop: "z-backdrop grid place-items-center",
    header: "p-4 text-base font-bold",
    body: "w-full p-4",
    container: "z-dialog max-w-md w-full",
    content:
      "relative flex size-full flex-col overflow-y-auto bg-surface shadow-lg",
    footer: "flex w-full items-center justify-end gap-2 p-4",
    closeButton: "absolute right-2 top-2 z-10",
  },
  variants: {
    radius: radiusVariant("content"),
    fullWidth: {
      true: {
        container: "m-0 h-dvh max-w-full rounded-none! sm:m-0",
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
        header: "border-b border-divider",
        footer: "border-t border-divider",
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
    backdrop: "opaque",
    radius: "md",
  },
});

export type DialogVariants = VariantProps<typeof dialogVariants>;
export type DialogSlots = keyof ReturnType<typeof dialogVariants>;
