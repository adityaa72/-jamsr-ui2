"use client";
import { Button, Divider, Menu } from "@jamsrui/react";
import { useState } from "react";

export const MenuGroupExample = () => {
  const [showMinimap, setShowMinimap] = useState(true);
  const [showSearch, setShowSearch] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);
  const [sortBy, setSortBy] = useState("date");

  return (
    <Menu>
      <Menu.Trigger>
        <Button>View</Button>
      </Menu.Trigger>
      <Menu.Content>
        <Menu.Group>
          <Menu.GroupLabel>Sort</Menu.GroupLabel>
          <Menu.RadioGroup value={sortBy} onValueChange={setSortBy}>
            <Menu.RadioItem textValue="date" value="date">
              <Menu.ItemIndicator />
              Date
            </Menu.RadioItem>
            <Menu.RadioItem textValue="name" value="name">
              <Menu.ItemIndicator />
              Name
            </Menu.RadioItem>
            <Menu.RadioItem textValue="type" value="type">
              <Menu.ItemIndicator />
              Type
            </Menu.RadioItem>
          </Menu.RadioGroup>
        </Menu.Group>
        <Divider />
        <Menu.Group>
          <Menu.GroupLabel>Workspace</Menu.GroupLabel>
          <Menu.CheckboxItem
            textValue="minimap"
            isChecked={showMinimap}
            onCheckedChange={setShowMinimap}
          >
            <Menu.ItemIndicator />
            Minimap
          </Menu.CheckboxItem>
          <Menu.CheckboxItem
            textValue="search"
            isChecked={showSearch}
            onCheckedChange={setShowSearch}
          >
            <Menu.ItemIndicator />
            Search
          </Menu.CheckboxItem>
          <Menu.CheckboxItem
            textValue="sidebar"
            isChecked={showSidebar}
            onCheckedChange={setShowSidebar}
          >
            <Menu.ItemIndicator />
            Sidebar
          </Menu.CheckboxItem>
        </Menu.Group>
      </Menu.Content>
    </Menu>
  );
};
