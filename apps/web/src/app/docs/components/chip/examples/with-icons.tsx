import { CheckIcon, EmailIcon } from "@jamsrui/icons";
import { Chip } from "@jamsrui/react";

export const ChipWithIcons = () => {
  return (
    <div className="flex gap-4">
      <Chip>
        <EmailIcon />
        Default
      </Chip>
      <Chip variant="flat" color="primary">
        <EmailIcon />
        Default
      </Chip>
      <Chip>
        <CheckIcon />
        Default
      </Chip>
      <Chip variant="bordered" color="secondary">
        Default
        <CheckIcon />
      </Chip>
    </div>
  );
};
