import { Button } from "@jamsr-ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@jamsr-ui/popover";

const Page = () => {
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

export default Page;
