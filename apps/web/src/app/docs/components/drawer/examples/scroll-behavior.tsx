import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@jamsrui/react";

const DrawerItem = (props: Partial<Drawer.Props> & { btnText: string }) => {
  const { btnText, ...restProps } = props;
  return (
    <Drawer {...restProps}>
      <DrawerTrigger>
        <Button>{btnText}</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>Product Filter</DrawerHeader>
        <DrawerBody>
          <p className="mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
            laborum optio quo reiciendis odio facilis quos adipisci unde eum
            vero perspiciatis, minima iste doloribus voluptatibus officia dicta,
            maxime, placeat qui.
          </p>
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

export const DrawerScrollBehavior = () => {
  return (
    <div className="flex gap-4">
      <DrawerItem btnText="Inside" scrollBehavior="inside" />
      <DrawerItem btnText="Outside" scrollBehavior="outside" />
      <DrawerItem btnText="With Border" scrollBehavior="inside" isBordered />
    </div>
  );
};
