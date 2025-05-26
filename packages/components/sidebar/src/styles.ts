import { tv } from "@jamsr-ui/utils";

import type { VariantProps } from "@jamsr-ui/utils";

export const test = "";
export const sidebarVariants = tv({
  slots: {
    root: [
      "flex fixed h-dvh max-h-dvh flex-col bg-content1 p-2",
      "transition-all duration-300 ease-in-out",
      "w-(--width) left-0",
      "data-[state=collapsed]:-left-(--width)",
    ],
    header: "pb-1",
    content: "flex grow flex-col gap-4 overflow-auto py-4",
    group: "flex flex-col gap-1",
    groupLabel: "px-2 text-xs text-foreground-secondary",
    menu: "",
    menuItem: "",
    footer: "pt-1",
    menuItemButton: [
      "flex w-full items-center gap-1 rounded-md px-2 py-1.5 text-sm ui-hover:bg-content2",
      "disabled:cursor-not-allowed disabled:opacity-50",
    ],
  },
});

export type SidebarVariantProps = VariantProps<typeof sidebarVariants>;
export type SidebarSlots = keyof ReturnType<typeof sidebarVariants>;
