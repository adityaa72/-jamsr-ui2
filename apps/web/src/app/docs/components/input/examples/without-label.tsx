import { Input } from "@jamsrui/react";

export const InputWithoutLabel = () => {
  return (
    <div className="flex flex-col gap-2">
      <Input placeholder="Enter your username" />
    </div>
  );
};
