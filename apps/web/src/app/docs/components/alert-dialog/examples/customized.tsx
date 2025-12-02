import { AlertDialog, Button, Divider } from "@jamsrui/react";

export const AlertDialogCustomized = () => {
  return (
    <AlertDialog isKeyboardDismissible={false} isDismissible={false}>
      <AlertDialog.Trigger>
        <Button>Click to delete!</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content className="max-w-82">
        <AlertDialog.Body className="flex justify-center flex-col items-center gap-4 text-center">
          <AlertDialog.Title>Warning!</AlertDialog.Title>
          <AlertDialog.Description>
            Are you sure you want to delete this? You won't be able to revert
            this!
          </AlertDialog.Description>
        </AlertDialog.Body>
        <Divider />
        <AlertDialog.Footer className="p-0 gap-0 items-stretch">
          <AlertDialog.TriggerClose>
            <Button variant="light" className="w-full shrink">
              Cancel
            </Button>
          </AlertDialog.TriggerClose>
          <Divider orientation="vertical" />
          <AlertDialog.TriggerClose>
            <Button variant="light" className="w-full font-bold shrink">
              Confirm
            </Button>
          </AlertDialog.TriggerClose>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  );
};
