"use client";

import { Label, Select } from "@jamsrui/react";
import { useState } from "react";

export const SelectControlled = () => {
  const [value, setValue] = useState<string[]>(["apple"]);
  return (
    <Select className="max-w-xs" value={value} onValueChange={setValue}>
      <Label>Fruit</Label>
      <Select.Trigger />
      <Select.Popover>
        <Select.Content>
          <Select.Item value="apple">
            Apple
            <Select.ItemIndicator />
          </Select.Item>
          <Select.Item value="blueberry">
            Blueberry
            <Select.ItemIndicator />
          </Select.Item>
          <Select.Item value="watermelon">
            Watermelon
            <Select.ItemIndicator />
          </Select.Item>
          <Select.Item value="banana">
            Banana
            <Select.ItemIndicator />
          </Select.Item>
          <Select.Item value="orange">
            Orange
            <Select.ItemIndicator />
          </Select.Item>
        </Select.Content>
      </Select.Popover>
    </Select>
  );
};
