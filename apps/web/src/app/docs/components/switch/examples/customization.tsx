import { SuccessIcon } from "@jamsrui/icons";
import { Description, Label, Switch } from "@jamsrui/react";

export const SwitchCustomization = () => {
  return (
    <Switch>
      <Switch.Track>
        <Switch.Thumb>
          <SuccessIcon className="size-3 shrink-0 text-primary" />
        </Switch.Thumb>
      </Switch.Track>
      <Switch.Content>
        <Label>Are you ok?</Label>
        <Description>This is a description</Description>
      </Switch.Content>
    </Switch>
  );
};
