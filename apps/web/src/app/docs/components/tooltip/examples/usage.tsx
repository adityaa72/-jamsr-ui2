import { Button, Tooltip } from "@jamsrui/react";

export const TooltipUsage = () => {
  return (
    <Tooltip>
      <Tooltip.Trigger>
        <Button>Hover me</Button>
      </Tooltip.Trigger>
      <Tooltip.Content>This is a tooltip</Tooltip.Content>
    </Tooltip>
  );
};
