import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";




// State for the reducer
interface PressState {
  isPressing: boolean;
  isPointerInside: boolean;
}

// Actions for the reducer
type PressAction =
  | { type: "PRESS_START" }
  | { type: "POINTER_LEAVE" }
  | { type: "POINTER_ENTER" }
  | { type: "PRESS_END" };

// Initial state
const initialState: PressState = {
  isPressing: false,
  isPointerInside: false,
};

// Reducer to manage press state
function pressReducer(state: PressState, action: PressAction): PressState {
  switch (action.type) {
    case "PRESS_START":
      return { isPressing: true, isPointerInside: true };
    case "POINTER_LEAVE":
      return { ...state, isPointerInside: false };
    case "POINTER_ENTER":
      return { ...state, isPointerInside: true };
    case "PRESS_END":
      return { ...state, isPressing: false };
    default:
      return state;
  }
}

export function usePress(props: usePress.UsePressProps) {
  const {
    isDisabled = false,
  } = props;

  const [state, dispatch] = useReducer(pressReducer, initialState);
  const ref = useRef<HTMLElement>(null);

  // Derive isPressed from state
  const isPressed = state.isPressing && state.isPointerInside;

  // Handle pointer down event
  const handlePointerDown = useCallback(
    () => {
      dispatch({ type: "PRESS_START" });
    },
    []
  );

  // Handle pointer leave event
  const handlePointerLeave = useCallback(
    () => {
      if (state.isPressing) {
        dispatch({ type: "POINTER_LEAVE" });
      }
    },
    [state.isPressing]
  );

  // Handle pointer enter event
  const handlePointerEnter = useCallback(
    () => {
      if (state.isPressing) {
        dispatch({ type: "POINTER_ENTER" });
      }
    },
    [state.isPressing]
  );

  const onPointerCancel = useCallback(() => {
    if (state.isPressing) {
      dispatch({ type: "PRESS_END" });
    }
  }, [state.isPressing])

  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      dispatch({ type: "PRESS_START" });
    }
  }, [])

  const handleKeyUp = useCallback((event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      if (state.isPressing) {
        dispatch({ type: "PRESS_END" });
      }
    }
  }, [state.isPressing])

  // Handle pointer up event (attached to window)
  useEffect(() => {
    if (isDisabled) return;
    const handlePointerUp = () => {
      if (state.isPressing)
        dispatch({ type: "PRESS_END" });
    };
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("contextmenu", handlePointerUp);
    return () => {
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("contextmenu", handlePointerUp);
    };
  }, [state.isPressing, state.isPointerInside, isDisabled]);

  // Memoize press props to prevent unnecessary re-renders
  const pressProps = useMemo(
    (): React.ComponentPropsWithRef<any> => (isDisabled ? {} : {
      onPointerDown: handlePointerDown,
      onPointerEnter: handlePointerEnter,
      onPointerLeave: handlePointerLeave,
      onKeyDown: handleKeyDown,
      onKeyUp: handleKeyUp,
      onPointerCancel: onPointerCancel,
      ref
    }),
    [handleKeyDown, handleKeyUp, handlePointerDown, handlePointerEnter, handlePointerLeave, isDisabled, onPointerCancel]
  );

  return { isPressed, pressProps };
}

export namespace usePress {
  // Props for the usePress hook
  export interface UsePressProps {
    isDisabled?: boolean;
  }
}


