import { radiusVariant, tv } from "@jamsr-ui/utils";

import type { VariantProps } from "@jamsr-ui/utils";

export const test = "";
export const alertStyles = tv({
  slots: {
    root: "relative flex gap-2 px-4 py-1.5 text-sm",
    icon: "shrink-0 py-2",
    title: "",
    description: "",
    content: "flex flex-col grow py-2 gap-1",
  },
  variants: {
    variant: {
      outlined: "",
      solid: "",
    },
    status: {
      success: {
        root: "border border-success-stroke text-success",
      },
      warning: {
        root: "border border-warning-stroke text-warning",
      },
      danger: {
        root: "border border-danger-stroke text-danger",
      },
      info: {
        root: "border border-primary-stroke text-primary",
      },
      default: {
        root: "border border-default-stroke text-default",
      },
    },
    radius: radiusVariant("root"),
  },
  compoundVariants: [
    // solid
    {
      status: "danger",
      variant: "solid",
      className: {
        root: "bg-danger-fill text-danger-foreground",
      },
    },
    {
      status: "success",
      variant: "solid",
      className: {
        root: "bg-success-fill text-success-foreground",
      },
    },
    {
      status: "info",
      variant: "solid",
      className: {
        root: "bg-primary-fill text-primary-foreground",
      },
    },
    {
      status: "warning",
      variant: "solid",
      className: {
        root: "bg-warning-fill text-warning-foreground",
      },
    },
    {
      status: "default",
      variant: "solid",
      className: {
        root: "bg-default-fill text-default-foreground",
      },
    },
  ],
  defaultVariants: {
    status: "default",
    variant: "outlined",
    radius: "md",
  },
});

export type AlertVariants = VariantProps<typeof alertStyles>;
export type AlertSlots = keyof ReturnType<typeof alertStyles>;
