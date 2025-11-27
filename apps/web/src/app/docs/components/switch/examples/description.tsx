import { Description, Label, Switch } from "@jamsrui/react";

export const SwitchDescription = () => {
  return (
    <Switch>
      <Switch.Track />
      <Switch.Content>
        <Label>Are you ok?</Label>
        <Description>This is a description</Description>
      </Switch.Content>
    </Switch>
  );
};
