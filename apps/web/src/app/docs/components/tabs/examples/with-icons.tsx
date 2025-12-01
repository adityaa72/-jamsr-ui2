import { Icon } from "@iconify/react";
import { Tabs } from "@jamsrui/react";

export const TabWithIcons = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Tabs aria-label="Tabs variants">
        <Tabs.List>
          <Tabs.Tab value="photos">
            <Icon icon="ic:round-photo" />
            Photos
            <Tabs.Indicator />
          </Tabs.Tab>
          <Tabs.Tab value="music">
            <Icon icon="mynaui:music-solid" />
            Music
            <Tabs.Indicator />
          </Tabs.Tab>
          <Tabs.Tab value="videos">
            <Icon icon="tabler:video-filled" />
            Videos
            <Tabs.Indicator />
          </Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </div>
  );
};
