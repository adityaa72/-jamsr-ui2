import { Chip } from "@jamsr-ui/chip";

export const ChipBordered = () => {
  const colors: Chip.Props["color"][] = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
  ];
  return (
    <div className="flex flex-wrap gap-4">
      {colors.map((color) => (
        <Chip isBordered variant="flat" color={color} key={color}>
          {color}
        </Chip>
      ))}
    </div>
  );
};
