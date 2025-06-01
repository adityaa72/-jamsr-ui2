import { IconButton } from "@jamsrui/react";
import { InfoIcon } from "@jamsrui/icons";
import { Tooltip } from "@jamsrui/react";

export const TooltipOffset = () => {
  return (
    <div className="grid min-h-[100px] place-items-center">
      <Tooltip offset={20} title="This tooltip has offset 20">
        <IconButton label="Click Me!">
          <InfoIcon width={24} height={24} />
        </IconButton>
      </Tooltip>
    </div>
  );
};
