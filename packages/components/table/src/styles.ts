import { radiusVariant, tv } from "@jamsrui/utils";

import type { VariantProps } from "@jamsrui/utils";

export const test = "";
export const tableVariants = tv({
  slots: {
    root: "relative flex flex-col gap-2 overflow-hidden",
    wrapper: "grid w-full gap-2 overflow-x-auto",
    table: "group/table w-full min-w-full",
    thead: "h-10",
    th: "h-10 grow items-center whitespace-nowrap px-3 text-left text-sm",
    tbody: "",
    tr: "group/tr",
    td: "overflow-hidden whitespace-nowrap px-3 text-sm",
    tfoot: "",
    sortIcon: "",
    emptyWrapper: "",
    loadingWrapper: "",
  },
  variants: {
    variant: {
      solid: {
        th: "bg-background-tertiary first:rounded-l-lg last:rounded-r-lg",
        root: "rounded-2xl bg-background-secondary p-4",
      },
      bordered: {
        th: "border-b border-b-stroke-secondary",
        td: "border-b border-stroke-primary",
        root: "bg-background-secondary",
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
        thead: "sticky top-0 z-10 bg-background-secondary [&>tr]:shadow-sm",
        wrapper: "flex max-h-[400px] flex-col overflow-auto",
      },
    },
    allowHover: {
      true: {
        td: "md:group-hover/tr:bg-background-tertiary",
      },
      false: {
        td: "",
      },
    },
    separateRows: {
      true: {
        tr: "border-b-2 border-transparent",
        td: "border-none bg-background-secondary",
        root: "border-none bg-transparent p-0",
      },
    },
  },
  defaultVariants: {
    isHeaderSticky: false,
    density: "compact",
    allowHover: false,
    separateRows: false,
    variant: "solid",
    radius: "md",
  },
});

export type TableVariantProps = VariantProps<typeof tableVariants>;
export type TableSlots = keyof ReturnType<typeof tableVariants>;
