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
    {
      variant: "solid",
      className: {
        root: "text-foreground-primary",
      },
    },
    // solid
    {
      status: "danger",
      variant: "solid",
      className: {
        root: "bg-danger-fill",
      },
    },
    {
      status: "success",
      variant: "solid",
      className: {
        root: "bg-success-fill",
      },
    },
    {
      status: "info",
      variant: "solid",
      className: {
        root: "bg-primary-fill",
      },
    },
    {
      status: "warning",
      variant: "solid",
      className: {
        root: "bg-warning-fill",
      },
    },
    {
      status: "default",
      variant: "solid",
      className: {
        root: "bg-default-fill",
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
