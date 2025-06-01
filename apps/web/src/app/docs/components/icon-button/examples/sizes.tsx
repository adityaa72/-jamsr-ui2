import { IconButton } from "@jamsr-ui/react";
import { EmailIcon } from "@jamsr-ui/icons";

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
