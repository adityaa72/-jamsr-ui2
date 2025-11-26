import { Input, Label, TextField } from "@jamsrui/react";

export const InputVariants = () => {
  return (
    <div className="flex flex-col gap-4">
      <TextField>
        <Label>Bordered</Label>
        <Input size="sm" variant="bordered" />
      </TextField>
      <TextField>
        <Label>Solid</Label>
        <Input size="md" variant="solid" />
      </TextField>
    </div>
  );
};
