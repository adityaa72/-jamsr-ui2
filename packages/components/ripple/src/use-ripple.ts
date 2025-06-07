import { useCallback, useMemo, useRef, useState } from "react";

import type React from "react";

export const useRipple = (props: useRipple.Props) => {
  const { isCentered, isDisabled } = props;
  const [ripples, setRipples] = useState<useRipple.RippleData[]>([]);
  const rippleId = useRef(0);

  const addRipple = useCallback((x: number, y: number, size: number) => {
    const id = ++rippleId.current;
    setRipples((prev) => [
      ...prev,
      {
        id,
        size,
        x,
        y,
      },
    ]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 1000);
  }, []);

  const handleRipple = useCallback(
    (event: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>) => {
      const element = event.currentTarget;
      const rect = element.getBoundingClientRect();
      let clientX = 0;
      let clientY = 0;

      if (event?.type === "mousedown") {
        clientX = (event as React.MouseEvent<HTMLDivElement>).clientX;
        clientY = (event as React.MouseEvent<HTMLDivElement>).clientY;
      } else if (event?.type === "touchstart") {
        const touch = (event as React.TouchEvent<HTMLDivElement>).touches[0];
        if (touch) {
          clientX = touch.clientX;
          clientY = touch.clientY;
        }
      } else {
        return;
      }

      let clickX: number, clickY: number;
      if (isCentered) {
        clickX = rect.width / 2;
        clickY = rect.height / 2;
      } else {
        clickX = clientX - rect.left;
        clickY = clientY - rect.top;
      }

      const distances = [
        Math.sqrt(clickX ** 2 + clickY ** 2),
        Math.sqrt((rect.width - clickX) ** 2 + clickY ** 2),
        Math.sqrt(clickX ** 2 + (rect.height - clickY) ** 2),
        Math.sqrt((rect.width - clickX) ** 2 + (rect.height - clickY) ** 2),
      ];
      const maxDistance = Math.max(...distances);
      const size = 2 * maxDistance;
      const x = clickX - maxDistance;
      const y = clickY - maxDistance;

      addRipple(x, y, size);
    },
    [addRipple, isCentered]
  );

  return useMemo(
    () => ({
      ripples,
      handleRipple,
      isDisabled,
    }),
    [handleRipple, isDisabled, ripples]
  );
};

export namespace useRipple {
  export interface RippleData {
    x: number;
    y: number;
    size: number;
    id: number;
  }

  export interface Props {
    isCentered?: boolean;
    isDisabled?: boolean;
  }
}
