import { InfoIcon } from "@jamsrui/icons";
import { IconButton, Tooltip } from "@jamsrui/react";

export const TooltipOffset = () => {
  return (
    <Tooltip offset={20} title="This tooltip has offset 20">
      <IconButton label="Click Me!">
        <InfoIcon width={24} height={24} />
      </IconButton>
    </Tooltip>
  );
};
