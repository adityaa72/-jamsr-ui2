import { EmailIcon } from "@jamsrui/icons";
import { Input, InputGroup, Label } from "@jamsrui/react";

export const InputWithIcon = () => {
  return (
    <div>
      <Label>Email</Label>
      <InputGroup>
        <InputGroup.Prefix>
          <EmailIcon />
        </InputGroup.Prefix>
        <Input placeholder="Enter your email" type="email" className="w-full" />
      </InputGroup>
    </div>
  );
};
