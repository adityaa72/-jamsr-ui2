import { Chip } from "@jamsr-ui/chip";

export const ChipSizes = () => {
  const sizes: Chip.Props["size"][] = ["xs", "sm", "md", "lg"];
  return (
    <div className="flex flex-wrap gap-4">
      {sizes.map((size) => (
        <Chip size={size} key={size}>
          Chip {size}
        </Chip>
      ))}
    </div>
  );
};
