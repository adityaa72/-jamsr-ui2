"use client";

import {
  Description,
  FieldError,
  Input,
  Label,
  TextField,
} from "@jamsrui/react";
import { useState } from "react";

export const InputErrorState = () => {
  const [value, setValue] = useState("");
  const isInvalid = value.length === 0;
  return (
    <TextField>
      <Label>Username</Label>
      <Input
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
