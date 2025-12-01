import { Tabs } from "@jamsrui/react";

export const TabVariants = () => {
  const variants = ["underlined", "bordered", "solid", "light"] as const;
  return (
    <div className="inline-flex flex-col flex-wrap gap-4">
      {variants.map((variant) => (
        <Tabs key={variant} variant={variant} aria-label="Tabs variants">
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
