"use client";

import { Button, Dialog, Text } from "@jamsrui/react";

const DialogItem = (
  props: Partial<Dialog.Props> & {
    buttonText?: string;
  }
) => {
  const { buttonText, ...restProps } = props;
  return (
    <div>
      <Dialog {...restProps}>
        <Dialog.Trigger>
          <Button>{buttonText}</Button>
        </Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Header>Heading</Dialog.Header>
          <Dialog.Body className="flex flex-col gap-4">
            <Text>Im am dialog Body</Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos corrupti est quos asperiores libero maiores amet non
              obcaecati odio excepturi illo recusandae tenetur, qui earum
              dolorem minus, quibusdam optio? Cum.
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
