import { radiusVariant, tv } from "@jamsrui/utils";

import type { VariantProps } from "@jamsrui/utils";

export const alertDialogVariant = tv({
  slots: {
    root: "alert-dialog alert-dialog__root",
    header: "alert-dialog__header p-4 text-base font-bold",
    container: "alert-dialog__container z-dialog max-w-md w-full",
    content:
      "alert-dialog__content relative flex size-full flex-col overflow-y-auto bg-surface shadow-lg",
    footer:
      "alert-dialog__footer flex w-full items-center justify-end gap-2 p-4",
    body: "alert-dialog__body w-full p-4",
    trigger: "alert-dialog__trigger",
    title: "alert-dialog__title text-foreground",
    description: "alert-dialog__description text-foreground-secondary",
    backdrop: "alert-dialog__backdrop z-backdrop grid place-items-center",
  },
  variants: {
    radius: radiusVariant("content"),
    scrollBehavior: {
      inside: {
        body: "grow overflow-y-auto",
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
  },
  defaultVariants: {
    scrollBehavior: "inside",
    backdrop: "opaque",
    radius: "md",
  },
});

export type AlertDialogVariants = VariantProps<typeof alertDialogVariant>;
export type AlertDialogSlots = keyof ReturnType<typeof alertDialogVariant>;
