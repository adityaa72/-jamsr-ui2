import { Tabs } from "@jamsrui/react";

export const TabDisabledItem = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Tabs aria-label="Tabs variants">
        <Tabs.List>
          <Tabs.Tab value="photos">
            Photos
            <Tabs.Indicator />
          </Tabs.Tab>
          <Tabs.Tab value="music" disabled>
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
