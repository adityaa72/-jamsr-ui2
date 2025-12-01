import { Tabs } from "@jamsrui/react";

export const TabDisabled = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Tabs aria-label="Tabs variants" disabled>
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
    </div>
  );
};
