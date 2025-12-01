import { Tabs } from "@jamsrui/react";

export const TabColors = () => {
  const colors = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
  ] as const;
  return (
    <div className="inline-flex flex-col flex-wrap gap-4">
      {colors.map((color) => (
        <Tabs key={color} color={color} aria-label="Tabs variants">
          <Tabs.List>
            <Tabs.Tab value="photos">
              Photos
              <Tabs.Indicator />
            </Tabs.Tab>
            <Tabs.Tab value="music">
              Music
              <Tabs.Indicator />
            </Tabs.Tab>
            <Tabs.Tab value="videos">
              Videos
              <Tabs.Indicator />
            </Tabs.Tab>
          </Tabs.List>
        </Tabs>
      ))}
    </div>
  );
};
