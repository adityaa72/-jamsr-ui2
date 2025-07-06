import { Checkbox } from "@jamsrui/react";

export const CheckboxInvalidState = () => {
  return (
    <Checkbox
      label="Are you agree to our terms?"
      isInvalid
      helperText="You must 've to agree the terms"
    />
  );
};
