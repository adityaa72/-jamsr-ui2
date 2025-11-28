"use client";

import { Label, Select, SelectItem } from "@jamsrui/react";

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
        <Select className="max-w-xs" radius={radius} key={radius}>
          <Label>Select Label</Label>
          <Select.Trigger />
          <Select.Popover>
            <Select.Content>
              <SelectItem value="apple">
                Apple
                <Select.ItemIndicator />
              </SelectItem>
              <SelectItem value="blueberry">
                Blueberry
                <Select.ItemIndicator />
              </SelectItem>
              <SelectItem value="watermelon">
                Watermelon
                <Select.ItemIndicator />
              </SelectItem>
              <SelectItem value="banana">
                Banana
                <Select.ItemIndicator />
              </SelectItem>
              <SelectItem value="orange">
                Orange
                <Select.ItemIndicator />
              </SelectItem>
            </Select.Content>
          </Select.Popover>
        </Select>
      ))}
    </div>
  );
};
