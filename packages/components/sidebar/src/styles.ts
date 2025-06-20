import { tv } from "@jamsrui/utils";

import type { VariantProps } from "@jamsrui/utils";

export const test = "";
export const sidebarVariants = tv({
  slots: {
    root: [
      "flex z-20 fixed h-dvh max-h-dvh flex-col",
      "transition-all duration-300 ease-in-out",
      "w-(--width) left-0",
      "data-[state=collapsed]:-translate-x-(--width)",
    ],
    header: "py-2 px-4",
    content: "flex h-full flex-col gap-2 bg-background-secondary",
    body: "p-2 grow flex flex-col gap-4 overflow-auto",
    group: "flex flex-col gap-1",
    groupLabel: "px-2 text-xs text-foreground-secondary",
    menu: "",
    menuItem: "",
    footer: "border-t border-stroke-primary py-2 px-4",
    menuItemButton: [
      "flex w-full items-center gap-1 rounded-md px-2 py-1.5 text-sm ui-hover:bg-background-tertiary",
      "disabled:cursor-not-allowed disabled:opacity-50",
    ],
    backdrop:
      "inset-0 -z-10 fixed bg-black/30 backdrop-blur-md backdrop-saturate-150",
  },
});

export type SidebarVariantProps = VariantProps<typeof sidebarVariants>;
export type SidebarSlots = keyof ReturnType<typeof sidebarVariants>;
