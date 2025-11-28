import { EmailIcon, InfoIcon } from "@jamsrui/icons";
import { IconButton, Tooltip, TooltipGroup } from "@jamsrui/react";

export const TooltipWithGroup = () => {
  return (
    <div className="flex gap-2">
      <TooltipGroup delay={200}>
        <Tooltip>
          <Tooltip.Trigger>
            <IconButton label="Click Me!">
              <InfoIcon width={24} height={24} />
            </IconButton>
          </Tooltip.Trigger>
          <Tooltip.Content>This is a tooltip within group</Tooltip.Content>
        </Tooltip>
        <Tooltip>
          <Tooltip.Trigger>
            <IconButton label="Click Me!">
              <EmailIcon width={24} height={24} />
            </IconButton>
          </Tooltip.Trigger>
          <Tooltip.Content>This is a tooltip within group</Tooltip.Content>
        </Tooltip>
      </TooltipGroup>
    </div>
  );
};
