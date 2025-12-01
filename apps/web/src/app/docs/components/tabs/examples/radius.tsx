import { Tabs } from "@jamsrui/react";

export const TabRadius = () => {
  const radii = ["none", "sm", "md", "lg", "xl", "full"] as const;
  return (
    <div className="inline-flex flex-col flex-wrap gap-4">
      {radii.map((radius) => (
        <Tabs key={radius} radius={radius} aria-label="Tabs variants">
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
