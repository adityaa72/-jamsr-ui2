"use client";
import {
  Button,
  Divider,
  Menu,
  MenuCheckboxItem,
  MenuContent,
  MenuGroup,
  MenuGroupLabel,
  MenuRadioGroup,
  MenuRadioItem,
  MenuTrigger,
} from "@jamsrui/react";
import { useState } from "react";

export const MenuGroupExample = () => {
  const [showMinimap, setShowMinimap] = useState(true);
  const [showSearch, setShowSearch] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);
  const [sortBy, setSortBy] = useState("date");

  return (
    <Menu>
      <MenuTrigger>
        <Button>View</Button>
      </MenuTrigger>
      <MenuContent>
        <MenuGroup>
          <MenuGroupLabel>Sort</MenuGroupLabel>
          <MenuRadioGroup value={sortBy} onValueChange={setSortBy}>
            <MenuRadioItem value="date">Date</MenuRadioItem>
            <MenuRadioItem value="name">Name</MenuRadioItem>
            <MenuRadioItem value="type">Type</MenuRadioItem>
          </MenuRadioGroup>
        </MenuGroup>
        <Divider />
        <MenuGroup>
          <MenuGroupLabel>Workspace</MenuGroupLabel>
          <MenuCheckboxItem
            isChecked={showMinimap}
            onCheckedChange={setShowMinimap}
          >
            Minimap
          </MenuCheckboxItem>
          <MenuCheckboxItem
            isChecked={showSearch}
            onCheckedChange={setShowSearch}
          >
            Search
          </MenuCheckboxItem>
          <MenuCheckboxItem
            isChecked={showSidebar}
            onCheckedChange={setShowSidebar}
          >
            Sidebar
          </MenuCheckboxItem>
        </MenuGroup>
      </MenuContent>
    </Menu>
  );
};
