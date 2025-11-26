import { EmailIcon } from "@jamsrui/icons";
import { Input, InputGroup, Label, TextField } from "@jamsrui/react";

export const InputWithIcon = () => {
  return (
    <TextField>
      <Label>Email</Label>
      <InputGroup>
        <InputGroup.Prefix>
          <EmailIcon />
        </InputGroup.Prefix>
        <Input placeholder="Enter your email" type="email" className="w-full" />
      </InputGroup>
    </TextField>
  );
};
