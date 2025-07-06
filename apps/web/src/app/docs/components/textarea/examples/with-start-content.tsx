import { Textarea } from "@jamsrui/react";

export const TextareaWithStartContent = () => {
  return (
    <Textarea
      label="Amount"
      startContent={<span className="text-foreground-400">$</span>}
    />
  );
};
