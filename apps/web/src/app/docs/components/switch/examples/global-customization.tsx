"use client";

import { Switch, SwitchConfig } from "@jamsrui/switch";
import {
  SwitchDescription,
  SwitchThumb,
  useSwitchContext,
} from "@jamsrui/switch/primitive";

const CustomDescription = () => {
  const { isChecked } = useSwitchContext();
  return (
    <SwitchDescription>{isChecked ? "Checked" : "Unchecked"}</SwitchDescription>
  );
};

export const SwitchGlobalCustomization = () => {
  return (
    <div className="flex flex-col gap-4">
      <Switch label="Hii there">This is the description</Switch>
      <SwitchConfig
        size="xs"
        color="primary"
        classNames={{
          description: "text-primary",
        }}
        slots={{
          thumb: <SwitchThumb className="bg-red-500" data-testid="thumb" />,
        }}
      >
        <Switch
          label="Hii there"
          classNames={{ description: "rounded-lg" }}
          slots={{
            // description: <SwitchDescription className="bg-red-900" />,
            description: <CustomDescription />,
          }}
        >
          This is the description
        </Switch>
      </SwitchConfig>
    </div>
  );
};
