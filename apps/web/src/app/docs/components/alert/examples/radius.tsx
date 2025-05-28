import { Alert } from "@jamsr-ui/alert";

export const AlertRadius = () => {
  const radius: Alert.Props["radius"][] = [
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
    <div className="grid gap-4">
      {radius.map((radius) => (
        <Alert key={radius} radius={radius} status="info">
          {radius}: This is an {radius} Radius Alert
        </Alert>
      ))}
    </div>
  );
};
