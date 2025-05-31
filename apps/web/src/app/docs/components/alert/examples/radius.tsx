import { Alert, AlertDescription } from "@jamsr-ui/alert";

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
        <Alert key={radius} radius={radius}>
          <AlertDescription>
            {radius}: This is an {radius} Radius Alert
          </AlertDescription>
        </Alert>
      ))}
    </div>
  );
};
