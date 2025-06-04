import { Button } from "@jamsrui/react";
import { Tooltip } from "@jamsrui/react";

export const TooltipUsage = () => {
  return (
    <Tooltip title="This is a tooltip">
      <Button>Hover me</Button>
    </Tooltip>
  );
};
