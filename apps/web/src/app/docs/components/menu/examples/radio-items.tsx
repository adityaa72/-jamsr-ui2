"use client";
import { Button, Menu } from "@jamsrui/react";
import { useState } from "react";

export const MenuRadioItemsExample = () => {
  const [sortBy, setSortBy] = useState("date");
  return (
    <Menu>
      <Menu.Trigger>
        <Button>Sort</Button>
      </Menu.Trigger>
      <Menu.Content>
        <Menu.RadioGroup value={sortBy} onValueChange={setSortBy}>
          <Menu.RadioItem value="date">
            <Menu.ItemIndicator />
            Date
          </Menu.RadioItem>
          <Menu.RadioItem value="name">
            <Menu.ItemIndicator />
            Name
          </Menu.RadioItem>
          <Menu.RadioItem value="rating">
            <Menu.ItemIndicator />
            Rating
          </Menu.RadioItem>
        </Menu.RadioGroup>
      </Menu.Content>
    </Menu>
  );
};
