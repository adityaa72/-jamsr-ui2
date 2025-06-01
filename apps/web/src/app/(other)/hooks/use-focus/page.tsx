"use client";

import { useFocus } from "@jamsrui/hooks";


const UsePress = () => {
  const { isFocused, ref } = useFocus<HTMLButtonElement>({
    isDisabled: false,
  });
  return (
    <div>
      <button
        ref={ref}
        style={{ backgroundColor: isFocused ? "lightblue" : "white" }}
        className="select-none focus:outline-primary focus:outline-2 focus:outline-offset-2"
      >
        Press Me
      </button>
      {isFocused ? "Focused" : "Not Focused"}
    </div>
  );
}

export default UsePress