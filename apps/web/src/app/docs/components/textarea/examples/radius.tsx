import { Textarea, Label, TextField } from "@jamsrui/react";

export const TextareaRadius = () => {
  return (
    <div className="grid gap-4">
      <TextField>
        <Label>Radius none</Label>
        <Textarea radius="none" />
      </TextField>
      <TextField>
        <Label>Radius sm</Label>
        <Textarea radius="sm" />
      </TextField>
      <TextField>
        <Label>Radius md</Label>
        <Textarea radius="md" />
      </TextField>
      <TextField>
        <Label>Radius lg</Label>
        <Textarea radius="lg" />
      </TextField>
      <TextField>
        <Label>Radius xl</Label>
        <Textarea radius="xl" />
      </TextField>
      <TextField>
        <Label>Radius 2xl</Label>
        <Textarea radius="2xl" />
      </TextField>
      <TextField>
        <Label>Radius 3xl</Label>
        <Textarea radius="3xl" />
      </TextField>
    </div>
  );
};
