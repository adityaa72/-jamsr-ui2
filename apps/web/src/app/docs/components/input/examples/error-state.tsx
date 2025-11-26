import { Description, FieldError, Input, Label } from "@jamsrui/react";

export const InputErrorState = () => {
  return (
    <div className="flex flex-col gap-2">
      <Label>Username</Label>
      <Input placeholder="Enter your username" />
      <Description>Please use a unique username</Description>
      <FieldError>Username is required</FieldError>
    </div>
  );
};
