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
} from "@jamsr-ui/react";

export const DrawerCustomized = () => {
  return (
    <Drawer
      classNames={{
        header: "bg-red-500",
        body: "bg-content2",
        footer: "bg-content3",
        closeButton: "bg-red-900",
        popover: "border-2 border-red-950",
        backdrop: "bg-gray-900/20",
      }}
      slotProps={{
        closeButton: {
          size: "sm",
        },
      }}
    >
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
