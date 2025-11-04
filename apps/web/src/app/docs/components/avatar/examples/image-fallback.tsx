"use client";

import { Avatar } from "@jamsrui/react";

export const AvatarImageFallback = () => {
  return (
    <div className="flex gap-4">
      <Avatar
        alt="Admin"
        className="flex"
        src="https://error.jamsrworld.com/error.png"
        width={100}
        height={100}
        fallback={({ alt }) =>
          `https://avatar.iran.liara.run/username?username=${alt}`
        }
      />
      <Avatar
        className="flex"
        name="Jamsrworld"
        src="https://error.jamsrworld.com/error.png"
        width={100}
        height={100}
        fallback={({ name }) =>
          `https://avatar.iran.liara.run/username?username=${name}`
        }
      />
      <Avatar
        alt="image"
        className="flex"
        src="https://error.jamsrworld.com/error.png"
        width={100}
        height={100}
        fallback="https://avatar.iran.liara.run/public"
      />
      <Avatar
        alt="John Deo"
        className="flex"
        src="https://error.jamsrworld.com/error.png"
        width={100}
        height={100}
      />
    </div>
  );
};
