import { ChevronUpIcon, InfoIcon, SearchIcon, TrashIcon } from "@jamsrui/icons";
import { Button, Kbd, Menu } from "@jamsrui/react";

export const MenuStartEndContent = () => {
  return (
    <Menu>
      <Menu.Trigger>
        <Button>
          <ChevronUpIcon />
          Open Me
        </Button>
      </Menu.Trigger>
      <Menu.Content>
        <Menu.Item textValue="Undo">
          <SearchIcon
            width={20}
            height={20}
            className="text-foreground-secondary"
          />
          Undo
          <Kbd className="ml-auto" keys={["command"]}>
            U
          </Kbd>
        </Menu.Item>
        <Menu.Item textValue="Info">
          <InfoIcon
            width={20}
            height={20}
            className="text-foreground-secondary"
          />
          Info
          <Kbd className="ml-auto" keys={["command"]}>
            I
          </Kbd>
        </Menu.Item>
        <Menu.Item textValue="Search">
          <SearchIcon
            width={20}
            height={20}
            className="text-foreground-secondary"
          />
          Search
          <Kbd className="ml-auto" keys={["command"]}>
            K
          </Kbd>
        </Menu.Item>
        <Menu.Item textValue="Cut">
          <SearchIcon
            width={20}
            height={20}
            className="text-foreground-secondary"
          />
          Cut
          <Kbd className="ml-auto" keys={["command"]}>
            C
          </Kbd>
        </Menu.Item>
        <Menu.Item textValue="Delete" className="hover:bg-danger">
          <TrashIcon
            width={20}
            height={20}
            className="text-foreground-secondary"
          />
          Delete
          <Kbd className="ml-auto" keys={["command"]}>
            D
          </Kbd>
        </Menu.Item>
      </Menu.Content>
    </Menu>
  );
};
