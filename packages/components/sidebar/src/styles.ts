import { tv } from "@jamsrui/utils";

import type { VariantProps } from "@jamsrui/utils";

export const sidebarVariants = tv({
  slots: {
    wrapper: "sidebar__wrapper group/sidebar-wrapper flex min-h-svh w-full",
    sidebar: [
      "sidebar group sidebar__root w-(--width) group-data-[state=collapsed]/sidebar-wrapper:w-0",
      "duration-300 ease-out transition-[width]",
    ],

    container: [
      "sidebar sidebar__root group fixed flex z-20 h-dvh max-h-dvh flex-col",
      "transition-[left] duration-300 ease-out",
      "w-(--width) left-0",
      "group-data-[state=collapsed]:left-[calc((var(--width))*-1)]",
    ],
    header: "sidebar__header py-2 px-4",
    content: "sidebar__content flex h-full flex-col bg-surface",
    body: "sidebar__body p-2 grow flex flex-col gap-4 overflow-auto",
    group: "sidebar__group flex flex-col gap-1",
    groupLabel:
      "sidebar__group-label px-2 text-xs font-medium text-foreground-secondary",
    menu: "sidebar__menu",
    menuItem: "sidebar__menu-item",
    footer: "sidebar__footer py-2 px-4",
    menuItemButton: [
      "sidebar__menu-item-button flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm ui-hover:bg-surface-secondary",
      "disabled:cursor-not-allowed disabled:opacity-50",
    ],
    inset: "sidebar__inset relative w-full flex-1 flex-col",
    backdrop: [
      "sidebar__backdrop inset-0 -z-10 fixed bg-black/30 backdrop-blur-md backdrop-saturate-150",
    ],
  },
});

export type SidebarVariantProps = VariantProps<typeof sidebarVariants>;
export type SidebarSlots = keyof ReturnType<typeof sidebarVariants>;
