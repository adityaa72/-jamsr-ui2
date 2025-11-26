import { Input, InputGroup, Label } from "@jamsrui/react";

export const InputWithStartEndContent = () => {
  return (
    <div className="space-y-2">
      <div>
        <Label>Amount</Label>
        <InputGroup>
          <InputGroup.Prefix>$</InputGroup.Prefix>
          <Input />
        </InputGroup>
      </div>
      <div>
        <Label>Discount</Label>
        <InputGroup>
          <Input />
          <InputGroup.Suffix>%</InputGroup.Suffix>
        </InputGroup>
      </div>
    </div>
  );
};
