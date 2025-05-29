"use client";

import { useFocusVisible } from "@jamsr-ui/hooks";


const UsePress = () => {
  const { isFocusVisible, ref } = useFocusVisible<HTMLButtonElement>({
    isDisabled: false,
  });
  console.log(" isFocusVisible:->", isFocusVisible)
  return (
    <div>
      <button
        ref={ref}
        style={{ backgroundColor: isFocusVisible ? "lightblue" : "white" }}
        className="select-none focus:outline-primary focus:outline-2 focus:outline-offset-2"
        onClick={() => {
          console.log('clicked')
        }}
      >
        Press Me
      </button>
      {isFocusVisible ? "Focused" : "Not Focused"}
    </div>
  );
}

export default UsePress