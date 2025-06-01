import { IconButton } from "@jamsrui/react";
import { EmailIcon } from "@jamsrui/icons";

export const IconButtonRadius = () => {
  const radii: IconButton.Props["radius"][] = [
    "none",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "full",
  ];
  return (
    <div className="flex gap-4">
      {radii.map((radius) => (
        <IconButton
          label={`${radius} Icon Button`}
          key={radius}
          radius={radius}
        >
          <EmailIcon />
        </IconButton>
      ))}
    </div>
  );
};
