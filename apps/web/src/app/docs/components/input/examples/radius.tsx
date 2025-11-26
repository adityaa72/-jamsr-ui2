import { Input, Label, TextField } from "@jamsrui/react";

export const InputRadius = () => {
  return (
    <div className="grid gap-4">
      <TextField>
        <Label>Radius none</Label>
        <Input radius="none" />
      </TextField>
      <TextField>
        <Label>Radius sm</Label>
        <Input radius="sm" />
      </TextField>
      <TextField>
        <Label>Radius md</Label>
        <Input radius="md" />
      </TextField>
      <TextField>
        <Label>Radius lg</Label>
        <Input radius="lg" />
      </TextField>
      <TextField>
        <Label>Radius xl</Label>
        <Input radius="xl" />
      </TextField>
      <TextField>
        <Label>Radius 2xl</Label>
        <Input radius="2xl" />
      </TextField>
      <TextField>
        <Label>Radius 3xl</Label>
        <Input radius="3xl" />
      </TextField>
    </div>
  );
};
