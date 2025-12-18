"use client";

import { tv } from "@jamsrui/utils";

import type { VariantProps } from "@jamsrui/utils";

export const scrollAreaVariants = tv({
  slots: {
    root: "relative overflow-hidden",
    viewport:
      "h-full w-full rounded-[inherit] overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]",
    scrollbar:
      "flex touch-none select-none p-0.5 transition-colors duration-[160ms] ease-out data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col absolute",
    thumb:
      "relative flex-1 rounded-[10px] bg-neutral-300 transition-colors before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-[''] dark:bg-neutral-600 hover:bg-neutral-400 dark:hover:bg-neutral-500",
    corner: "bg-black/20 dark:bg-white/20",
    content: "min-w-full table", // 'table' helps with size calculation sometimes
  },
  variants: {
    orientation: {
      vertical: {
        scrollbar: "right-0 top-0 bottom-0 border-l border-transparent",
      },
      horizontal: {
        scrollbar: "left-0 right-0 bottom-0 border-t border-transparent",
      },
    },
    isScrollable: {
      false: {
        scrollbar: "opacity-0 pointer-events-none",
      },
    },
  },
  defaultVariants: {
    isScrollable: true,
  },
});

export type ScrollAreaVariants = VariantProps<typeof scrollAreaVariants>;
export type ScrollAreaSlots = keyof ReturnType<typeof scrollAreaVariants>;
