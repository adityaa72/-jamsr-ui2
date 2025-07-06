import { Textarea } from "@jamsrui/react";

export const TextareaPlaceholder = () => {
  return (
    <div className="space-y-4">
      <Textarea label="Small" size="sm" placeholder="Textarea your username" />
      <Textarea label="Medium" size="md" placeholder="Textarea your username" />
      <Textarea label="Large" size="lg" placeholder="Textarea your username" />
    </div>
  );
};
