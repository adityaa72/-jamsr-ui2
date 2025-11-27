import { Label, Switch } from "@jamsrui/react";

export const SwitchDisabled = () => {
  return (
    <Switch disabled>
      <Switch.Track />
      <Switch.Content>
        <Label>Enable Notifications</Label>
      </Switch.Content>
    </Switch>
  );
};
