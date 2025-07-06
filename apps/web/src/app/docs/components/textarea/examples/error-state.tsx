import { Textarea } from "@jamsrui/react";

export const TextareaErrorState = () => {
  return (
    <Textarea
      label="Username"
      errorMessage="Please use a unique username"
      isInvalid
    />
  );
};
