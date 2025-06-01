import { IconButton } from "@jamsr-ui/react";
import { InfoIcon } from "@jamsr-ui/icons";
import { Tooltip } from "@jamsr-ui/react";

export const TooltipWithArrow = () => {
  return (
    <div className="grid min-h-[100px] place-items-center">
      <Tooltip title="I am tooltip" showArrow>
        <IconButton label="Click Me!">
          <InfoIcon width={24} height={24} />
        </IconButton>
      </Tooltip>
    </div>
  );
};
