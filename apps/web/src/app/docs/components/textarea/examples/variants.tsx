import { Textarea, Label, TextField } from "@jamsrui/react";

export const TextareaVariants = () => {
  return (
    <div className="flex flex-col gap-4">
      <TextField>
        <Label>Bordered</Label>
        <Textarea size="sm" variant="bordered" />
      </TextField>
      <TextField>
        <Label>Solid</Label>
        <Textarea size="md" variant="solid" />
      </TextField>
    </div>
  );
};
