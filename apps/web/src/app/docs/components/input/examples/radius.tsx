import { Input } from "@jamsr-ui/react";

export const InputRadius = () => {
  const radii: Input.Props["radius"][] = [
    "none",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
  ];
  return (
    <div className="grid gap-4">
      {radii.map((radius) => (
        <Input
          label="Enter your email"
          type="email"
          key={radius}
          radius={radius}
        />
      ))}
    </div>
  );
};
