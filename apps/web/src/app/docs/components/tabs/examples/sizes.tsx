import { Tabs } from "@jamsrui/react";

export const TabSizes = () => {
  const sizes = ["sm", "md", "lg"] as const;
  return (
    <div className="inline-flex flex-col flex-wrap gap-4">
      {sizes.map((size) => (
        <Tabs key={size} size={size} aria-label="Tabs variants">
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
