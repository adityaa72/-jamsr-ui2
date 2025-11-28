import { allColors, colorVariants, radiusVariant, tv } from "@jamsrui/utils";

import type { VariantProps } from "@jamsrui/utils";

export const chipVariants = tv({
  slots: {
    root: "chip chip__root relative box-border inline-flex min-w-min max-w-fit shrink-0 items-center justify-between whitespace-nowrap rounded-full gap-2",
    dot: "chip__dot size-1.5 rounded-full",
  },
  variants: {
    variant: {
      solid: {
        root: "chip--solid",
      },
      bordered: {
        root: "chip--bordered border",
      },
      flat: {
        root: "chip--flat",
      },
      dot: {
        dot: "chip--dot outline-2",
      },
    },
    size: {
      sm: {
        root: "chip--xs h-5 px-1 text-xs",
      },
      md: {
        root: "chip--sm h-6 px-2 text-xs",
      },
      lg: {
        root: "chip--md h-7 px-3 text-sm",
      },
    },
    color: {
      default: "",
      primary: "",
      secondary: "",
      success: "",
      warning: "",
      danger: "",
    },
    isSquare: {
      true: {
        root: "chip--squared flex aspect-square items-center justify-center",
      },
    },
    isBordered: {
      true: {
        root: "chip--bordered border",
      },
    },
    radius: radiusVariant("root", "chip"),
  },
  compoundVariants: [
    ...(["solid", "bordered", "flat"] as const).flatMap((variant) =>
      allColors.map((color) => ({
        variant,
        color,
        className: {
          root: colorVariants[variant][color],
        },
      }))
    ),
    // dot
    ...allColors.map((color) => ({
      variant: "dot" as const,
      color,
      className: {
        dot: colorVariants["solid"][color],
      },
    })),
    {
      variant: "dot",
      color: "primary",
      className: {
        dot: "outline-primary-border",
      },
    },
    {
      variant: "dot",
      color: "secondary",
      className: {
        dot: "outline-secondary-border",
      },
    },
    {
      variant: "dot",
      color: "success",
      className: {
        dot: "outline-success-border",
      },
    },
    {
      variant: "dot",
      color: "warning",
      className: {
        dot: "outline-warning-border",
      },
    },
    {
      variant: "dot",
      color: "danger",
      className: {
        dot: "outline-danger-border",
      },
    },
    {
      variant: "dot",
      color: "default",
      className: {
        dot: "outline-default-border",
      },
    },
    // bordered
    {
      isBordered: true,
      color: "danger",
      className: { root: "border-danger" },
    },
    {
      isBordered: true,
      color: "primary",
      className: { root: "border-primary" },
    },
    {
      isBordered: true,
      color: "secondary",
      className: { root: "border-secondary" },
    },
    {
      isBordered: true,
      color: "success",
      className: { root: "border-success" },
    },
    {
      isBordered: true,
      color: "warning",
      className: { root: "border-warning" },
    },
    {
      isBordered: true,
      color: "default",
      className: { root: "border-divider" },
    },
  ],
  defaultVariants: {
    color: "default",
    size: "md",
    radius: "full",
    variant: "solid",
  },
});
export type ChipVariantsProps = VariantProps<typeof chipVariants>;
export type ChipSlots = keyof ReturnType<typeof chipVariants>;
