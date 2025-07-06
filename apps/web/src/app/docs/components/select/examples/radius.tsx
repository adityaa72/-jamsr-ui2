"use client";

import { Select, SelectItem } from "@jamsrui/react";

export const SelectRadius = () => {
  const radii: Select.Props["radius"][] = [
    "none",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
  ];
  return (
    <div className="flex flex-col gap-4 w-full items-center">
      {radii.map((radius) => (
        <Select
          className="max-w-sm"
          label="Select Label"
          radius={radius}
          key={radius}
        >
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="watermelon">Watermelon</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
        </Select>
      ))}
    </div>
  );
};
