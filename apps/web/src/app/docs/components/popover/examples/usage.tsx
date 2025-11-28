import { Button, Popover } from "@jamsrui/react";

export const PopoverUsage = () => {
  return (
    <Popover placement="bottom">
      <Popover.Trigger>
        <Button>Click Me!</Button>
      </Popover.Trigger>
      <Popover.Content>
        Popover is a non-modal dialog that floats around its disclosure. It's
        commonly used for displaying additional rich content on top of
        something.
      </Popover.Content>
    </Popover>
  );
};
