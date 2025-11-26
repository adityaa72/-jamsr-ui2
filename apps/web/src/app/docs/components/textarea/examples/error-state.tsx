"use client";

import {
  Description,
  FieldError,
  Textarea,
  Label,
  TextField,
} from "@jamsrui/react";
import { useState } from "react";

export const TextareaErrorState = () => {
  const [value, setValue] = useState("");
  const isInvalid = value.length === 0;
  return (
    <TextField>
      <Label>Username</Label>
      <Textarea
        placeholder="Enter your username"
        value={value}
        onValueChange={setValue}
        isInvalid={isInvalid}
      />
      <Description>Please use a unique username</Description>
      {isInvalid && <FieldError>Username is required</FieldError>}
    </TextField>
  );
};
