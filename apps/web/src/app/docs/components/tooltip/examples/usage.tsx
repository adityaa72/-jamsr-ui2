import { Tooltip } from "@jamsr-ui/tooltip";

export const TooltipUsage = () => {
  return (
    <div className="py-24 px-24 grid gap-4">
      <Tooltip title="This is a tooltip">
        <button type="button">Click me</button>
      </Tooltip>
    </div>
  );
};
