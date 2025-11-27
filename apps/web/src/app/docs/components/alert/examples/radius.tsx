import { Alert } from "@jamsrui/react";

export const AlertRadius = () => {
  const radius: AlertProps["radius"][] = [
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
          <Alert.Icon />
          <Alert.Content>
            {radius}: This is an {radius} Radius Alert
          </Alert.Content>
        </Alert>
      ))}
    </div>
  );
};
