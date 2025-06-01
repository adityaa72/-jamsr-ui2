import { Button } from "@jamsr-ui/react";
import { Tooltip } from "@jamsr-ui/react";

export const TooltipUsage = () => {
  return (
    <div className="py-24 grid place-content-center gap-4">
      <Tooltip title="This is a tooltip">
        <Button>Hover me</Button>
      </Tooltip>
    </div>
  );
};
