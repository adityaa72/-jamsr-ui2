import { Button } from "@jamsr-ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@jamsr-ui/popover";

export const PopoverUsage = () => {
  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <Button>Press Me!</Button>
        </PopoverTrigger>
        <PopoverContent>I am the popover content</PopoverContent>
      </Popover>
    </div>
  );
};
