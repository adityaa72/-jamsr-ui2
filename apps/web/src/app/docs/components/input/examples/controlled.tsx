"use client";

import { Description, Input, Label, TextField } from "@jamsrui/react";
import { useState } from "react";

export const InputControlled = () => {
  const [value, setValue] = useState("");
  return (
    <TextField>
      <Label>Name</Label>
      <Input value={value} onValueChange={setValue} />
      <Description>Your name is: {value}</Description>
    </TextField>
  );
};
