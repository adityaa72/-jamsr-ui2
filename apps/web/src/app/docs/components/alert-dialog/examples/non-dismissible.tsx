import { AlertDialog, Button } from "@jamsrui/react";

export const AlertDialogNonDismissible = () => {
  return (
    <AlertDialog isDismissible={false} isKeyboardDismissible={false}>
      <AlertDialog.Trigger>
        <Button>Click to delete!</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Body>
          <AlertDialog.Title>Are you sure?</AlertDialog.Title>
          <AlertDialog.Description>
            You won't be able to revert this!
          </AlertDialog.Description>
        </AlertDialog.Body>
        <AlertDialog.Footer>
          <AlertDialog.TriggerClose>
            <Button variant="bordered">Cancel</Button>
          </AlertDialog.TriggerClose>
          <AlertDialog.TriggerClose>
            <Button variant="solid" color="danger">
              Confirm
            </Button>
          </AlertDialog.TriggerClose>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  );
};
