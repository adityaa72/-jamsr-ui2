import { Label, Switch } from "@jamsrui/react";
import { SwitchProps } from "@jamsrui/switch";

export const SwitchSizes = () => {
  const examples = [
    { size: "xs", label: "Notifications" },
    { size: "sm", label: "Dark Mode" },
    { size: "md", label: "Enable Two-Factor Authentication" },
    { size: "lg", label: "Receive Marketing Emails" },
  ] as { size: SwitchProps["size"]; label: string }[];

  return (
    <div className="flex flex-col gap-4">
      {examples.map((example) => (
        <Switch key={example.size} size={example.size}>
          <Switch.Track>
            <Switch.Thumb />
          </Switch.Track>
          <Label>{example.label}</Label>
        </Switch>
      ))}
    </div>
  );
};
