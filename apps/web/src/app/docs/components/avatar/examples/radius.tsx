import { Avatar } from "@jamsrui/react";
import { useId } from "react";

export const AvatarRadius = () => {
  const id = useId();
  const radii: Avatar.Props["radius"][] = [
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
    <div className="flex gap-2">
      {radii.map((radius) => (
        <Avatar key={radius} radius={radius}>
          <Avatar.Image src={`https://i.pravatar.cc/300?u=${id}${radius}`} />
          <Avatar.Fallback />
        </Avatar>
      ))}
    </div>
  );
};
