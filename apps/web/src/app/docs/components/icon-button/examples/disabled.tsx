import { IconButton } from "@jamsr-ui/icon-button";
import { EmailIcon } from "@jamsr-ui/icons";

export const IconButtonDisabled = () => {
  return (
    <IconButton label="Disabled Icon Button" isDisabled>
      <EmailIcon />
    </IconButton>
  );
};
