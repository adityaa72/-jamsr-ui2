"use client";

import { Switch } from "@jamsrui/react";
import { useState } from "react";

export const SwitchControlled = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Switch isChecked={isChecked} onCheckedChange={setIsChecked}>
      {isChecked ? "Checked" : "Unchecked"}
    </Switch>
  );
};
