import { Input, Label } from "@jamsrui/react";

export const InputWithLabel = () => {
  return (
    <div className="flex flex-col gap-1">
      <Label>Username</Label>
      <Input placeholder="Enter your username" />
    </div>
  );
};
