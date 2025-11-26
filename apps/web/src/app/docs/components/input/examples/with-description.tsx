import { Description, Input, Label } from "@jamsrui/react";

export const InputWithDescription = () => {
  return (
    <div className="flex flex-col gap-1">
      <Label>Username</Label>
      <Input placeholder="Enter your username" />
      <Description>Please use a unique username</Description>
    </div>
  );
};
