import { IconButton } from "@jamsrui/react";
import { EmailIcon, InfoIcon } from "@jamsrui/icons";
import { Tooltip, TooltipGroup } from "@jamsrui/react";

export const TooltipWithGroup = () => {
  return (
    <div className="py-24 grid place-content-center gap-4">
      <div className="flex gap-2">
        <TooltipGroup delay={200}>
          <Tooltip title="This is a tooltip within group">
            <IconButton label="Click Me!">
              <InfoIcon width={24} height={24} />
            </IconButton>
          </Tooltip>
          <Tooltip title="This is a tooltip within group">
            <IconButton label="Click Me!">
              <EmailIcon width={24} height={24} />
            </IconButton>
          </Tooltip>
        </TooltipGroup>
      </div>
    </div>
  );
};
