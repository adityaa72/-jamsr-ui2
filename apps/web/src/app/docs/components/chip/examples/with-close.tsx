"use client";

import { Chip } from "@jamsrui/react";

export const ChipWithClose = () => {
  const handleClick = () => {
    console.log("clicked");
  };
  return <Chip onClose={handleClick}>Click me</Chip>;
};
