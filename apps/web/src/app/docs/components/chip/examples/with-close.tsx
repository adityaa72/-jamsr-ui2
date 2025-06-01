"use client";

import { Chip } from "@jamsrui/chip";

export const ChipWithClose = () => {
  const handleClick = () => {
    console.log("clicked");
  };
  return <Chip onClose={handleClick}>Click me</Chip>;
};
