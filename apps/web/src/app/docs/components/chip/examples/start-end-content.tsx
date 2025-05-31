import { Chip } from "@jamsr-ui/chip";
import { CheckIcon, EmailIcon } from "@jamsr-ui/icons";

export const ChipStartEndContent = () => {
  return (
    <div className="flex gap-4">
      <Chip startContent={<EmailIcon />}>Default</Chip>
      <Chip variant="flat" color="primary" startContent={<EmailIcon />}>
        Default
      </Chip>
      <Chip endContent={<CheckIcon />}>Default</Chip>
      <Chip variant="bordered" color="secondary" endContent={<CheckIcon />}>
        Default
      </Chip>
    </div>
  );
};
