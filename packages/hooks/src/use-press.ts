import { useCallback, useEffect, useRef, useState } from "react";

export function usePress(props: { isDisabled?: boolean } = {}) {
  const { isDisabled = false } = props;
  const ref = useRef<HTMLElement>(null);

  const [isPressing, setIsPressing] = useState(false);
  const [isPointerInside, setIsPointerInside] = useState(false);

  // Derived value
  const isPressed = isPressing && isPointerInside;

  // --- Handlers ---

  const handlePointerDown = useCallback(() => {
    setIsPressing(true);
    setIsPointerInside(true);
  }, []);

  const handlePointerLeave = useCallback(() => {
    if (isPressing) setIsPointerInside(false);
  }, [isPressing]);

  const handlePointerEnter = useCallback(() => {
    if (isPressing) setIsPointerInside(true);
  }, [isPressing]);

  const handlePointerCancel = useCallback(() => {
    if (isPressing) setIsPressing(false);
  }, [isPressing]);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    const isInput = event.target instanceof HTMLInputElement;
    const allowedKeys = isInput ? [" "] : ["Enter", " "];
    if (allowedKeys.includes(event.key)) {
      setIsPressing(true);
      setIsPointerInside(true);
    }
  }, []);

  const handleKeyUp = useCallback(
    (event: KeyboardEvent) => {
      if ((event.key === "Enter" || event.key === " ") && isPressing) {
        setIsPressing(false);
      }
    },
    [isPressing]
  );

  // --- Global pointer up (to end press anywhere) ---
  useEffect(() => {
    if (isDisabled) return;

    const handlePointerUp = () => {
      if (isPressing) setIsPressing(false);
    };

    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("contextmenu", handlePointerUp);
    return () => {
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("contextmenu", handlePointerUp);
    };
  }, [isPressing, isDisabled]);

  // --- Attach event listeners to element ---
  useEffect(() => {
    const node = ref.current;
    if (!node || isDisabled) return;

    node.addEventListener("pointerdown", handlePointerDown);
    node.addEventListener("pointerenter", handlePointerEnter);
    node.addEventListener("pointerleave", handlePointerLeave);
    node.addEventListener("keydown", handleKeyDown);
    node.addEventListener("keyup", handleKeyUp);
    node.addEventListener("pointercancel", handlePointerCancel);

    return () => {
      node.removeEventListener("pointerdown", handlePointerDown);
      node.removeEventListener("pointerenter", handlePointerEnter);
      node.removeEventListener("pointerleave", handlePointerLeave);
      node.removeEventListener("keydown", handleKeyDown);
      node.removeEventListener("keyup", handleKeyUp);
      node.removeEventListener("pointercancel", handlePointerCancel);
    };
  }, [
    handlePointerDown,
    handlePointerEnter,
    handlePointerLeave,
    handleKeyDown,
    handleKeyUp,
    handlePointerCancel,
    isDisabled,
  ]);

  return { isPressed, ref, isPressing };
}

export namespace usePress {
  // Props for the usePress hook
  export interface UsePressProps {
    isDisabled?: boolean;
  }
}
