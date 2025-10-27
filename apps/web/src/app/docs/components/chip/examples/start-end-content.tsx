import { Chip } from "@jamsrui/react";
import { CheckIcon, EmailIcon } from "@jamsrui/icons";

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
