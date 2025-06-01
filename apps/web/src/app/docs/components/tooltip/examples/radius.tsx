import { IconButton } from "@jamsrui/react";
import { InfoIcon } from "@jamsrui/icons";
import { Tooltip } from "@jamsrui/react";

export const TooltipRadius = () => {
  const radii: Tooltip.Props["radius"][] = [
    "none",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
  ];
  return (
    <div className="flex gap-4  min-h-[100px] items-center justify-center">
      {radii.map((radius) => (
        <Tooltip title="I am tooltip" key={radius} radius={radius}>
          <IconButton label="Click Me!">
            <InfoIcon width={24} height={24} />
          </IconButton>
        </Tooltip>
      ))}
    </div>
  );
};
