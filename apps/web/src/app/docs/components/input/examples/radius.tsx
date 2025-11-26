import { Input, Label } from "@jamsrui/react";

export const InputRadius = () => {
  return (
    <div className="grid gap-4">
      <div className="flex flex-col gap-1">
        <Label>Radius none</Label>
        <Input radius="none" />
      </div>
      <div className="flex flex-col gap-1">
        <Label>Radius sm</Label>
        <Input radius="sm" />
      </div>
      <div className="flex flex-col gap-1">
        <Label>Radius md</Label>
        <Input radius="md" />
      </div>
      <div className="flex flex-col gap-1">
        <Label>Radius lg</Label>
        <Input radius="lg" />
      </div>
      <div className="flex flex-col gap-1">
        <Label>Radius xl</Label>
        <Input radius="xl" />
      </div>
      <div className="flex flex-col gap-1">
        <Label>Radius 2xl</Label>
        <Input radius="2xl" />
      </div>
      <div className="flex flex-col gap-1">
        <Label>Radius 3xl</Label>
        <Input radius="3xl" />
      </div>
    </div>
  );
};
