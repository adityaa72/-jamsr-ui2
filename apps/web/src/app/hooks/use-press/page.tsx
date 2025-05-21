"use client";

import { usePress } from "@jamsr-ui/hooks";


const UsePress = () => {
  const { isPressed, pressProps } = usePress({
    isDisabled: false,
  });
  return (
    <button
      onClick={e => {
        console.log("clicked")
      }}
      {...pressProps}
      style={{ backgroundColor: isPressed ? "lightblue" : "white" }}
      className="select-none touch-none focus:outline-primary focus:outline-2 focus:outline-offset-2"
    >
      Press Me
    </button>
  );
}

export default UsePress