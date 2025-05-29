"use client";

import { Chip } from "@jamsr-ui/chip";

export const ChipWithClose = () => {
  const handleClick = () => {
    console.log("clicked");
  };
  return <Chip onClose={handleClick}>Click me</Chip>;
};
