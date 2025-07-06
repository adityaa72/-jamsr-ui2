"use client";

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
    <div>
      <Dialog {...restProps}>
        <DialogTrigger>
          <Button>{buttonText}</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>Heading</DialogHeader>
          <DialogBody className="flex flex-col gap-4">
            <Text>Im am dialog Body</Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos corrupti est quos asperiores libero maiores amet non
              obcaecati odio excepturi illo recusandae tenetur, qui earum
              dolorem minus, quibusdam optio? Cum.
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

export const DialogScrollBehavior = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <DialogItem buttonText="Inside" scrollBehavior="inside" />
      <DialogItem buttonText="Outside" scrollBehavior="outside" />
      <DialogItem buttonText="Bordered" scrollBehavior="inside" isBordered />
    </div>
  );
};
