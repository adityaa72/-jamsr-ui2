import { AvatarIcon } from "@jamsrui/icons";
import { Avatar } from "@jamsrui/react";

export const AvatarFallbacks = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Avatar>
        <Avatar.Fallback>JD</Avatar.Fallback>
      </Avatar>
      <Avatar>
        <Avatar.Fallback delayMs={1000}>A</Avatar.Fallback>
      </Avatar>
      <Avatar>
        <Avatar.Fallback delayMs={600}>
          <AvatarIcon />
        </Avatar.Fallback>
      </Avatar>
    </div>
  );
};
