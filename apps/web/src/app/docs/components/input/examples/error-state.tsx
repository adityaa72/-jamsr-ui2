import {
  Description,
  FieldError,
  Input,
  Label,
  TextField,
} from "@jamsrui/react";

export const InputErrorState = () => {
  return (
    <TextField>
      <Label>Username</Label>
      <Input placeholder="Enter your username" />
      <Description>Please use a unique username</Description>
      <FieldError>Username is required</FieldError>
    </TextField>
  );
};
