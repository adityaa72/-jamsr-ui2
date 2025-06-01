import { Button } from "@jamsrui/react";
import { Tooltip } from "@jamsrui/react";

export const TooltipUsage = () => {
  return (
    <div className="py-24 grid place-content-center gap-4">
      <Tooltip title="This is a tooltip">
        <Button>Hover me</Button>
      </Tooltip>
    </div>
  );
};
