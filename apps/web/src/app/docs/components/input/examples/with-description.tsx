import { Description, Input, Label, TextField } from "@jamsrui/react";

export const InputWithDescription = () => {
  return (
    <TextField>
      <Label>Username</Label>
      <Input placeholder="Enter your username" />
      <Description>Please use a unique username</Description>
    </TextField>
  );
};
