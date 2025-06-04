import { InfoIcon } from "@jamsrui/icons";
import { IconButton, Tooltip } from "@jamsrui/react";

export const TooltipWithArrow = () => {
  return (
    <Tooltip title="I am tooltip" showArrow>
      <IconButton label="Click Me!">
        <InfoIcon width={24} height={24} />
      </IconButton>
    </Tooltip>
  );
};
