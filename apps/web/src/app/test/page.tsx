import React from "react";
import { Avatar, Menu, Switch } from "@jamsrui/react";

const Page = () => {
  return (
    <Menu placement="bottom-end">
      <Menu.Trigger>
        <Avatar size="sm">
          <Avatar.Fallback>JA</Avatar.Fallback>
          <Avatar.Image src="https://xsgames.co/randomusers/avatar.php?g=male" />
        </Avatar>
      </Menu.Trigger>
      <Menu.Container className="w-[250px]">
        <Menu.ContentRoot>
          <Menu.Item preventCloseOnClick textValue="Dark">
            Dark Mode
            <Switch size="sm" className="ml-auto">
              <Switch.Track>
                <Switch.Thumb />
              </Switch.Track>
            </Switch>
          </Menu.Item>
          <Menu.Separator />
          <Menu.Item textValue="Profile">Account</Menu.Item>
          <Menu.Item textValue="Login Sessions">Login Sessions</Menu.Item>
          <Menu.Item textValue="Manage Stores">Manage Stores</Menu.Item>
          <Menu.Separator />
          <Menu.Item textValue="Open Sandbox Dashboard">
            Open Sandbox Dashboard
          </Menu.Item>
          <Menu.Item textValue="Logout">Logout</Menu.Item>
        </Menu.ContentRoot>
      </Menu.Container>
    </Menu>
  );
};

export default Page;
