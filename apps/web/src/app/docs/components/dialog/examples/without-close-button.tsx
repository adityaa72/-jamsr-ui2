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

export const DialogWithoutCloseButton = () => {
  return (
    <div>
      <Dialog closeButton={null}>
        <DialogTrigger>
          <Button>Open Me</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>Heading</DialogHeader>
          <DialogBody className="flex flex-col gap-4">
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
    </div>
  );
};
