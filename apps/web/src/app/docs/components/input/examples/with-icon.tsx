import { Input } from "@jamsrui/react";
import { EmailIcon } from "@jamsrui/icons";

export const InputWithIcon = () => {
  return (
    <Input
      label="Email"
      placeholder="Enter your email"
      type="email"
      startContent={<EmailIcon />}
    />
  );
};
