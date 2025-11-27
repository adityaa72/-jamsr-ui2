"use client";

import { Label, Switch } from "@jamsrui/react";
import { useState } from "react";

export const SwitchInputEvents = () => {
  const [checked, setChecked] = useState(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };
  return (
    <Switch
      inputProps={{
        onChange,
      }}
    >
      <Switch.Track />
      <Label>Switch is {checked ? "on" : "off"}</Label>
    </Switch>
  );
};
