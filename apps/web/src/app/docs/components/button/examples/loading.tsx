import { Button } from "@jamsr-ui/button";
import { TrashIcon } from "@jamsr-ui/icons";

export const ButtonLoading = () => {
  return (
    <div className="flex flex-row gap-4">
      <Button isLoading spinnerPlacement="end" color="secondary">
        Saving...
      </Button>
      <Button startContent={<TrashIcon />} isLoading color="success">
        Success
      </Button>
      <Button isLoading color="warning">
        Warning
      </Button>
      <Button isLoading color="danger">
        Danger
      </Button>
    </div>
  );
};
