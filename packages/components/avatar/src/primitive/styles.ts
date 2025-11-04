import { radiusVariant, tv } from "@jamsrui/utils";

import type { VariantProps } from "@jamsrui/utils";

export const avatarVariants = tv({
  slots: {
    root: "relative shrink-0 overflow-hidden rounded-full bg-surface object-cover text-md font-medium [&>img]:size-full [&>img]:object-cover",
    img: "select-none",
    fallback: "absolute inset-0 flex items-center justify-center",
  },
  variants: {
    size: {
      xs: { root: "size-6" },
      sm: { root: "size-8" },
      md: { root: "size-10" },
      lg: { root: "size-12" },
      xl: { root: "size-16" },
    },
    color: {
      default: { root: "bg-default text-default-foreground ring-default" },
      primary: { root: "bg-primary text-primary-foreground ring-primary" },
      secondary: {
        root: "bg-secondary text-secondary-foreground ring-secondary",
      },
      success: { root: "bg-success text-success-foreground ring-success" },
      warning: { root: "bg-warning text-warning-foreground ring-warning" },
      danger: { root: "bg-danger text-danger-foreground ring-danger" },
    },
    isBordered: {
      true: { root: "ring-2" },
      false: { root: "border-transparent" },
    },
    radius: radiusVariant("root"),
  },
  defaultVariants: {
    bordered: false,
    size: "md",
    color: "default",
    radius: "full",
  },
});

export type AvatarVariants = VariantProps<typeof avatarVariants>;
export type AvatarSlots = keyof ReturnType<typeof avatarVariants>;
