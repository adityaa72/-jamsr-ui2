import { Clipboard } from "@jamsrui/react";

export const ClipboardWithoutButton = () => {
  return (
    <Clipboard text="Hello world!" hideCopyButton>
      Click me to copy text
    </Clipboard>
  );
};
