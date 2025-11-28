import { Button, Dialog, Text } from "@jamsrui/react";

export const DialogWithoutCloseButton = () => {
  return (
    <Dialog hideCloseButton>
      <Dialog.Trigger>
        <Button>Open Me</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header>Heading</Dialog.Header>
        <Dialog.Body className="flex flex-col gap-4">
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            molestias sequi? Aperiam fugit dignissimos doloribus doloremque
            ullam commodi libero voluptatum accusantium ut est, explicabo
            eveniet repellat eius ad velit. Recusandae?
          </Text>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            molestias sequi? Aperiam fugit dignissimos doloribus doloremque
            ullam commodi libero voluptatum accusantium ut est, explicabo
            eveniet repellat eius ad velit. Recusandae?
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
