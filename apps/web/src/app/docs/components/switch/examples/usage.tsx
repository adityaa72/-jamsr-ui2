import { Switch } from "@jamsrui/react";

export const SwitchUsage = () => {
  // return <Switch />;
  return (
    <Switch.Context>
      <Switch.Root>
        <Switch.Wrapper>
          <Switch.Input />
          <Switch.Track>
            <Switch.Thumb />
          </Switch.Track>
          <Switch.Content>
            <Switch.Label>Label</Switch.Label>
            <Switch.Description>Description</Switch.Description>
          </Switch.Content>
        </Switch.Wrapper>
      </Switch.Root>
    </Switch.Context>
  );
};
