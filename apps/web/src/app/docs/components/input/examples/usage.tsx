import { Input } from "@jamsr-ui/react";

export const InputUsage = () => {
  return (
    <Input
      className="top-[-0.6px]"
      label="Enter your email"
      type="email"
      isInvalid
      errorMessage="Please enter a valid email"
      helperText="We'll never share your email with anyone"
    />
  );
};
