"use client";

import { Description, Input, Label } from "@jamsrui/react";
import { useState } from "react";

export const InputControlled = () => {
  const [value, setValue] = useState("");
  return (
    <div className="flex flex-col gap-1">
      <Label>Name</Label>
      <Input value={value} onValueChange={setValue} />
      <Description>Your name is: {value}</Description>
    </div>
  );
};
