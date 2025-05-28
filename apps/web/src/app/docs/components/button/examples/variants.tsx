import { Button } from "@jamsr-ui/button";

export const ButtonVariants = () => {
  const variants: Button.Props["variant"][] = [
    "solid",
    "light",
    "outlined",
    "text",
    "flat",
  ];
  return (
    <div className="flex flex-wrap gap-4">
      {variants.map((variant) => (
        <Button color="primary" key={variant} variant={variant}>
          {variant}
        </Button>
      ))}
    </div>
  );
};
