import { Textarea, Label, TextField } from "@jamsrui/react";

export const TextareaDisabled = () => {
  return (
    <TextField>
      <Label>Enter your name</Label>
      <Textarea disabled />
    </TextField>
  );
};
