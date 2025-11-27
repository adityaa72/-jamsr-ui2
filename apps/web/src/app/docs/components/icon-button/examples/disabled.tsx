import { IconButton } from "@jamsrui/react";
import { EmailIcon } from "@jamsrui/icons";

export const IconButtonDisabled = () => {
  return (
    <IconButton label="Disabled Icon Button" disabled>
      <EmailIcon />
    </IconButton>
  );
};
