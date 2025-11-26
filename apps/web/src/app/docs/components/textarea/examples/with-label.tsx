import { Textarea, Label, TextField } from "@jamsrui/react";

export const TextareaWithLabel = () => {
  return (
    <TextField>
      <Label>Username</Label>
      <Textarea placeholder="Enter your username" />
    </TextField>
  );
};
