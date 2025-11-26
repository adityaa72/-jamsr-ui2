import { Input, Label } from "@jamsrui/react";

export const InputSizes = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <Label>Small</Label>
        <Input size="sm" />
      </div>
      <div className="flex flex-col gap-1">
        <Label>Medium</Label>
        <Input size="md" />
      </div>
      <div className="flex flex-col gap-1">
        <Label>Large</Label>
        <Input size="lg" />
      </div>
    </div>
  );
};
