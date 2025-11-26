import { Input, InputGroup, Label, TextField } from "@jamsrui/react";

export const InputPrefixSuffix = () => {
  return (
    <div className="space-y-4">
      <TextField>
        <Label>Amount</Label>
        <InputGroup variant="solid">
          <InputGroup.Prefix>$</InputGroup.Prefix>
          <Input />
        </InputGroup>
      </TextField>
      <TextField>
        <Label>Discount</Label>
        <InputGroup variant="solid">
          <Input />
          <InputGroup.Suffix>%</InputGroup.Suffix>
        </InputGroup>
      </TextField>
      <TextField>
        <Label>Website</Label>
        <InputGroup variant="solid">
          <InputGroup.Prefix>https://</InputGroup.Prefix>
          <Input />
          <InputGroup.Suffix>.com</InputGroup.Suffix>
        </InputGroup>
      </TextField>
    </div>
  );
};
