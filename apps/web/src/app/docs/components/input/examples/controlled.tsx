"use client";

import { Input } from "@jamsrui/react";
import { useState } from "react";

export const InputControlled = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <Input
        label="Controlled Input"
        value={value}
        onValueChange={setValue}
      />
      <p className="text-foreground-secondary">Value: {value}</p>
    </div>
  );
};
