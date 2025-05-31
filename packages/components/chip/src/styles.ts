import { allColors, colorVariants, radiusVariant, tv } from "@jamsr-ui/utils";

import type { VariantProps } from "@jamsr-ui/utils";

export const test = "";
export const chipVariants = tv({
  slots: {
    root: "relative box-border inline-flex min-w-min max-w-fit shrink-0 items-center justify-between whitespace-nowrap rounded-full",
    content: "flex flex-1 items-center gap-2 text-inherit",
    closeButton:
      "z-10 cursor-pointer select-none appearance-none opacity-70 outline-none transition-opacity tap-highlight-transparent hover:opacity-100 active:opacity-disabled",
    dot: "size-1.5 rounded-full",
  },
  variants: {
    variant: {
      solid: {},
      bordered: {
        root: "border-2",
      },
      flat: {},
      dot: {
        dot: "outline-2",
      },
    },
    size: {
      xs: {
        root: "h-5 px-0.5 text-xs",
        content: "px-0.5",
      },
      sm: {
        root: "h-6 px-1 text-xs",
        content: "px-1",
      },
      md: {
        root: "h-7 px-1 text-sm",
        content: "px-1",
      },
      lg: {
        root: "h-8 px-2 text-base",
        content: "px-2",
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
        root: "flex aspect-square items-center justify-center",
        content: "flex-none",
      },
    },
    isBordered: {
      true: {
        root: "border",
      },
    },
    radius: radiusVariant("root"),
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
        dot: "outline-primary-stroke",
      },
    },
    {
      variant: "dot",
      color: "secondary",
      className: {
        dot: "outline-secondary-stroke",
      },
    },
    {
      variant: "dot",
      color: "success",
      className: {
        dot: "outline-success-stroke",
      },
    },
    {
      variant: "dot",
      color: "warning",
      className: {
        dot: "outline-warning-stroke",
      },
    },
    {
      variant: "dot",
      color: "danger",
      className: {
        dot: "outline-danger-stroke",
      },
    },
    {
      variant: "dot",
      color: "default",
      className: {
        dot: "outline-default-stroke",
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
