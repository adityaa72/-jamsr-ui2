import { Input, Label, TextField } from "@jamsrui/react";

export const InputSizes = () => {
  return (
    <div className="flex flex-col gap-4">
      <TextField>
        <Label>Small</Label>
        <Input size="sm" />
      </TextField>
      <TextField>
        <Label>Medium</Label>
        <Input size="md" />
      </TextField>
      <TextField>
        <Label>Large</Label>
        <Input size="lg" />
      </TextField>
    </div>
  );
};
