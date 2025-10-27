import { useEffect, useRef, useState } from "react";

// Options for configuring the hook
export type UseFocusVisibleOptions = {
  isDisabled?: boolean; // Disables focus tracking if true
};

// Custom hook to track focus visibility with keyboard interaction
export const useFocusVisible = <T extends HTMLElement>(
  options: UseFocusVisibleOptions = {}
) => {
  const { isDisabled = false } = options;
  const [isFocusVisible, setIsFocusVisible] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    // Tracks whether the last input was from the keyboard
    let isLastInputKeyboard = false;

    // Detects keyboard navigation from document-level events
    const handleKeyDownGlobal = (event: KeyboardEvent) => {
      const navigationKeys = [
        "Tab",
        "ArrowUp",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "Home",
        "End",
        "Enter",
        " ",
      ];
      if (navigationKeys.includes(event.key)) {
        isLastInputKeyboard = true;
      }
    };

    // Resets keyboard input flag on pointer events
    const handlePointerDown = () => {
      isLastInputKeyboard = false;
    };

    // Updates focus visibility when the element gains focus
    const handleFocus = () => {
      setIsFocusVisible(isLastInputKeyboard);
    };

    // Resets focus visibility when the element loses focus
    const handleBlur = () => {
      setIsFocusVisible(false);
    };

    // Handles Enter or Space key presses on the focused element
    const handleKeyDownElement = (event: KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        setIsFocusVisible(true);
      }
    };

    // Set up global listeners for input method tracking
    document.addEventListener("keydown", handleKeyDownGlobal);
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);

    // Set up element-specific listeners
    const node = ref.current;
    if (node) {
      node.addEventListener("focus", handleFocus);
      node.addEventListener("blur", handleBlur);
      node.addEventListener("keydown", handleKeyDownElement);
    }

    // Cleanup all event listeners
    return () => {
      document.removeEventListener("keydown", handleKeyDownGlobal);
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);

      if (node) {
        node.removeEventListener("focus", handleFocus);
        node.removeEventListener("blur", handleBlur);
        node.removeEventListener("keydown", handleKeyDownElement);
      }
    };
  }, [isDisabled]);

  return { ref, isFocusVisible };
};
