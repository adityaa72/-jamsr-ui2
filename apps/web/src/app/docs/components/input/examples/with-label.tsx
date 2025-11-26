import { Input, Label, TextField } from "@jamsrui/react";

export const InputWithLabel = () => {
  return (
    <TextField>
      <Label>Username</Label>
      <Input placeholder="Enter your username" />
    </TextField>
  );
};
