import { CloseIcon, EmailIcon, ImageAddIcon, TrashIcon } from "@jamsrui/icons";
import { Button } from "@jamsrui/react";

export const ButtonWithIcons = () => {
  return (
    <div className="flex flex-row gap-4">
      <Button color="success">
        <EmailIcon />
        Email
      </Button>
      <Button variant="bordered" color="primary">
        Call us
        <TrashIcon />
      </Button>
      <Button color="success">
        <ImageAddIcon />
        Upload Files
      </Button>
      <Button variant="bordered" color="danger">
        Delete user
        <CloseIcon />
      </Button>
    </div>
  );
};
