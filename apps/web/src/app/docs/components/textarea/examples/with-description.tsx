import { Description, Textarea, Label, TextField } from "@jamsrui/react";

export const TextareaWithDescription = () => {
  return (
    <TextField>
      <Label>Username</Label>
      <Textarea placeholder="Enter your username" />
      <Description>Please use a unique username</Description>
    </TextField>
  );
};
