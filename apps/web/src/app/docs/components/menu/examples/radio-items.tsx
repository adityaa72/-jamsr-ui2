"use client";
import {
  Button,
  Menu,
  MenuContent,
  MenuRadioGroup,
  MenuRadioItem,
  MenuTrigger,
} from "@jamsrui/react";
import { useState } from "react";

export const MenuRadioItemsExample = () => {
  const [sortBy, setSortBy] = useState("date");
  return (
    <Menu>
      <MenuTrigger>
        <Button>Sort</Button>
      </MenuTrigger>
      <MenuContent>
        <MenuRadioGroup value={sortBy} onValueChange={setSortBy}>
          <MenuRadioItem value="date">Date</MenuRadioItem>
          <MenuRadioItem value="name">Name</MenuRadioItem>
          <MenuRadioItem value="rating">Rating</MenuRadioItem>
        </MenuRadioGroup>
      </MenuContent>
    </Menu>
  );
};
