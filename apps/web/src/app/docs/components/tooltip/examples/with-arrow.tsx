import { IconButton } from "@jamsrui/react";
import { InfoIcon } from "@jamsrui/icons";
import { Tooltip } from "@jamsrui/react";

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
