import { radiusVariant, tv } from "@jamsrui/utils";

import type { VariantProps } from "@jamsrui/utils";

export const alertStyles = tv({
  slots: {
    root: "alert__root relative flex gap-2 px-4 py-1.5 text-sm ring-1 ring-inset",
    icon: "alert__icon shrink-0 py-2",
    title: "alert__title",
    description: "alert__description",
    content: "alert__content flex flex-col grow py-2 gap-1",
  },
  variants: {
    variant: {
      bordered: {
        root: "alert--bordered border",
      },
      solid: {
        root: "alert--solid font-medium",
      },
      flat: {
        root: "alert--flat",
      },
    },
    status: {
      success: {
        root: "alert--success ring-success-border",
      },
      warning: {
        root: "alert--warning ring-warning-border",
      },
      danger: {
        root: "alert--danger ring-danger-border",
      },
      info: {
        root: "alert--info ring-primary-border",
      },
      default: {
        root: "alert--default ring-default-border",
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
        root: "bg-danger text-danger-foreground",
      },
    },
    {
      status: "success",
      variant: "solid",
      className: {
        root: "bg-success text-success-foreground",
      },
    },
    {
      status: "info",
      variant: "solid",
      className: {
        root: "bg-primary text-primary-foreground",
      },
    },
    {
      status: "warning",
      variant: "solid",
      className: {
        root: "bg-warning text-warning-foreground",
      },
    },
    {
      status: "default",
      variant: "solid",
      className: {
        root: "bg-default text-default-foreground",
      },
    },
    // flat
    {
      status: "success",
      variant: "flat",
      className: {
        root: "bg-success-flat text-success",
      },
    },
    {
      status: "info",
      variant: "flat",
      className: {
        root: "bg-primary-flat text-primary",
      },
    },
    {
      status: "warning",
      variant: "flat",
      className: {
        root: "bg-warning-flat text-warning",
      },
    },
    {
      status: "danger",
      variant: "flat",
      className: {
        root: "bg-danger-flat text-danger",
      },
    },
    {
      status: "default",
      variant: "flat",
      className: {
        root: "bg-default-flat text-foreground",
      },
    },
    // bordered
    {
      status: "danger",
      variant: "bordered",
      className: {
        root: "border-danger-stroke text-danger",
      },
    },
    {
      status: "success",
      variant: "bordered",
      className: {
        root: "border-success-stroke text-success",
      },
    },
    {
      status: "info",
      variant: "bordered",
      className: {
        root: "border-primary-stroke text-primary",
      },
    },
    {
      status: "warning",
      variant: "bordered",
      className: {
        root: "border-warning-stroke text-warning",
      },
    },
    {
      status: "default",
      variant: "bordered",
      className: {
        root: "border-default-stroke text-foreground",
      },
    },
  ],
  defaultVariants: {
    status: "success",
    variant: "flat",
    radius: "md",
  },
});

export type AlertVariants = VariantProps<typeof alertStyles>;
export type AlertSlots = keyof ReturnType<typeof alertStyles>;
