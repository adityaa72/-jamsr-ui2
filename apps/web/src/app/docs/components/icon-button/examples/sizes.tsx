import { IconButton } from "@jamsrui/react";
import { EmailIcon } from "@jamsrui/icons";

export const IconButtonSizes = () => {
  const sizes: IconButton.Props["size"][] = ["xs", "sm", "md", "lg"];
  return (
    <div className="flex items-center gap-4">
      {sizes.map((size) => (
        <IconButton label={`${size} Size IconButton`} key={size} size={size}>
          <EmailIcon />
        </IconButton>
      ))}
    </div>
  );
};
