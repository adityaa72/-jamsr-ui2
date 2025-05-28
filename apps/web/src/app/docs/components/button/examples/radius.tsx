import { Button } from "@jamsr-ui/button";

export const ButtonRadius = () => {
  const radii: Button.Props["radius"][] = [
    "none",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "full",
  ];
  return (
    <div className="flex flex-wrap gap-4">
      {radii.map((radius) => (
        <Button key={radius} radius={radius}>
          {radius}
        </Button>
      ))}
    </div>
  );
};
