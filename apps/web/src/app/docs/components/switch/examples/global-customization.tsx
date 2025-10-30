"use client";

import { Switch, SwitchConfig } from "@jamsrui/react";
import { SwitchThumb } from "@jamsrui/switch/primitive";

export const SwitchGlobalCustomization = () => {
  return (
    <SwitchConfig
      size="xs"
      color="primary"
      slots={{ thumb: <SwitchThumb className="bg-red-200" /> }}
    >
      <Switch label="Hii there">This is the description</Switch>
    </SwitchConfig>
  );
};
