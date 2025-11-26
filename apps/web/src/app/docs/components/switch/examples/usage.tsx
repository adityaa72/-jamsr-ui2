import { Description, Label, Switch } from "@jamsrui/react";

export const SwitchUsage = () => {
  // return <Switch />;
  return (
    <div>
      <Switch />
      <Label>This is label</Label>
      <Description>This is description</Description>
    </div>
  );
  return (
    <Switch.Context>
      <Switch.Root>
        <Switch.Wrapper>
          <Switch.Input />
          <Switch.Track>
            <Switch.Thumb />
          </Switch.Track>
          <Switch.Content></Switch.Content>
        </Switch.Wrapper>
      </Switch.Root>
    </Switch.Context>
  );
};
