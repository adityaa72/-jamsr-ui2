import { Avatar } from "@jamsr-ui/avatar";
import { useId } from "react";

export const AvatarUsage = (props: Partial<Avatar.Props>) => {
  const id = useId();
  return (
    <Avatar
      alt="John"
      className="flex"
      src={`https://i.pravatar.cc/300?u=${id}`}
      {...props}
    />
  );
};
