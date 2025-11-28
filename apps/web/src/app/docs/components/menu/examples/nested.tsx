import { Button, Menu } from "@jamsrui/react";

export const MenuNested = () => {
  return (
    <Menu>
      <Menu.Trigger>
        <Button>Open Me</Button>
      </Menu.Trigger>
      <Menu.Content>
        <Menu.Item>Undo</Menu.Item>
        <Menu.Item>Info</Menu.Item>
        <Menu.Item>Search</Menu.Item>
        <Menu>
          <Menu.Trigger>
            <Menu.Item>
              Search <Menu.SubmenuIndicator />
            </Menu.Item>
          </Menu.Trigger>
          <Menu.Content>
            <Menu.Item>Undo</Menu.Item>
            <Menu.Item>Info</Menu.Item>
            <Menu.Item>Search</Menu.Item>
            <Menu>
              <Menu.Trigger>
                <Menu.Item>
                  Search <Menu.SubmenuIndicator />
                </Menu.Item>
              </Menu.Trigger>
              <Menu.Content>
                <Menu.Item>Undo</Menu.Item>
                <Menu.Item>Info</Menu.Item>
                <Menu.Item>Search</Menu.Item>
              </Menu.Content>
            </Menu>
          </Menu.Content>
        </Menu>
      </Menu.Content>
    </Menu>
  );
};
