import { Chip } from "@jamsr-ui/chip";

export const ChipVariants = () => {
  const variants: Chip.Props["variant"][] = [
    "solid",
    "outlined",
    "flat",
    "dot",
  ];
  return (
    <div className="flex flex-wrap gap-4">
      {variants.map((variant) => (
        <Chip color="primary" variant={variant} key={variant}>
          {variant}
        </Chip>
      ))}
    </div>
  );
};
