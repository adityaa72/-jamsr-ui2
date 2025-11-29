import { radiusVariant, tv } from "@jamsrui/utils";

import type { VariantProps } from "@jamsrui/utils";

export const selectVariants = tv({
  slots: {
    root: [
      "select select__root group relative flex w-full flex-col gap-1 text-sm",
    ],
    value: [
      "select__value text-sm",
      "pointer-events-none",
      "flex grow flex-wrap",
    ],
    trigger: [
      "select__trigger relative flex w-full flex-row items-center gap-3 border border-divider px-3 py-2 outline-none",
      "focus:border-primary data-hover:border-divider-dark data-open:border-primary",
      "data-disabled:cursor-not-allowed data-disabled:opacity-60",
    ],
    indicator:
      "select__indicator shrink-0 transition-transform duration-300 group-data-open:rotate-180",
    itemIndicator: "select__item-indicator ml-auto",
    popover: "select__popover z-popover overflow-hidden outline-none",
    content: [
      "select__content z-popover flex h-full flex-col gap-px overflow-y-auto overflow-x-hidden bg-surface shadow-md backdrop-blur-3xl p-2",
      "origin-[top_center]",
    ],
    selectItem: [
      "select__item relative flex w-full cursor-default select-none items-center gap-2 p-2 text-sm outline-none",
      "data-hover:bg-surface-secondary",
      "data-active:bg-surface-secondary",
      "data-selected:bg-surface-secondary/50",
      "data-disabled:cursor-not-allowed data-disabled:opacity-60",
    ],
  },
  variants: {
    color: {
      default: {},
      primary: {},
      secondary: {},
      success: {},
      warning: {},
      danger: {},
    },
    radius: radiusVariant(["trigger", "content", "selectItem", "popover"]),
    size: {
      sm: {
        label: "text-xs",
        trigger: "h-9 min-h-9 px-2.5",
        value: "text-sm",
      },
      md: {
        trigger: "h-10 min-h-10",
        value: "text-sm",
      },
      lg: {
        trigger: "h-12 min-h-12",
        value: "text-base",
        placeholder: "text-base",
      },
    },
    isInvalid: {
      true: {
        label: "text-danger",
        trigger: "!border-danger",
      },
    },
  },
  defaultVariants: {
    size: "md",
    radius: "md",
  },
});

export type SelectVariantProps = VariantProps<typeof selectVariants>;
export type SelectSlots = keyof ReturnType<typeof selectVariants>;
