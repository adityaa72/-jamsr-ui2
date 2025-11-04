import {
  AvatarFallback,
  AvatarImage,
  AvatarRoot,
} from "@jamsrui/avatar/primitive";
import { Avatar } from "@jamsrui/react";
import { useId } from "react";

export const AvatarCustomization = () => {
  const id = useId();
  return (
    <Avatar
      alt="John"
      className="flex"
      src={`https://i.pravatar.cc/300?u=${id}`}
      isBordered
      color="warning"
      slots={{
        root: <AvatarRoot className="ring-3" />,
        fallback: <AvatarFallback />,
        img: <AvatarImage data-testid="img" />,
      }}
    />
  );
};
