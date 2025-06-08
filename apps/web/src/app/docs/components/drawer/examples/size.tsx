import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@jamsr-ui/react";

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

export const DrawerSize = () => {
  const sizes: NonNullable<Drawer.Props["size"]>[] = [
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
        <DrawerItem btnText={`Size ${size}`} key={size} size={size} />
      ))}
    </div>
  );
};
