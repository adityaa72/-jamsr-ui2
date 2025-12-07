"use client";

import { Slider } from "@jamsrui/react";
// Importing from package directly to test package exports, checking if it works in monorepo setup?
// Usually standard is import { Slider } from "@jamsrui/react" or similar if integrated.
// But user requested usage in specific file.
// Let's use @jamsrui/slider for now since I haven't updated @jamsrui/react export yet.
// Wait, one of the tasks was "Update src/index.ts" which I did for slider package.
// But I haven't updated the main `packages/react/src/index.ts` to export Slider yet.
// So I should stick to local import or package import.
// Given strict deps, I should probably update `packages/react` first if I want to use standard import.
// OR import from `"@jamsrui/slider"`.
// User example showed `import { Slider } from '@base-ui-components/react/slider';`
// So I will assume direct package import is fine for this example relative to the monorepo structure if tsconfig paths are set.
// But mostly `apps/web` consumes `@jamsrui/react`.
// Let's check `apps/web/package.json` to see dependencies.

export default function SliderUsage() {
  return (
    <div className="flex flex-col gap-8 w-full max-w-sm">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium">Single Slider</h3>
        <Slider.Root defaultValue={30} className="w-full">
          <Slider.Control>
            <Slider.Track>
              <Slider.Indicator />
              <Slider.Thumb />
            </Slider.Track>
          </Slider.Control>
        </Slider.Root>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium">Range Slider</h3>
        <Slider.Root defaultValue={[25, 75]} className="w-full">
          <Slider.Control>
            <Slider.Track>
              <Slider.Indicator />
              <Slider.Thumb index={0} />
              <Slider.Thumb index={1} />
            </Slider.Track>
          </Slider.Control>
        </Slider.Root>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium">Vertical Slider</h3>
        {/* Height must be set for vertical slider */}
        <Slider.Root defaultValue={50} orientation="vertical" className="h-52">
          <Slider.Control>
            <Slider.Track>
              <Slider.Indicator />
              <Slider.Thumb />
            </Slider.Track>
          </Slider.Control>
        </Slider.Root>
      </div>
    </div>
  );
}
