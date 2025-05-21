"use client";

import { useHover } from "@jamsr-ui/hooks";


const UsePress = () => {
  const { isHovered, ref } = useHover<HTMLButtonElement>({
    isDisabled: false,
    enterDelay: 100
  });
  console.log(" isHovered:->", isHovered)
  return (
    <div>
      <button
        ref={ref}
        style={{ backgroundColor: isHovered ? "lightblue" : "white" }}
        className="select-none focus:outline-primary focus:outline-2 focus:outline-offset-2"
        onClick={() => {
          console.log('clicked')
        }}
      >
        Press Me
      </button>
      {isHovered ? "Hovered" : "Not hovered"}
    </div>
  );
}

export default UsePress