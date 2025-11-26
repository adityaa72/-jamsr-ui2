import { Input, InputGroup, Label, TextField } from "@jamsrui/react";

export const InputWithStartEndContent = () => {
  return (
    <div className="space-y-4">
      <TextField>
        <Label>Amount</Label>
        <InputGroup>
          <InputGroup.Prefix>$</InputGroup.Prefix>
          <Input />
        </InputGroup>
      </TextField>
      <TextField>
        <Label>Discount</Label>
        <InputGroup>
          <Input />
          <InputGroup.Suffix>%</InputGroup.Suffix>
        </InputGroup>
      </TextField>
      <TextField>
        <Label>Website</Label>
        <InputGroup>
          <InputGroup.Prefix>https://</InputGroup.Prefix>
          <Input />
          <InputGroup.Suffix>.com</InputGroup.Suffix>
        </InputGroup>
      </TextField>
    </div>
  );
};
