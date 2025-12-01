import {
  colorVariants,
  dataFocusVisibleClasses,
  focusVisibleClasses,
  tv,
} from "@jamsrui/utils";

import type { VariantProps } from "@jamsrui/utils";

export const tabsVariant = tv({
  slots: {
    root: "",
    list: [
      "inline-flex",
      "p-1",
      "h-fit",
      "gap-2",
      "items-center",
      "flex-nowrap",
      "overflow-x-auto",
      "scrollbar-hide",
      "max-w-full overflow-auto",
    ],
    tab: [
      "z-0 text-foreground-secondary",
      "w-full",
      "px-3",
      "py-1",
      "flex flex-row items-center justify-center gap-2",
      "relative",
      "outline-none",
      "cursor-default",
      "transition-opacity",
      "tap-highlight-transparent",
      "disabled:cursor-not-allowed",
      "disabled:opacity-30",
      "data-selected:text-foreground",
      // focus ring
      ...focusVisibleClasses,
    ],
    indicator: ["absolute", "-z-1", "bg-white"],
    panel: [
      "py-3",
      "px-1",
      "outline-none",
      // focus ring
      ...dataFocusVisibleClasses,
    ],
  },
  variants: {
    variant: {
      solid: {
        list: "bg-background-secondary",
        indicator: "inset-0",
      },
      light: {
        list: "bg-transparent",
        indicator: "inset-0",
      },
      underlined: {
        list: "bg-transparent",
        indicator:
          "bottom-0 h-[2px] w-4/5 shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]",
      },
      bordered: {
        list: "border border-divider bg-transparent shadow-sm",
        indicator: "inset-0",
      },
    },
    color: {
      default: {},
      primary: {},
      secondary: {},
      success: {},
      warning: {},
      danger: {},
    },
    size: {
      sm: {
        list: "rounded-xl",
        tab: "h-7 rounded text-xs",
        indicator: "rounded",
      },
      md: {
        list: "rounded-xl",
        tab: "h-8 rounded text-sm",
        indicator: "rounded-md",
      },
      lg: {
        list: "rounded-lg",
        tab: "h-9 rounded-xl text-base",
        indicator: "rounded-xl",
      },
    },
    radius: {
      none: {
        list: "rounded-none",
        tab: "rounded-none",
        indicator: "rounded-none",
      },
      sm: {
        list: "rounded",
        tab: "rounded",
        indicator: "rounded",
      },
      md: {
        list: "rounded-md",
        tab: "rounded-md",
        indicator: "rounded-md",
      },
      lg: {
        list: "rounded-lg",
        tab: "rounded-lg",
        indicator: "rounded-lg",
      },
      xl: {
        list: "rounded-xl",
        tab: "rounded-xl",
        indicator: "rounded-xl",
      },
      full: {
        list: "rounded-full",
        tab: "rounded-full",
        indicator: "rounded-full",
      },
    },
    fullWidth: {
      true: {
        root: "w-full",
        list: "w-full",
      },
    },
    disableAnimation: {
      true: {
        tab: "transition-none",
        tabContent: "transition-none",
      },
    },
  },
  compoundVariants: [
    /**
     * Variants & Colors
     */
    // solid + bordered + light && color
    {
      variant: ["solid", "bordered", "light"],
      color: "default",
      className: {
        indicator: ["bg-background", "dark:bg-default", "shadow-sm"],
        tabContent: "uig-selected:text-default-foreground",
      },
    },
    {
      variant: ["solid", "bordered", "light"],
      color: "primary",
      className: {
        indicator: colorVariants.solid.primary,
        tabContent: "uig-selected:text-primary-foreground",
      },
    },
    {
      variant: ["solid", "bordered", "light"],
      color: "secondary",
      className: {
        indicator: colorVariants.solid.secondary,
        tabContent: "uig-selected:text-secondary-foreground",
      },
    },
    {
      variant: ["solid", "bordered", "light"],
      color: "success",
      className: {
        indicator: colorVariants.solid.success,
        tabContent: "uig-selected:text-success-foreground",
      },
    },
    {
      variant: ["solid", "bordered", "light"],
      color: "warning",
      className: {
        indicator: colorVariants.solid.warning,
        tabContent: "uig-selected:text-warning-foreground",
      },
    },
    {
      variant: ["solid", "bordered", "light"],
      color: "danger",
      className: {
        indicator: colorVariants.solid.danger,
        tabContent: "uig-selected:text-danger-foreground",
      },
    },
    // underlined && color
    {
      variant: "underlined",
      color: "default",
      className: {
        indicator: "bg-foreground",
        tabContent: "uig-selected:text-foreground",
      },
    },
    {
      variant: "underlined",
      color: "primary",
      className: {
        indicator: "bg-primary",
        tabContent: "uig-selected:text-primary",
      },
    },
    {
      variant: "underlined",
      color: "secondary",
      className: {
        indicator: "bg-secondary",
        tabContent: "uig-selected:text-secondary",
      },
    },
    {
      variant: "underlined",
      color: "success",
      className: {
        indicator: "bg-success",
        tabContent: "uig-selected:text-success",
      },
    },
    {
      variant: "underlined",
      color: "warning",
      className: {
        indicator: "bg-warning",
        tabContent: "uig-selected:text-warning",
      },
    },
    {
      variant: "underlined",
      color: "danger",
      className: {
        indicator: "bg-danger",
        tabContent: "uig-selected:text-danger",
      },
    },
  ],
  defaultVariants: {
    color: "default",
    variant: "solid",
    size: "md",
    fullWidth: false,
  },
});

export type TabsVariants = VariantProps<typeof tabsVariant>;
export type TabsSlots = keyof ReturnType<typeof tabsVariant>;
