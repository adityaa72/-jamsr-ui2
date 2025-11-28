import { InfoIcon } from "@jamsrui/icons";
import { IconButton, Tooltip } from "@jamsrui/react";

export const TooltipWithArrow = () => {
  return (
    <Tooltip>
      <Tooltip.Trigger>
        <IconButton label="Click Me!">
          <InfoIcon width={24} height={24} />
        </IconButton>
      </Tooltip.Trigger>
      <Tooltip.Content>
        <Tooltip.Arrow />I am tooltip
      </Tooltip.Content>
    </Tooltip>
  );
};
