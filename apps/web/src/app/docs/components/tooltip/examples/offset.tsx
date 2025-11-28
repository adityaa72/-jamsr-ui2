import { InfoIcon } from "@jamsrui/icons";
import { IconButton, Tooltip } from "@jamsrui/react";

export const TooltipOffset = () => {
  return (
    <Tooltip>
      <Tooltip.Trigger>
        <IconButton label="Click Me!">
          <InfoIcon width={24} height={24} />
        </IconButton>
      </Tooltip.Trigger>
      <Tooltip.Content>This tooltip has offset 20</Tooltip.Content>
    </Tooltip>
  );
};
