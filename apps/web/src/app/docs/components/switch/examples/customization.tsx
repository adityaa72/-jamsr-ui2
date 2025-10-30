"use client";

import { Switch } from "@jamsrui/react";
import {
  SwitchContent,
  SwitchDescription,
  SwitchLabel,
  SwitchRoot,
  SwitchThumb,
  SwitchTrack,
  SwitchWrapper,
} from "@jamsrui/switch/primitive";

export const SwitchCustomization = () => {
  return (
    <Switch
      label="Hii there"
      slots={{
        root: <SwitchRoot className="bg-red-950" />,
        label: <SwitchLabel className="font-medium" />,
        description: <SwitchDescription className="text-foreground-link" />,
        content: <SwitchContent className="border" />,
        wrapper: <SwitchWrapper className="border border-blue-900" />,
        track: <SwitchTrack className="border" />,
        thumb: <SwitchThumb className="border-2 border-blue-900" />,
      }}
    >
      This is the description
    </Switch>
  );
};
