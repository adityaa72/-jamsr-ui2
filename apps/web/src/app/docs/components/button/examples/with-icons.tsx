import { Button } from "@jamsrui/react";
import { CloseIcon, EmailIcon, ImageAddIcon, TrashIcon } from "@jamsrui/icons";

export const ButtonWithIcons = () => {
  return (
    <div className="flex flex-row gap-4">
      <Button startContent={<EmailIcon />} color="success">
        Email
      </Button>
      <Button endContent={<TrashIcon />} variant="bordered" color="primary">
        Call us
      </Button>
      <Button endContent={<ImageAddIcon />} color="success">
        Upload Files
      </Button>
      <Button endContent={<CloseIcon />} variant="bordered" color="danger">
        Delete user
      </Button>
    </div>
  );
};
