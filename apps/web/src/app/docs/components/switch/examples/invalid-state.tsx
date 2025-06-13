import { Switch } from "@jamsr-ui/react";

export const SwitchInvalidState = () => {
  return (
    <Switch label="Are you ok?" isInvalid errorMessage="This field is required">
      This is a description
    </Switch>
  );
};
