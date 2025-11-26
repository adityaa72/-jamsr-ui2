import { Textarea, Label, TextField } from "@jamsrui/react";

export const TextareaSizes = () => {
  return (
    <div className="flex flex-col gap-4">
      <TextField>
        <Label>Small</Label>
        <Textarea size="sm" />
      </TextField>
      <TextField>
        <Label>Medium</Label>
        <Textarea size="md" />
      </TextField>
      <TextField>
        <Label>Large</Label>
        <Textarea size="lg" />
      </TextField>
    </div>
  );
};
