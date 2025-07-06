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
} from "@jamsrui/react";

const DialogItem = (
  props: Partial<Dialog.Props> & {
    buttonText?: string;
  }
) => {
  const { buttonText, ...restProps } = props;
  return (
    <Dialog {...restProps}>
      <DialogTrigger>
        <Button>{buttonText}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>Heading</DialogHeader>
        <DialogBody className="flex flex-col gap-4">
          <Text>Im am dialog Body</Text>
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

export const DialogSizes = () => {
  const sizes: NonNullable<Dialog.Props["size"]>[] = [
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "4xl",
    "5xl",
    "full",
  ];
  return (
    <div className="flex flex-wrap gap-4">
      {sizes.map((size) => (
        <DialogItem buttonText={`size ${size}`} key={size} size={size} />
      ))}
    </div>
  );
};
