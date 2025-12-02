import { AlertDialog, Button } from "@jamsrui/react";

export const AlertDialogRadius = () => {
  const radii: AlertDialog.Props["radius"][] = [
    "none",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
  ];
  return (
    <div className="flex gap-2 flex-wrap">
      {radii.map((radius) => (
        <AlertDialog key={radius} radius={radius}>
          <AlertDialog.Trigger>
            <Button>Radius {radius}</Button>
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
