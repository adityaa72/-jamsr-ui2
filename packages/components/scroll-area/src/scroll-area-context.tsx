"use client";

import { createContext, useContext } from "react";
import type { UseScrollAreaReturn } from "./use-scroll-area";

export const ScrollAreaContext = createContext<UseScrollAreaReturn | null>(
  null
);

export const useScrollAreaContext = () => {
  const context = useContext(ScrollAreaContext);
  if (!context) {
    throw new Error(
      "useScrollAreaContext must be used within a ScrollAreaProvider"
    );
  }
  return context;
};

export const ScrollAreaProvider = ScrollAreaContext.Provider;
