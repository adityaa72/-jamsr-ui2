import { IconButton } from "@jamsr-ui/icon-button";
import { InfoIcon } from "@jamsr-ui/icons";
import { Popover, PopoverContent, PopoverTrigger } from "@jamsr-ui/popover";
import { Text } from "@jamsr-ui/text";

export const PopoverTriggerOnHover = () => {
  return (
    <div className="grid place-content-center">
      <Popover className="p-2" triggerOn="hover">
        <PopoverTrigger>
          <IconButton label="Popover Trigger">
            <InfoIcon />
          </IconButton>
        </PopoverTrigger>
        <PopoverContent>
          <Text>This is a Popover content</Text>
        </PopoverContent>
      </Popover>
    </div>
  );
};
