"use client";

import { useState } from "react";
import { Select, SelectItem } from "@jamsrui/react";

export const SelectControlled = () => {
  const [value, setValue] = useState<string[]>(["apple"]);
  return (
    <Select
      className="max-w-xs"
      label="Select Label"
      value={value}
      onValueChange={setValue}
      helperText={`Selected Value: ${Array.from(value).join("")}`}
    >
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="blueberry">Blueberry</SelectItem>
      <SelectItem value="watermelon">Watermelon</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectItem value="orange">Orange</SelectItem>
    </Select>
  );
};
