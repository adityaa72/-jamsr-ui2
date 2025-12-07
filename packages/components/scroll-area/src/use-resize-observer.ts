"use client";

import { useEffect, useRef } from "react";

export const useResizeObserver = <T extends HTMLElement>({
  ref,
  onResize,
}: {
  ref: React.RefObject<T | null>;
  onResize: () => void;
}) => {
  const onResizeRef = useRef(onResize);

  useEffect(() => {
    onResizeRef.current = onResize;
  }, [onResize]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new ResizeObserver(() => {
      onResizeRef.current();
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref]);
};
