import { Description, Label, Switch } from "@jamsrui/react";
import { SwitchProps } from "@jamsrui/switch";

export const SwitchColors = () => {
  const data: { color: SwitchProps["color"]; description: string }[] = [
    {
      color: "default",
      description: "Enable notifications (Default)",
    },
    {
      color: "primary",
      description: "Set as primary (Primary)",
    },
    {
      color: "secondary",
      description: "Enable advanced settings (Secondary)",
    },
    {
      color: "success",
      description: "Mark task as complete (Success)",
    },
    {
      color: "warning",
      description: "Show critical alerts (Warning)",
    },
    {
      color: "danger",
      description: "Delete user account (Danger)",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {data.map((item) => (
        <Switch key={item.color} color={item.color}>
          <Switch.Track />
          <Switch.Content>
            <Label className="capitalize">{item.color}</Label>
            <Description>{item.description}</Description>
          </Switch.Content>
        </Switch>
      ))}
    </div>
  );
};
