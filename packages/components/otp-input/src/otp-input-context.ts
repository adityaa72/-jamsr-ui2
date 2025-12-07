"use client";
import { createContext, use } from "react";

import type { useOtpInput } from "./use-otp-input";

export const OtpInputContext = createContext<OtpInputContext.Props | null>(
  null
);

export const useOtpInputContext = () => {
  const context = use(OtpInputContext);
  if (!context) {
    throw new Error(
      "useOtpInputContext must be used within an OtpInputContext"
    );
  }
  return context;
};

export namespace OtpInputContext {
  export interface Props extends ReturnType<typeof useOtpInput> {}
}
