import { Textarea } from "@jamsrui/react";
import { EmailIcon } from "@jamsrui/icons";

export const TextareaWithIcon = () => {
  return (
    <Textarea
      label="Email"
      placeholder="Enter your email"
      startContent={<EmailIcon />}
    />
  );
};
