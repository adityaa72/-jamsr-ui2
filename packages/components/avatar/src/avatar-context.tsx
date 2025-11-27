"use client";

import { createContext, use } from "react";

import type { useAvatar } from "./use-avatar";

export const AvatarContext = createContext<AvatarContext.Props | null>(null);

export const useAvatarContext = () => {
  const ctx = use(AvatarContext);
  if (!ctx) {
    throw new Error("useAvatarContext must be used within a AvatarContext");
  }
  return ctx;
};

export namespace AvatarContext {
  export interface Props extends ReturnType<typeof useAvatar> {}
}
