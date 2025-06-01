import { Chip } from "@jamsrui/chip";

export const ChipVariantDot = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Chip color="default" variant="dot">
        default
      </Chip>
      <Chip color="primary" variant="dot">
        primary
      </Chip>
      <Chip color="secondary" variant="dot">
        secondary
      </Chip>
      <Chip color="success" variant="dot">
        success
      </Chip>
      <Chip color="warning" variant="dot">
        warning
      </Chip>
      <Chip color="danger" variant="dot">
        danger
      </Chip>
    </div>
  );
};
