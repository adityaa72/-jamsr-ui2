import { radiusVariant, tv } from "@jamsrui/utils";

import type { VariantProps } from "@jamsrui/utils";

export const tableVariants = tv({
  slots: {
    root: "relative flex flex-col gap-2 overflow-hidden",
    wrapper: "grid w-full gap-2 overflow-x-auto",
    table: "group/table w-full min-w-full",
    thead: "h-10",
    th: "h-10 grow items-center px-3 text-left text-sm font-normal",
    tbody: "",
    tr: "group/tr",
    td: "overflow-hidden  px-3 text-sm",
    tfoot: "",
  },
  variants: {
    variant: {
      solid: {
        th: "bg-surface-secondary first:rounded-l-lg last:rounded-r-lg",
        root: "rounded-2xl bg-surface p-4",
      },
      bordered: {
        th: "border-b border-b-divider-dark bg-surface-secondary text-foreground-secondary font-normal text-xs",
        td: "border-b border-divider",
        root: "bg-surface",
      },
    },
    radius: radiusVariant("root"),
    density: {
      compact: {
        td: "py-2",
      },
      standard: {
        td: "py-4",
      },
      comfortable: {
        td: "py-6",
      },
    },
    isHeaderSticky: {
      true: {
        thead: "sticky top-0 z-10 bg-surface [&>tr]:shadow-sm",
        wrapper: "flex max-h-[400px] flex-col overflow-auto",
      },
    },
    allowHover: {
      true: {
        td: "md:group-hover/tr:bg-surface-secondary",
      },
      false: {
        td: "",
      },
    },
    separateRows: {
      true: {
        tr: "border-b-2 border-transparent",
        td: "border-none bg-surface",
        root: "border-none bg-transparent p-0",
      },
    },
  },
  defaultVariants: {
    isHeaderSticky: false,
    density: "compact",
    allowHover: false,
    separateRows: false,
    variant: "bordered",
    radius: "md",
  },
});

export type TableVariantProps = VariantProps<typeof tableVariants>;
export type TableSlots = keyof ReturnType<typeof tableVariants>;
