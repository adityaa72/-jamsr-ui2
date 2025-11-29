"use client";

import { Select } from "@jamsrui/react";
import { useState } from "react";

export const SelectMultipleControlled = () => {
  const [value, setValue] = useState<string[]>(["option1", "option2"]);
  return (
    <Select
      className="max-w-md"
      isMultiple
      value={value}
      onValueChange={setValue}
    >
      <Select.Trigger />
      <Select.Popover>
        <Select.Content>
          {Array(20)
            .fill(null)
            .map((_, idx) => {
              const value = `option${idx}`;
              return (
                <Select.Item key={value} value={value} textValue={value}>
                  {`Option ${idx}`}
                  <Select.ItemIndicator />
                </Select.Item>
              );
            })}
        </Select.Content>
      </Select.Popover>
    </Select>
  );
};
