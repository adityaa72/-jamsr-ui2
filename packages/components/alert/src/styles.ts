import { radiusVariant, tv } from "@jamsr-ui/utils";

import type { VariantProps } from "@jamsr-ui/utils";

export const test = "";
export const alertStyles = tv({
  slots: {
    root: "relative flex gap-2 p-4 text-sm [&>svg]:shrink-0",
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
        root: "border border-success-600 text-success-600",
      },
      warning: {
        root: "border border-warning-600 text-warning-600",
      },
      danger: {
        root: "border border-danger-600 text-danger-500",
      },
      info: {
        root: "border border-blue-600 text-blue-500",
      },
      default: {
        root: "border border-divider text-default-500",
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
        root: "bg-danger/10 text-danger-600",
      },
    },
    {
      status: "success",
      variant: "solid",
      className: {
        root: "bg-success/10 text-success-600",
      },
    },
    {
      status: "info",
      variant: "solid",
      className: {
        root: "bg-blue-600/10 text-blue-600",
      },
    },
    {
      status: "warning",
      variant: "solid",
      className: {
        root: "bg-warning/10 text-warning-600",
      },
    },
    {
      status: "default",
      variant: "solid",
      className: {
        root: "bg-default/10 text-default-600",
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
