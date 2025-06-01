import { Button } from "@jamsr-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@jamsr-ui/react";

export const DrawerUsage = () => {
  return (
    <Drawer>
      <DrawerTrigger>
        <Button>Press Me!</Button>
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
