import { radiusVariant, tv } from "@jamsr-ui/utils";

import type { VariantProps } from "@jamsr-ui/utils";

export const test = "";
export const alertStyles = tv({
  slots: {
    root: "flex bg-blue-500 gap-2 items-start py-2",
    title: "",
    description: "",
    content: "flex flex-col",
  },
  variants: {
    variant: {
      outlined: "",
      solid: "",
    },
    status: {
      success: {
        root: "",
      },
      warning: {
        root: "",
      },
      danger: {
        root: "",
      },
      info: {
        root: "",
      },
      default: {
        root: "",
      },
    },
    radius: radiusVariant("root"),
  },
  defaultVariants: {
    status: "default",
    variant: "outlined",
    radius: "md",
  },
});

export type AlertVariants = VariantProps<typeof alertStyles>;
export type AlertSlots = keyof ReturnType<typeof alertStyles>;
