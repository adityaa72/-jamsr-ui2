"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { useResizeObserver } from "./use-resize-observer";

export interface UseScrollAreaProps {
  type?: "auto" | "always" | "scroll" | "hover";
  scrollHideDelay?: number;
}

export const useScrollArea = (props: UseScrollAreaProps = {}) => {
  const { type = "hover", scrollHideDelay = 600 } = props;
  const viewportRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollbarXRef = useRef<HTMLDivElement>(null);
  const scrollbarYRef = useRef<HTMLDivElement>(null);
  const thumbXRef = useRef<HTMLDivElement>(null);
  const thumbYRef = useRef<HTMLDivElement>(null);

  // State
  const [hasScrollX, setHasScrollX] = useState(false);
  const [hasScrollY, setHasScrollY] = useState(false);
  const [thumbHeight, setThumbHeight] = useState(0);
  const [thumbWidth, setThumbWidth] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  // Measurements
  const updateMeasurements = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const {
      clientHeight,
      scrollHeight,
      clientWidth,
      scrollWidth,
      scrollTop,
      scrollLeft,
    } = viewport;

    const hasY = scrollHeight > clientHeight;
    const hasX = scrollWidth > clientWidth;

    setHasScrollY(hasY);
    setHasScrollX(hasX);

    if (hasY) {
      const heightRatio = clientHeight / scrollHeight;
      const tHeight = Math.max(heightRatio * clientHeight, 20); // Min thumb height
      setThumbHeight(tHeight);

      if (thumbYRef.current && scrollbarYRef.current) {
        const trackHeight = scrollbarYRef.current.clientHeight;
        const availableScrollTop = scrollHeight - clientHeight;
        const availableTrackTop = trackHeight - tHeight;
        // Calculate thumb position based on scroll percentage
        const ratio = availableTrackTop / availableScrollTop;
        // thumbYRef.current.style.transform = `translateY(${scrollTop * ratio}px)`;
        // Use top instead of transform to avoid composite layer issues/flicker if any
        thumbYRef.current.style.top = `${scrollTop * ratio}px`;
      }
    }

    if (hasX) {
      const widthRatio = clientWidth / scrollWidth;
      const tWidth = Math.max(widthRatio * clientWidth, 20);
      setThumbWidth(tWidth);

      if (thumbXRef.current && scrollbarXRef.current) {
        const trackWidth = scrollbarXRef.current.clientWidth;
        const availableScrollLeft = scrollWidth - clientWidth;
        const availableTrackLeft = trackWidth - tWidth;
        const ratio = availableTrackLeft / availableScrollLeft;
        thumbXRef.current.style.left = `${scrollLeft * ratio}px`;
      }
    }
  }, []);

  // Observers
  useResizeObserver({ ref: viewportRef, onResize: updateMeasurements });
  useResizeObserver({ ref: contentRef, onResize: updateMeasurements });

  // Handle Scroll
  const handleScroll = useCallback(() => {
    setIsScrolling(true);
    updateMeasurements();

    // Auto hide logic if needed
    if (type === "scroll" || type === "hover") {
      // Debounce hide?
      // For now just tracking scrolling state
    }
  }, [updateMeasurements, type]);

  useEffect(() => {
    if (!isScrolling) return;
    const timeout = setTimeout(() => setIsScrolling(false), scrollHideDelay);
    return () => clearTimeout(timeout);
  }, [isScrolling, scrollHideDelay]);

  // Drag Logic for Vertical Thumb
  const handleThumbYPointerDown = useCallback((e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const thumb = thumbYRef.current;
    const viewport = viewportRef.current;
    if (!thumb || !viewport) return;

    // Correctly capture initial values at the start of drag
    const startY = e.clientY;
    const startScrollTop = viewport.scrollTop;

    const trackHeight = scrollbarYRef.current?.clientHeight || 0;
    const tHeight = thumb.clientHeight;
    // Prevent division by zero
    const scrollRatio =
      (viewport.scrollHeight - viewport.clientHeight) /
      (trackHeight - tHeight || 1);

    const handlePointerMove = (moveEvent: PointerEvent) => {
      const deltaY = moveEvent.clientY - startY;
      const newScrollTop = startScrollTop + deltaY * scrollRatio;
      viewport.scrollTop = newScrollTop;
    };

    const handlePointerUp = () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      thumb.releasePointerCapture(e.pointerId);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    thumb.setPointerCapture(e.pointerId);
  }, []);

  // Drag Logic for Horizontal Thumb
  const handleThumbXPointerDown = useCallback((e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const thumb = thumbXRef.current;
    const viewport = viewportRef.current;
    if (!thumb || !viewport) return;

    const startX = e.clientX;
    const startScrollLeft = viewport.scrollLeft;

    const trackWidth = scrollbarXRef.current?.clientWidth || 0;
    const tWidth = thumb.clientWidth;
    const scrollRatio =
      (viewport.scrollWidth - viewport.clientWidth) /
      (trackWidth - tWidth || 1);

    const handlePointerMove = (moveEvent: PointerEvent) => {
      const deltaX = moveEvent.clientX - startX;
      const newScrollLeft = startScrollLeft + deltaX * scrollRatio;
      viewport.scrollLeft = newScrollLeft;
    };

    const handlePointerUp = () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      thumb.releasePointerCapture(e.pointerId);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    thumb.setPointerCapture(e.pointerId);
  }, []);

  return {
    viewportRef,
    contentRef,
    scrollbarXRef,
    scrollbarYRef,
    thumbXRef,
    thumbYRef,
    hasScrollX,
    hasScrollY,
    thumbHeight,
    thumbWidth,
    handleScroll,
    handleThumbYPointerDown,
    handleThumbXPointerDown,
    updateMeasurements,
    isScrolling,
  };
};

export type UseScrollAreaReturn = ReturnType<typeof useScrollArea>;
