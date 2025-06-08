import {
  Button,
  Dialog,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  Text,
} from "@jamsr-ui/react";

export const DialogCustomCloseButton = () => {
  return (
    <Dialog
      isBordered
      closeButton={
        <Button
          className="absolute right-2 top-2"
          variant="solid"
          color="danger"
        >
          Close
        </Button>
      }
    >
      <DialogTrigger>
        <Button>Click Me!</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>Heading</DialogHeader>
        <DialogBody className="flex flex-col gap-4">
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            corrupti est quos asperiores libero maiores amet non obcaecati odio
            excepturi illo recusandae tenetur, qui earum dolorem minus,
            quibusdam optio? Cum.
          </Text>
        </DialogBody>
        <DialogFooter>
          <DialogCloseTrigger>
            <Button variant="light" color="secondary">
              Cancel
            </Button>
          </DialogCloseTrigger>
          <DialogCloseTrigger>
            <Button color="primary">Submit</Button>
          </DialogCloseTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
