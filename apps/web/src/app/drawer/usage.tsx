import { Button } from "@jamsr-ui/button";
import {
  Drawer,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@jamsr-ui/drawer";

export const DrawerUsage = () => {
  return (
    <div>
      <Drawer>
        <DrawerTrigger>
          <DrawerHeader>Product Filter</DrawerHeader>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerBody>
            <p className="mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
              laborum optio quo reiciendis odio facilis quos adipisci unde eum
              vero perspiciatis, minima iste doloribus voluptatibus officia
              dicta, maxime, placeat qui.
            </p>
          </DrawerBody>
        </DrawerContent>
        <DrawerFooter>
          <DrawerCloseTrigger>
            <Button variant="light">Cancel</Button>
          </DrawerCloseTrigger>
          <DrawerCloseTrigger>
            <Button color="success">Apply</Button>
          </DrawerCloseTrigger>
        </DrawerFooter>
      </Drawer>
    </div>
  );
};
