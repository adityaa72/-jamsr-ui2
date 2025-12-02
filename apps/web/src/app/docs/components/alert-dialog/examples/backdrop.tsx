import { AlertDialog, Button } from "@jamsrui/react";

export const AlertDialogBackdrop = () => {
  const backdrops: AlertDialog.Props["backdrop"][] = [
    "blur",
    "opaque",
    "transparent",
  ];
  return (
    <div className="flex gap-2">
      {backdrops.map((backdrop) => (
        <AlertDialog key={backdrop} backdrop={backdrop}>
          <AlertDialog.Trigger>
            <Button>Backdrop {backdrop}</Button>
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
      ))}
    </div>
  );
};
