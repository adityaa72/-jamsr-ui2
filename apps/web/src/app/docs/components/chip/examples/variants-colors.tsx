import { Chip } from "@jamsr-ui/chip";

export const ChipVariantsColors = () => {
  const variants: Chip.Props["variant"][] = ["solid", "outlined", "flat"];
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
      {variants.map((variant) => (
        <div key={variant}>
          <div className="flex flex-wrap gap-4">
            {colors.map((color) => (
              <Chip variant={variant} color={color} key={color}>
                {variant}-{color}
              </Chip>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
