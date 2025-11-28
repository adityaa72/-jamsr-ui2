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
        <Tooltip key={radius} radius={radius}>
          <Tooltip.Trigger>
            <IconButton label="Click Me!">
              <InfoIcon width={24} height={24} />
            </IconButton>
          </Tooltip.Trigger>
          <Tooltip.Content>I am tooltip</Tooltip.Content>
        </Tooltip>
      ))}
    </div>
  );
};
