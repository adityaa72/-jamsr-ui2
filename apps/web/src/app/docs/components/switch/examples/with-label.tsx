import { Label, Switch } from "@jamsrui/react";

export const SwitchWithLabel = () => {
  return (
    <Switch>
      <Switch.Track />
      <Switch.Content>
        <Label>This is label</Label>
      </Switch.Content>
    </Switch>
  );
};
