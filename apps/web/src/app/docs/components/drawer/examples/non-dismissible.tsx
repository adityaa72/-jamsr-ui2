import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
  Text,
} from "@jamsrui/react";

export const DrawerNonDismissible = () => {
  return (
    <Drawer isKeyboardDismissible={false} isDismissible={false}>
      <DrawerTrigger>
        <Button>Click Me!</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>Product Filter</DrawerHeader>
        <DrawerBody>
          <Text className="mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
            laborum optio quo reiciendis odio facilis quos adipisci unde eum
            vero perspiciatis, minima iste doloribus voluptatibus officia dicta,
            maxime, placeat qui.
          </Text>
        </DrawerBody>
        <DrawerFooter>
          <DrawerCloseTrigger>
            <Button variant="light">Cancel</Button>
          </DrawerCloseTrigger>
          <DrawerCloseTrigger>
            <Button color="success">Apply</Button>
          </DrawerCloseTrigger>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
