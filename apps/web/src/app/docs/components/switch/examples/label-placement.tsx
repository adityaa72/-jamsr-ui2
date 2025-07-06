import { Switch } from "@jamsrui/react";

export const SwitchLabelPlacement = () => {
  const placements: Switch.Props["labelPlacement"][] = [
    "bottom",
    "end",
    "start",
    "top",
  ];

  return (
    <div className="flex flex-col gap-8">
      {placements.map((placement) => {
        return (
          <Switch
            key={placement}
            labelPlacement={placement}
            label={`I am positioned at ${placement}`}
          />
        );
      })}
    </div>
  );
};
