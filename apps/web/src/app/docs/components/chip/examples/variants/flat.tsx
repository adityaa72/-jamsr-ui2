import { Chip } from "@jamsrui/chip";

export const ChipVariantFlat = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Chip color="default" variant="flat">
        default
      </Chip>
      <Chip color="primary" variant="flat">
        primary
      </Chip>
      <Chip color="secondary" variant="flat">
        secondary
      </Chip>
      <Chip color="success" variant="flat">
        success
      </Chip>
      <Chip color="warning" variant="flat">
        warning
      </Chip>
      <Chip color="danger" variant="flat">
        danger
      </Chip>
    </div>
  );
};
