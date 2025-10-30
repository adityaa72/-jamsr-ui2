"use client";

import { Switch } from "@jamsrui/react";
import { useState } from "react";

export const SwitchControlled = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Switch
      labelPlacement="bottom"
      isChecked={isChecked}
      onCheckedChange={setIsChecked}
    >
      {isChecked ? "Checked" : "Unchecked"}
    </Switch>
  );
};
