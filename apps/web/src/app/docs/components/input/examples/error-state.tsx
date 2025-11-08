import { Input } from "@jamsrui/react";

export const InputErrorState = () => {
  return (
    <Input
      label="Username"
      description="This will help others finding you"
      errorMessage="Please use a unique username"
      isInvalid
    />
  );
};
