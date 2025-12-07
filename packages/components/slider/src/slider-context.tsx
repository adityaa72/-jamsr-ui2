"use client";

import { createContext, useContext } from "react";

export type SliderContextValue = {
  values: number[];
  min: number;
  max: number;
  step: number;
  orientation: "horizontal" | "vertical";
  isDisabled: boolean;
  minStepsBetweenThumbs: number;
  // Thumb registration/management
  registerThumb: (index: number, ref: React.RefObject<HTMLDivElement>) => void;
  // Event handlers
  handleThumbPointerDown: (index: number, event: React.PointerEvent) => void;
  // handleTrackPointerDown: (event: React.PointerEvent) => void;
  // Track pointer down might be handled by the track component itself using the context values?
  // Actually, the hook usually exposes a track prop handler.
  // But for composition, Track component needs to know what to do.
  // Let's expose a function to calculate value from pointer and set it.
  getPercentageForValue: (value: number) => number;
  onTrackPointerDown: (event: React.PointerEvent) => void;
  trackRef: React.RefObject<HTMLDivElement | null>;
};

export const SliderContext = createContext<SliderContextValue | null>(null);

export const useSliderContext = () => {
  const context = useContext(SliderContext);
  if (!context) {
    throw new Error("useSliderContext must be used within a Slider");
  }
  return context;
};
