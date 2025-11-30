import { radiusVariant, tv } from "@jamsrui/utils";

import type { VariantProps } from "@jamsrui/utils";

export const otpInputVariants = tv({
  slots: {
    root: "otp-input otp-input__root relative flex gap-2 items-center group",
    group: "otp-input__group flex",
    slot: "otp-input__slot w-6 h-8 border-divider relative w-10 md:w-20 h-14 md:h-28 text-[2rem] md:text-[4rem] flex items-center justify-center border-y border-r first:border-l first:rounded-l-md last:rounded-r-md transition-all duration-300 ease-in-out outline-solid outline-0 outline-accent-foreground/20 group-hover:border-primary-foreground/20 group-focus-within:border-primary-foreground/30 data-active:outline-4 data-active:outline-primary-foreground",
    separator: "otp-input__separator w-4 h-1 bg-divider",
    input: [
      "otp-input__input absolute bg-transparent inset-0 size-full outline-none outline-0 border-none border-0",
      "z-10 ",
    ],
    caret:
      "otp-input__caret absolute pointer-events-none flex w-[2px] h-8 bg-primary-foreground animate-caret-blink z-1",
  },
  variants: {
    radius: radiusVariant(["group", "separator"], "otp-input"),
  },
  defaultVariants: { radius: "md" },
});

export type OtpInputVariants = VariantProps<typeof otpInputVariants>;
export type OtpInputSlots = keyof ReturnType<typeof otpInputVariants>;
