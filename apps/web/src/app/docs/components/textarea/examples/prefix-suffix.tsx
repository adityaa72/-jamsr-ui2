import { Textarea, InputGroup, Label, TextField } from "@jamsrui/react";

export const TextareaPrefixSuffix = () => {
  return (
    <div className="space-y-4">
      <TextField>
        <Label>Amount</Label>
        <InputGroup variant="solid">
          <InputGroup.Prefix>$</InputGroup.Prefix>
          <Textarea />
        </InputGroup>
      </TextField>
      <TextField>
        <Label>Discount</Label>
        <InputGroup variant="solid">
          <Textarea />
          <InputGroup.Suffix>%</InputGroup.Suffix>
        </InputGroup>
      </TextField>
      <TextField>
        <Label>Website</Label>
        <InputGroup variant="solid">
          <InputGroup.Prefix>https://</InputGroup.Prefix>
          <Textarea />
          <InputGroup.Suffix>.com</InputGroup.Suffix>
        </InputGroup>
      </TextField>
    </div>
  );
};
