import { IconButton } from "@jamsrui/react";
import { EmailIcon } from "@jamsrui/icons";

export const IconButtonLoading = () => {
  return (
    <div className="flex flex-row gap-4">
      <IconButton label="Loading Icon Button" isLoading>
        <EmailIcon />
      </IconButton>
      <IconButton color="success" label="Loading Icon Button" isLoading>
        <EmailIcon />
      </IconButton>
    </div>
  );
};
