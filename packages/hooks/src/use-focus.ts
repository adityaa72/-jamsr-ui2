import { useEffect, useRef, useState } from "react";

export const useFocus = <T extends HTMLElement>(props: useFocus.Props) => {
  const { isDisabled } = props;
  const ref = useRef<T>(null);
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    const node = ref.current;
    if (isDisabled || !node) return


    const handleFocus = () => {
      setIsFocused(true)
    }

    const handleBlur = () => {
      setIsFocused(false)
    }


    node.addEventListener("focus", handleFocus);
    node.addEventListener("blur", handleBlur);

    return () => {
      node.removeEventListener("focus", handleFocus);
      node.removeEventListener("blur", handleBlur);
    }

  }, [isDisabled])

  if (isDisabled) {
    return {
      ref,
      isFocused: false
    }
  }

  return {
    ref,
    isFocused
  }
}

export namespace useFocus {
  export interface Props {
    isDisabled?: boolean
  }
}