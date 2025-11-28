import { Button, Dialog, Text } from "@jamsrui/react";

export const DialogNonDismissible = () => {
  return (
    <Dialog isDismissible={false} isKeyboardDismissible={false}>
      <Dialog.Trigger>
        <Button>Click Me!</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header>Heading</Dialog.Header>
        <Dialog.Body className="flex flex-col gap-4">
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            corrupti est quos asperiores libero maiores amet non obcaecati odio
            excepturi illo recusandae tenetur, qui earum dolorem minus,
            quibusdam optio? Cum.
          </Text>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.CloseTrigger>
            <Button variant="light" color="secondary">
              Cancel
            </Button>
          </Dialog.CloseTrigger>
          <Dialog.CloseTrigger>
            <Button color="primary">Submit</Button>
          </Dialog.CloseTrigger>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  );
};
